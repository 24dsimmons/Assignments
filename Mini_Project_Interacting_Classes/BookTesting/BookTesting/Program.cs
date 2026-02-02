using System;
using BookType;

class Program
{
    static void Main()
    {
        Console.WriteLine("Starting Book Test...\n");

        Fiction book1 = new Fiction(
            1,
            "Harry Potter",
            "J.K. Rowling",
            "Fantasy"
        );

        NonFiction book2 = new NonFiction(
            2,
            "Atomic Habits",
            "James Clear",
            "Self Improvement"
        );

        Console.WriteLine("Attempting checkout...\n");
        Console.WriteLine($"Checking out {book1.BookTitle} as a fiction book...");
        Console.WriteLine($"Checking out {book2.BookTitle} as a non-fiction book...");

        book1.Checkout();
        book2.Checkout();

        Console.WriteLine("\nFinished.");

        Console.ReadLine();
    }
}
