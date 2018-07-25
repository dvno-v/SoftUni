namespace _01.Phone_Book
{

    using System;
    using System.Linq;
    using System.Collections.Generic;
    public class Program
    {
        public static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').ToArray();
            var phoneBook = new Dictionary<string, string>();
            while (input[0]!="END")
            {
                switch (input[0])
                {
                    case "A":
                        phoneBook[input[1]] = input[2];
                        break;
                    case "S":
                        if (phoneBook.ContainsKey(input[1]))
                        {
                            Console.WriteLine($"{input[1]} -> {phoneBook[input[1]]}");
                        }
                        else
                        {
                            Console.WriteLine($"Contact {input[1]} does not exist.");
                        }
                        break;
                }
                input = Console.ReadLine().Split(' ').ToArray();

            }
        }
    }
}
