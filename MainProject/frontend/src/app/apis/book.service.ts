import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'https://6245777e6b7ecf057c1e3dc3.mockapi.io/v1/list-shirt/book';

  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get(this.url);
  }

  getBookById(id: string | any) {
    return this.http.get(`${this.url}/${id}`);
  }
}
