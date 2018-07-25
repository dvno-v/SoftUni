namespace _02.Phonebook_Upgrade
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').ToArray();
            var phoneBook = new SortedDictionary<string, string>();
            while (input[0] != "END")
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
                    case "ListAll":
                        foreach (var nameAndPhone in phoneBook)
                        {
                            Console.WriteLine($"{nameAndPhone.Key} -> {nameAndPhone.Value}");
                        }
                        break;
                }
                input = Console.ReadLine().Split(' ').ToArray();

            }
        }
    }
}
