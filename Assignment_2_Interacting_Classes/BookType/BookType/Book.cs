using System.Text;
using System.Threading.Tasks;


namespace BookType
{
    public class Book
    {
        //Atributes for Books
        public int BookID { get; set; }
        public string BookTitle { get; set; }
        public bool IsOut { get; set; }
        public string BookAuthor { get; set; }

        public DateTime DateCheckedOut { get; set; }

        //Enumerator's for Book Types
        public enum BookType
        {
            Fiction,
            NonFiction
        public BookType TypeofBook { get; set; }

        // Collections
        private List<string> TypeofBookhistory;

        // Methods = An action that Classes can do

        public Book()
        // Constructor 
        {
            BookID = 0;
            BookTitle = "Unknown";
            IsOut = false;
            BookAuthor = "Unknown";
            BookType = BookType.Fiction;
            TypeofBookhistory = new List<string>();

        }

        public Book(int  bookID, string bookTitle , bool isOut, string BookAuthor, BookType bookType)
        {
            BookID = bookID;
            BookTitle = bookTitle;
            IsOut = isOut;
            DateCheckedOut = DateTime.Now;
            TypeofBookhistory = new List<string>();
            bookType.Add ($"Account opened on {DateCheckedOut}")
        }

        public virtual void Checkout (Boolean)
        {
            if (IsOut)
            {
                TypeofBookhistory.Add("Book is currently checkedout! Please Try again another time...")
                return true; // When isout == true that means that the book is checked out! 
            }

            IsOut = false;
            return TypeofBookhistory.Add("Book is now checkedout to you!")

        }

    }

}
