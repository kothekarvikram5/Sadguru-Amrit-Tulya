import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { Observable, of } from 'rxjs';
import { HttpEventType, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  
  constructor(private http: HttpClient) { }

  getItemList(): Observable<any> {
    return this.http.get( environment.API_URL +'api/GetItems')
  }
  
  getItemListById(id: number): Observable<any> {
    return this.http.get( environment.API_URL +'api/GetItemsById/' + id);
  }

  addItem(item: Item): Observable<any>  {
   return this.http.post<Item>(environment.API_URL +'api/AddItems', item)
  }

  deleteItem(index: number): Observable<any> {
    let params = new HttpParams().set('id', index.toString());
    return this.http.delete(environment.API_URL + 'api/DeleteItems/' + index, { params:params })
  }
}
