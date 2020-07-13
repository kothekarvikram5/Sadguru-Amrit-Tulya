import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  faAngleDoubleLeft=faAngleDoubleLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
