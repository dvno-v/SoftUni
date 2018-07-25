using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _05.Match_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var pattern = @"(^|(?<=\s))-?\d+(\.\d+)?($|(?=\s))";
            var regex = new Regex(pattern);
            foreach (Match item in regex.Matches(Console.ReadLine()))
            {
                Console.Write(item.Value+" ");
            }
            Console.WriteLine();
        }
    }
}
