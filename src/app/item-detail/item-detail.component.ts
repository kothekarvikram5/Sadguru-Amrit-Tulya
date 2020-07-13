import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../interfaces/item';
import {  Router ,ActivatedRoute,ParamMap   } from '@angular/router';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private itemservice: ItemService, private router: Router, private route: ActivatedRoute){}

  selectedItem: Item;
  public teaId:number;
  faAngleDoubleLeft=faAngleDoubleLeft;
  ngOnInit(): void {  
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.teaId = id;
    this.itemservice.getItemListById(this.teaId).subscribe((data) => {
     this.selectedItem = data;
    },
    (err) => {
      this.router.navigate(['**']);
      console.log(err)
    });
  }

  public createImgPath = (serverPath: string) => {
    if (serverPath){
      return environment.API_URL + serverPath;      
    }
    return environment.API_URL + 'Resources//Images//No-image-available.png'
  }
}
