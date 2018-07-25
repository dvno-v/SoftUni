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
            var bookProp = new Dictionary<string, Book>();
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(' ');
                if (!bookProp.ContainsKey(input[1]))
                    bookProp.Add(input[1], new Book() { price = 0 });
                bookProp[input[1]].price += decimal.Parse(input[input.Length - 1]);
            }
            foreach (var item in bookProp.OrderByDescending(x=>x.Value.price).ThenBy(x=>x.Key))
            {
                Console.WriteLine($"{item.Key} -> {item.Value.price:f2}");
            }
        }
    }
    public class Book
    {
        public string title { get; set; }
        public string author { get; set; }
        public string publisher { get; set; }
        public DateTime releaseDate { get; set; }
        public long isbnNumber { get; set; }
        public decimal price { get; set; }
    }
}
