// TypeScript code.
class Book {
  id: number;
  title: string;
  author: string;
  year: number;

  constructor(id:number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// Function to display book information
function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  if (bookList){
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>By ${book.author}, ${book.year}</p>
    `;
    bookList.appendChild(bookDiv);
  }
}

// Create some book objects
const book1 = new Book(1, "The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book(2, "The Lord of the Rings", "J.R.R. Tolkien", 1954);

// Display the books on the webpage
displayBook(book1);
displayBook(book2);

// create an interface for reviews
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

const reviews: Review[] = [];

// Show one review under the book that it belongs to
function displayReview(review: Review): void {
  const bookDiv = document.getElementById(`book-${review.bookId}`);
  if (!bookDiv) {
    return;
  }

  const reviewP = document.createElement("p");
  reviewP.textContent = `${review.rating}/5 - ${review.comment}`;
  bookDiv.appendChild(reviewP);
}

function addReview(bookId: number, rating: number, comment: string): Review {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
  displayReview(review);
  return review;
}

addReview(1, 4, "A classic that never gets old. ");
addReview(2, 5, "Every page is a delight.");