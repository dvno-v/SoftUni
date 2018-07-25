using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var clone = (int[])input.Clone();
            var firstPart = new int[input.Length/4];
            int k = input.Length / 4;
            var secondPart = new int[input.Length/4];
            var midllePart = new int[3*k];
            var reversedinput = (int[])input.Clone();
            reversedinput = reversedinput.Reverse().ToArray();

            for (int i = 0; i < k; i++)
            {
                firstPart[i] = input[i];
            }
            firstPart = firstPart.Reverse().ToArray();
            for (int j = 0; j < k; j++)
            {
                secondPart[j] = reversedinput[j];
            }
            Array.Reverse(secondPart);

            for (int i = k; i < 3*k; i++)
            {
                midllePart[i] = clone[i];
            }
            for (int i = 0; i < firstPart.Length; i++)
            {
                midllePart[i+k] += firstPart[i];
                Console.Write(midllePart[i+k] + " ");
            }
            Array.Reverse(midllePart);
            for (int i = secondPart.Length - 1; i >= 0; i--)
            {
                midllePart[i] += secondPart[i];
                Console.Write(midllePart[i]+ " ");
            }
            Console.WriteLine();

        }
    }
}
