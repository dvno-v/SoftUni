using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Regexmon
{
    class Program
    {
        static void Main(string[] args)
        {
            StringBuilder input = new StringBuilder(Console.ReadLine());
            var wordPattern = new Regex(@"[A-Za-z]+-[A-Za-z]+");
            var charPattern = new Regex(@"[^a-z-A-Z+\n]+");
            while (true)
            {
                var digiMatch = charPattern.Match(input.ToString());
                if (digiMatch.Success)
                {
                    string digi = digiMatch.Value.ToString();
                    Console.WriteLine(digi);
                }
                else return;
                input = input.Remove(0, digiMatch.Index+digiMatch.Length);
                var bojoMatch = wordPattern.Match(input.ToString());
                if (bojoMatch.Success)
                {
                    string bojo = bojoMatch.Value.ToString();
                    Console.WriteLine(bojo);
                }
                else return;
                input = input.Remove(0, bojoMatch.Index + bojoMatch.Length);
            }
        }
    }
}
