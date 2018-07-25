namespace _03.Match_Hexadecimal_Numbers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;

    public class Program
    {
        public static void Main()
        {
            var pattern = @"(?:0x)?[A-F0-9]+\b";
            var regex = new Regex(pattern);
            var input = Console.ReadLine();
            var matches = regex.Matches(input).Cast<Match>().Select(a=>a.Value).ToArray();
            Console.WriteLine(string.Join(" ",matches));
            
        }
    }
}
