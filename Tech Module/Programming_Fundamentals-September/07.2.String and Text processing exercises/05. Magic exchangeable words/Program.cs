using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _05.Magic_exchangeable_words
{
    class Program
    {
        static bool IsMagicWord(string[] input) 
        {
            var firstWord = input[0].ToCharArray();
            firstWord = firstWord.Distinct().ToArray();
            var secondWord = input[1].ToCharArray();
            secondWord = secondWord.Distinct().ToArray();
            if (firstWord.Length==secondWord.Length)
            {
                return true;
            }
            return false;
        }
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').ToArray();
            if (IsMagicWord(input))
                Console.WriteLine("true");
            else
                Console.WriteLine("false");
        }
    }
}
