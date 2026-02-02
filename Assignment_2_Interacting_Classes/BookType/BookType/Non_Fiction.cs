using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookType
{
    public class NonFiction : Book
    {
        public string Subject { get; set; }

        public NonFiction(int id, string title, string author, string subject)
            : base(id, title, author, Book.BookTypeEnum.NonFiction)
        {
            Subject = subject;
        }

        public override bool Checkout()
        {
            Console.WriteLine($"Checking out {bookTitle} as a non-fiction book...");
            return base.Checkout();
        }
    }
}
