using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Advertisement_Message
{
    public class Program
    {
        public static void Main()
        {
            string[] phrases = new string[]
                {
                    "Excellent product.",
                    "Such a great product.",
                    "I always use that product.",
                    "Best product of its category.",
                    "Exceptional product.",
                    "I can’t live without this product."
                };
            string[] events = new string[]
                {
                    "Now I feel good.",
                    "I have succeeded with this product.",
                    "Makes miracles. I am happy of the results!",
                    "I cannot believe but now I feel awesome.",
                    "Try it yourself, I am very satisfied.",
                    "I feel great!"
                };
            string[] authors = new string[]
                {
                    "Diana",
                    "Petya",
                    "Stella",
                    "Elena",
                    "Katya",
                    "Iva",
                    "Annie",
                    "Eva"
                };
            string[] cities = new string[] { "Burgas", "Sofia", "Plovdiv", "Varna", "Ruse" };
            var random = new Random();
            var randomPhrase = random.Next(0, phrases.Length);
            var randomEvent = random.Next(0, events.Length);
            var randomAuthor = random.Next(0, authors.Length);
            var randomCity = random.Next(0, cities.Length);
            int n = Int32.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                randomPhrase = random.Next(0, phrases.Length);
                randomEvent = random.Next(0, events.Length);
                randomAuthor = random.Next(0, authors.Length);
                randomCity = random.Next(0, cities.Length);
                Console.WriteLine($"{phrases[randomPhrase]} {events[randomEvent]} {authors[randomAuthor]} – {cities[randomCity]}.");
            }
        }
    }
}
