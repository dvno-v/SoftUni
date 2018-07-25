using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Rage_Quit
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var stringMatches = Regex.Matches(input, @"[^0-9]+(?=[0-9]+)");
            var massage = new List<string>();
            var uniqueSymbols = new HashSet<char>();
            foreach (Match str in stringMatches)
            {
                var currentMassage = str.Value.ToUpper();
                massage.Add(currentMassage);
                foreach (var item in currentMassage)
                {
                    uniqueSymbols.Add(item);
                }
            }
            var numbers = new List<int>();
            var numberMatch = Regex.Matches(input, @"[0-9]+");
            foreach (Match Num in numberMatch)
            {
                numbers.Add(int.Parse(Num.Value));
            }
            var count = 0;
            Console.WriteLine($"Unique symbols used: {uniqueSymbols.Count}");
            var strings = new StringBuilder();
            foreach (var num in numbers)
            {
                for (int i = 0; i < num; i++)
                {
                    strings.Append(massage[count]);
                }
                count++;
            }
            Console.WriteLine(strings.ToString());
        }
    }
}
