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
        public DateTime DateCheckedOut { get; set; }

        //Enumerator's for Book Types
        public enum BookType
        {
            Fiction,
            NonFiction
        }
        public BookType TypeofBook { get; set; }
        private List<string> TypeofBookhistory;

        // Methods = An action that Classes can do

        public Book()
        {
            BookID = 0;
            BookTitle = "Unknown";
            DateCheckedOut = DateTime.Now;
        }

    }

}
