import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Item} from '../../interfaces/item';
import { ItemService} from '../../services/item.service';
import { ItemListComponent } from '../item-list/item-list.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('descInput', { static: true }) descInputRef: ElementRef;
  @ViewChild('priceInput', { static: true }) priceInputRef: ElementRef;

  faCoffee = faCoffee;
  constructor(private itemservice: ItemService) { }

  ngOnInit(): void {
  }
  teaName: string;
  teaDescription: string;
  teaPrice: number;
  teaImagePath: string
  
    itemList: Item[] = [];
  
  
  public response: 'Resources/Images/No-image-available.png'; 

  public uploadFinished = (event) => {
    this.response = event;
    this.teaImagePath = event;
    console.log(`upload Finished`, this.teaImagePath);
  }
  
  addName(teaName: string) {
    if (teaName) {
      this.teaName = teaName;
    }
  }
  addDescription(teaDescription: string) {
    if (teaDescription) {
      this.teaDescription = teaDescription;
    }
  }
  addPrice(teaPrice: number) {
    if (teaPrice) {
      this.teaPrice = teaPrice;
    }
  } 
}
