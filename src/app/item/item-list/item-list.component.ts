import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Item} from '../../interfaces/item';
import { ItemService} from '../../services/item.service';
import { Router} from '@angular/router';
import { environment } from '../../../environments/environment'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  
  constructor(private itemservice: ItemService, private router: Router) { 
   
  }
  public response: {'dbPath': 'http://localhost:5001/Resources/Images/No-image-available.png'}; 
  faTrash= faTrash;
  itemList: Item[] = [];

  @Input() teaName: string;
  @Input() teaDescription: string;
  @Input() teaPrice: number;
  @Input() teaImagePath: string;
  
  ngOnInit(): void {
    this.itemservice.getItemList().subscribe((data) => {
     this.itemList = data;
    },
    (err) => console.log(err));
  }
  
  public newItem: Item;
  
  addItem(teaName,teaDescription,teaPrice,res) {
  
  this.newItem= {
    teaName:teaName,
    teaDescription:teaDescription,
    teaPrice:teaPrice,
    teaImagePath:res === undefined ? null : res.dbPath
  };
                         
  if(this.teaName && this.teaPrice) {  
      this.itemservice.addItem(this.newItem).subscribe(res => {
        this.itemservice.getItemList().subscribe((data) => {          
         this.itemList = data as Item[];
         this.onRefresh();
        },
        (err) => console.log(err));
        this.ngOnInit();
      },
      (err) => console.log(err));
    } 
    else {
      alert('Please enter Item name and Price');
    }
  }

  delete(index) {
    this.itemservice.deleteItem(index).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    (err) => console.log(err)
    );
    this.itemservice.deleteItem(index);
  }

  public createImgPath = (serverPath: string) => {
    if (serverPath){
      return environment.API_URL + serverPath;      
    }
    return environment.API_URL + 'Resources//Images//No-image-available.png'
  }

  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
  
    let currentUrl = this.router.url + '?';
  
    this.router.navigateByUrl(currentUrl)
      .then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
    }
}
