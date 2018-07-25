using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Unicode_Characters
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                .Select(x => string.Format("u{0:X4}", Convert.ToInt16(x))).ToList();
            List<string> unicodeCharacters = new List<string>();
            foreach (var word in input)
            {
                unicodeCharacters.Add(word.ToLower());
            }
            Console.WriteLine("\\" +String.Join("\\",unicodeCharacters));
        }
    }
}
