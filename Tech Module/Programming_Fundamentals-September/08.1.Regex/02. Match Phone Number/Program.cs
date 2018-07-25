namespace _02.Match_Phone_Number
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;

    public class Program
    {
        public static void Main()
        {
            var pattern = @"\+359( |-)2\1\d{3}\1\d{4}\b";
            var phones = Console.ReadLine();
            var regex = new Regex(pattern);
            var matches = regex.Matches(phones);
            var listOfPhones = new List<Match>();
            foreach (Match match in matches)
            {
                listOfPhones.Add(match);
            }
            Console.WriteLine(string.Join(", ",listOfPhones));
        }
    }
}
