using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Count_Substring_Occurrences
{
    class Program
    {
        public static bool getStatus(string myString)
        {
            string first = myString.Substring(0, myString.Length / 2);
            char[] arr = myString.ToCharArray();
            Array.Reverse(arr);
            string temp = new string(arr);
            string second = temp.Substring(0, temp.Length / 2);
            return first.Equals(second);
        }

        static void Main(string[] args)
        {
            var inputWords = Console.ReadLine().Split(new char[] { ' ', ',', '!', '?', '.' },StringSplitOptions.RemoveEmptyEntries)
                .ToArray();
            var palindromes = new List<string>();
            foreach (var word in inputWords)
            {
                if (getStatus(word))
                {
                    palindromes.Add(word);
                }
            }
            Console.WriteLine(string.Join(", ",palindromes.OrderBy(x=>x)));
        }
    }
}
