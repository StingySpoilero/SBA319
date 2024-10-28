# Book Sharing Application

## Description
This application allows users to register, log in, create book entries, and comment on them. Users can share their favorite books and engage with other readers through comments.

## API Routes

### User Routes
- `POST /api/users/register`: Create a new user.
- `POST /api/users/login`: Log in an existing user.

### Book Routes
- `GET /api/books`: Get all books.
- `GET /api/books/:id`: Get a book by ID.
- `POST /api/books`: Create a new book entry.
- `PATCH /api/books/:id`: Update a book entry.
- `DELETE /api/books/:id`: Delete a book entry.

### Comment Routes
- `GET /api/comments/book/:id`: Get comments for a book.
- `POST /api/comments/book/:id`: Add a comment to a book.
- `DELETE /api/comments/:id`: Delete a comment.

