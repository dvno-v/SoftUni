namespace watching_and_trying
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine()
                .ToLower()
                .Split(new char[] {' ', '.', ',', ':', ';', '(', ')', '[', ']', '"', '"', '/', '\\', '!', '?', '\''},StringSplitOptions.RemoveEmptyEntries)
                .Where(x => x.Length < 5)
                .Distinct().OrderBy(x =>x).ToList();
            Console.WriteLine(String.Join(", ",input));
                

        }
    }
}
