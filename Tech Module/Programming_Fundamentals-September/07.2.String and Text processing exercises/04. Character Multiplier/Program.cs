using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _04.Character_Multiplier
{
    class Program
    {
        public static string BiggerString(string first, String second)
        {
            if (first.Length>second.Length)
            {
                return first;
            }
            else
            {
                return second;
            }
        }
        public static BigInteger charMultyplier(string first, string second)
        {
            BigInteger sum = 0;
            if (first.Length == second.Length)
            {
                for (int i = 0; i < first.Length; i++)
                {
                    BigInteger number1 = first[i];
                    BigInteger number2 = second[i];
                    sum += number1 * number2;
                }
            }
            else
            {
                var smallerStringLength = Math.Min(first.Length, second.Length);
                var biggerStringLength = Math.Max(first.Length, second.Length);
                for (int i = 0; i < smallerStringLength; i++)
                {
                    BigInteger number1 = first[i];
                    BigInteger number2 = second[i];
                    sum += number1 * number2;
                }
                String biggerString = BiggerString(first, second);
                for (int j = smallerStringLength; j < biggerStringLength; j++)
                {
                    sum += biggerString[j];
                }
            }
            return sum;
        }
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                .Split(' ').ToArray();
            var firstString = input[0];
            var secondString = input[1];
            var sumOfStrings = charMultyplier(firstString, secondString);
            Console.WriteLine(sumOfStrings);
        }
    }
}
