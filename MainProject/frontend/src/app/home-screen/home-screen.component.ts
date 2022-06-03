import { BookService } from './../apis/book.service';
import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
  books: any;

  topBooks: Product[] = [
    {
      id: 1,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image:
        'https://salt.tikicdn.com/cache/280x280/ts/product/22/cb/a9/524a27dcd45e8a13ae6eecb3dfacba7c.jpg',
      price: 49,
      quantity: 100,
      borrowed: 12,
      rate: 5,
    },
    {
      id: 2,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image:
        'https://salt.tikicdn.com/cache/280x280/ts/product/83/93/6e/946742368370ff9504f71acf73cd4cd9.jpg',
      price: 119,
      quantity: 100,
      borrowed: 12,
      rate: 3,
    },
    {
      id: 3,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image:
        'https://salt.tikicdn.com/cache/280x280/ts/product/81/47/55/75dec2ab26549c43e2a08bcbfdf8c295.jpg',
      price: 75,
      quantity: 100,
      borrowed: 12,
      rate: 4,
    },
    {
      id: 4,
      title: 'Đời Có Thật Nhạt Nhẽo Hay Do Ta Vô Vị',
      description: '',
      image:
        'https://salt.tikicdn.com/cache/280x280/ts/product/53/ec/b6/e67dfef8643496ef9abe6e5430b1a630.jpg',
      price: 56,
      quantity: 100,
      borrowed: 12,
      rate: 5,
    },
  ];

  constructor(private bookService: BookService, private router: Router,) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  goToDetailBook(id: string) {
    this.router.navigate([`/book/detail`, {id}]);
  }

  // setVisibility(position: string) {
  //   this.visible = true;
  //   this.position = position;
  // }

  // onDrawerHide() {

  // }
}
