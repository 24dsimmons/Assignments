using System;
using System.Collections.Generic;

namespace BookType
{
    public class Book
    {
        // ENUM (Book Categories)
        public enum BookTypeEnum
        {
            Fiction,
            NonFiction
        }

        // Properties (Attributes)
        public int BookID { get; set; }
        public string bookTitle { get; set; }
        public string BookAuthor { get; set; }
        public bool IsOut { get; set; }
        public DateTime DateCheckedOut { get; set; }

        public BookTypeEnum Type { get; set; }

        // History list
        private List<string> history;

        // Default Constructor
        public Book()
        {
            BookID = 0;
            bookTitle = "Unknown";
            BookAuthor = "Unknown";
            IsOut = false;
            Type = BookTypeEnum.Fiction;

            history = new List<string>(); // Creates new empty list called history
        }

        // Custom Constructor
        public Book(int bookID, string bookTitle, string bookAuthor, BookTypeEnum type)
        {
            BookID = bookID;
            this.bookTitle = bookTitle;
            BookAuthor = bookAuthor;
            Type = type;

            IsOut = false;
            DateCheckedOut = DateTime.Now;

            history = new List<string>();
            history.Add($"Book created on {DateCheckedOut}"); // Appends string to the history list
        }

        // Checkout Method
        public virtual bool Checkout()
        {
            if (IsOut)
            {
                history.Add("Book is already checked out.");
                return false;
            }

            IsOut = true;
            DateCheckedOut = DateTime.Now;

            history.Add("Book checked out successfully.");
            return true;
        }
        
    }
}