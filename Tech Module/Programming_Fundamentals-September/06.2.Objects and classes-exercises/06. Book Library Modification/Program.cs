namespace _05.Book_Library
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    public class Program
    {
        // {title} {author} {publisher} {release date} {ISBN} {price}.
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            var bookProp = new List<Book>();
            for (int i = 0; i < n; i++)
            {
                var newBook = new Book();
                var input = Console.ReadLine().Split(new char[] { ' '},StringSplitOptions.RemoveEmptyEntries);
                newBook.title = input[0];
                newBook.releaseDate = DateTime.ParseExact(input[3], "dd.MM.yyyy", CultureInfo.InvariantCulture);
                bookProp.Add(newBook);
            }
            var date = new DateTime();
            var inputDate = Console.ReadLine();
            date = DateTime.ParseExact(inputDate, "dd.MM.yyyy", CultureInfo.InvariantCulture);
            foreach (var item in bookProp.OrderBy(x => x.releaseDate).ThenBy(x=>x.title).Where(dates => dates.releaseDate > date))
            {
                Console.WriteLine($"{item.title} -> {item.releaseDate:dd.MM.yyyy}");
            }
        }
    }
    public class Book
    {
        public string title { get; set; }
        public DateTime releaseDate { get; set; }
    }
}
