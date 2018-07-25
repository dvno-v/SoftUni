using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _01.Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            var pattern = @"(?<=\s)[a-z0-9]+([-._][a-z0-9]+)*@[a-z]+([-.][a-z]+)*\.[a-z]+";
            Regex regex = new Regex(pattern);
            foreach (Match match in regex.Matches(Console.ReadLine()))
            {
                Console.WriteLine(match.Value);
            }
        }
    }
}
