import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor() { }
   products = [
    {
      productName:"TV",
      price:"400$"
    },
    {
      productName:"Mobile",
      price:"600$"
    },
    {
      productName:"iPhone",
      price:"900$"
    }
   ]

  ngOnInit() {
  }

}
