namespace _01.Match_Full_Name
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;

    public class Program
    {
        public static void Main()
        {
            var pattern = @"\b[A-Z][a-z]{1,}?\s[A-Z][a-z]+\b";
            var input = Console.ReadLine();
            var regex = new Regex(pattern);
            var matches = regex.Matches(input);
            foreach (Match match in matches)
            {
                Console.Write(match.Value+" ");
            }
            Console.WriteLine();
        }
    }
}
