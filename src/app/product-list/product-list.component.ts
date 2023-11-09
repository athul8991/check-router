import { Component } from '@angular/core';
import { ShareData } from '../shared/data-shared';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  data:ShareData = new ShareData;
  products = this.data.products
}
