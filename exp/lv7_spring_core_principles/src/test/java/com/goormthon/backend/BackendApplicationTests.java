package com.goormthon.backend;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.goormthon.backend.entity.Book;
import com.goormthon.backend.repository.BookRepository;
import com.goormthon.backend.service.BookService;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendApplicationTests {

  @Mock
  private BookRepository bookRepository;

  @InjectMocks
  private BookService bookService;

  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  void runAllTests() {
    System.out.println("Starting integration tests...");

    try {
      testGetAllBooks();
      System.out.println("✔ testGetAllBooks passed");
    } catch (AssertionError e) {
      System.err.println("✘ testGetAllBooks failed: " + e.getMessage());
    }

    try {
      testGetBookById();
      System.out.println("✔ testGetBookById passed");
    } catch (AssertionError e) {
      System.err.println("✘ testGetBookById failed: " + e.getMessage());
    }

    try {
      testAddBook();
      System.out.println("✔ testAddBook passed");
    } catch (AssertionError e) {
      System.err.println("✘ testAddBook failed: " + e.getMessage());
    }

    try {
      testDeleteBook();
      System.out.println("✔ testDeleteBook passed");
    } catch (AssertionError e) {
      System.err.println("✘ testDeleteBook failed: " + e.getMessage());
    }

    System.out.println("Integration tests completed.");
  }

  @Test
  void testGetAllBooks() {
    List<Book> mockBooks = Arrays.asList(
      new Book(1L, "Book 1", "Author 1"),
      new Book(2L, "Book 2", "Author 2")
    );

    when(bookRepository.findAll()).thenReturn(mockBooks);

    List<Book> books = bookService.getAllBooks();
    assertEquals(2, books.size());
    verify(bookRepository, times(1)).findAll();
  }

  @Test
  void testGetBookById() {
    Book mockBook = new Book(1L, "Book 1", "Author 1");

    when(bookRepository.findById(1L)).thenReturn(Optional.of(mockBook));

    Optional<Book> book = bookService.getBookById(1L);
    assertTrue(book.isPresent());
    assertEquals("Book 1", book.get().getTitle());
    verify(bookRepository, times(1)).findById(1L);
  }

  @Test
  void testAddBook() {
    Book mockBook = new Book(1L, "New Book", "New Author");

    when(bookRepository.save(mockBook)).thenReturn(mockBook);

    Book savedBook = bookService.addBook(mockBook);
    assertNotNull(savedBook);
    assertEquals("New Book", savedBook.getTitle());
    verify(bookRepository, times(1)).save(mockBook);
  }

  @Test
  void testDeleteBook() {
    doNothing().when(bookRepository).deleteById(1L);

    bookService.deleteBook(1L);

    verify(bookRepository, times(1)).deleteById(1L);
  }
}
