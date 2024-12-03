package com.goormthon.backend.controller;

import com.goormthon.backend.entity.Book;
import com.goormthon.backend.service.BookService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/books")
public class BookController {

  private final BookService bookService;

  public BookController(BookService bookService) {
    this.bookService = bookService;
  }

  @GetMapping
  public String getBooks(Model model) {
    model.addAttribute("books", bookService.getAllBooks());
    return "books";
  }

  @PostMapping
  public String addBook(
    @RequestParam String title,
    @RequestParam String author
  ) {
    Book book = new Book();
    book.setAuthor(author);
    book.setTitle(title);
    bookService.addBook(book);
    return "redirect:/books";
  }

  @PostMapping("/delete/{id}")
  public String deleteBook(@PathVariable Long id) {
    bookService.deleteBook(id);
    return "redirect:/books";
  }
}
