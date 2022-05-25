import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  books: Product[] = [
    {
      id: 1,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image: 'https://salt.tikicdn.com/cache/200x200/ts/product/0b/78/57/9717a495221c9c1dcb265fb8c7cad9e0.jpg.webp',
      price: 49000,
      quantity: 100,
      rate: 5,
    },
    {
      id: 2,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image: 'https://salt.tikicdn.com/cache/200x200/ts/product/27/2e/63/308986aa2c17293af227162874ad24a3.jpg.webp',
      price: 119000,
      quantity: 100,
      rate: 3,
    },
    {
      id: 3,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image: 'https://salt.tikicdn.com/cache/200x200/ts/product/26/5d/69/7bf0649939f10d3545325d7b17c11223.jpg.webp',
      price: 75000,
      quantity: 100,
      rate: 4,
    },
    {
      id: 4,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image: 'https://salt.tikicdn.com/cache/200x200/ts/product/50/bd/eb/51937df1d205a27deb93bde1dda06f05.jpg.webp',
      price: 56000,
      quantity: 100,
      rate: 5,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
