using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Split_by_Word_Casing
{
    class Program
    {
        static bool IsAllUpper(char[] input)
        {
            for (int i = 0; i < input.Length; i++)
            {
                if (!Char.IsUpper(input[i]))
                    return false;
            }

            return true;
        }
        static bool IsAllLower(char[] input)
        {
            for (int i = 0; i < input.Length; i++)
            {
                if (!Char.IsLower(input[i]))
                    return false;
            }

            return true;
        }
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                .Split(new char[] {' ', ',', ';', ':', '.', '!', '(', ')', '\"', '\'', '/', '\\', '[', ']'}
                ,StringSplitOptions.RemoveEmptyEntries)
                .ToArray();
            List<string> lowerCaseWords = new List<string>();
            var upperCaseWords = new List<string>();
            var middleClassWords = new List<string>();
            for (int i = 0; i < input.Length; i++)
            {
                if (IsAllLower(input[i].ToCharArray()))
                {
                    lowerCaseWords.Add(input[i]);
                }
                if (IsAllUpper(input[i].ToCharArray()))
                {
                    upperCaseWords.Add(input[i]);
                }
                if (IsAllLower(input[i].ToCharArray()) == false && IsAllUpper(input[i].ToCharArray())==false)
                {
                    middleClassWords.Add(input[i]);
                }
            }
            Console.WriteLine("Lower-case: " + String.Join(", ",lowerCaseWords));
            Console.WriteLine("Mixed-case: " + String.Join(", ",middleClassWords));
            Console.WriteLine("Upper-case: " + String.Join(", ",upperCaseWords));

        }
    }
}
