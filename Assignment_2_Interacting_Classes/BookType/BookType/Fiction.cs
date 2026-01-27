using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookType
{
    public class Fiction : Book
    {
        public string Genre { get; set; }

        public Fiction(int id, string title, string author, string genre)
            : base(id, title, author, Book.BookTypeEnum.Fiction)

        {
            Genre = genre;
        }

        public override bool Checkout()
        {
            Console.WriteLine($"Checking out {BookTitle} as a fiction book...");
            return base.Checkout();
        }
    }

}
