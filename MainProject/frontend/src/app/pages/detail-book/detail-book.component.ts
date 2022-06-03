import { BookService } from './../../apis/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css'],
})
export class DetailBookComponent implements OnInit {
  id: string | any = null;
  book: any;

  constructor(
    protected route: ActivatedRoute,
    private bookService: BookService
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log('id: '+this.id);
    await this.getBookById();
  }

  // -------- FETCH DATA -------- //
  getBookById() {
    this.bookService.getBookById(this.id).subscribe((response) => {
      console.log(response);
      this.book = response;
      console.log('book: '+this.book);
      console.log(JSON.stringify(this.book));
    })
  }
}
