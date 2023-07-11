import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-some-books',
  templateUrl: './some-books.component.html',
  styleUrls: ['./some-books.component.css']
})
export class SomeBooksComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  featuredAuthors: string[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.filterRandomBooks();
    });
  }

  filterRandomBooks(): void {
    this.books.sort(() => Math.random() - 0.5);
    this.filteredBooks = this.books.slice(0, 4);
  
    // Obtener los autores de los libros filtrados y Crear una lista con los 3 primeros autores
    const authors = this.filteredBooks.map(book => book.author);
    this.featuredAuthors = authors.slice(0, 3);
  }
}
