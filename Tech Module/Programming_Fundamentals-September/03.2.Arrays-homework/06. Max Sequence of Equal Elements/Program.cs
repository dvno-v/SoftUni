using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Max_Sequence_of_Equal_Elements
{
    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse).ToArray();
            int start = 0;
            int length = 1;
            int bestLenght = 0;
            int bestStart = 0;
            for (int index = 1; index < input.Length; index++)
            {
                if (input[index] == input[start])
                {
                    length++;
                    if (length > bestLenght)
                    {
                        bestStart = start;
                        bestLenght = length;
                    }
                }

                else
                {
                    start = index;
                    length = 1;

                }
            }
            for (int i = bestStart; i < bestStart + bestLenght; i++)
            {
                Console.Write(input[i] + " ");
            }

        }
    }
}

