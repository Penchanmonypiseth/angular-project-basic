import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  items = [
    {
      id: '1',
      productName: 'Coca',
      price: '1$',
      stock: 'available',
    },
    {
      id: '2',
      productName: 'Donut',
      price: '1$.50',
      stock: 'available',
    },
    {
      id: '3',
      productName: 'Power Ranger Toy',
      price: '13$',
      stock: 'unavailable',
    },
    {
      id: '4',
      productName: 'Coconut',
      price: '3$',
      stock: 'available',
    },
    {
      id: '5',
      productName: 'Banana',
      price: '14$',
      stock: 'unavailable',
    },
  ];

  searchText: string = '';

  onFilterProduct(data: string) {
    this.searchText = data;
    console.log(data);
  }
}
