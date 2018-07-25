using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace _05.Compare_Char_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                .Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(char.Parse).ToArray();
            var input2 = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(char.Parse).ToArray();
            bool areEqual = true;
            for (int i = 0; i < Math.Min(input.Length, input2.Length); i++)
            {
                if (input[i] > input2[i])
                {
                    areEqual = false;
                }
                else
                {
                    areEqual = true;
                }
            }
            
            if (areEqual)
            {
                if (input.Length > input2.Length)
                {
                    Console.WriteLine(String.Join("", input2));
                    Console.WriteLine(String.Join("", input));
                }
                else if (input.Length < input2.Length)
                {
                    Console.WriteLine(String.Join("", input));
                    Console.WriteLine(String.Join("", input2));
                }
                else if (input.Length==input2.Length&&areEqual)
                {
                    Console.WriteLine(String.Join("", input));
                    Console.WriteLine(String.Join("", input2));
                }
            }
            else
            {
                if (input.Length > input2.Length)
                {
                    Console.WriteLine(String.Join("", input2));
                    Console.WriteLine(String.Join("", input));
                }
                else if (input.Length < input2.Length)
                {
                    Console.WriteLine(String.Join("", input));
                    Console.WriteLine(String.Join("", input2));
                }
                else
                {
                    Console.WriteLine(String.Join("", input));
                    Console.WriteLine(String.Join("", input2));
                }
                }
        }
    }
}

