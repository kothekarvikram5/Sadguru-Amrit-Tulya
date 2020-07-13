import { Injectable} from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public progress: number;
  public message: string;
  public uploadFinish: any;
  constructor(private http: HttpClient) { }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('http://localhost:3000/api/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total);
          console.log(this.progress);
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.uploadFinish = event.body;
          console.log(this.message);
          console.log(this.uploadFinish);
          // this.onUploadFinished.emit(event.body);
        }
      });
  }
}

