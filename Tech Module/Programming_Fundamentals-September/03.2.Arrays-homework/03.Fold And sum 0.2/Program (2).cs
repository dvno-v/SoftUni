using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Fold_And_sum_0._2
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                .Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse).ToArray();
            int k = input.Length / 4;
            var fisrtPortion = input.Take(k).ToArray();
            var secondPortion = input.Skip(3 * k).Take(k).ToArray();
            var middlePart = input.Skip(k).Take(2 * k).ToArray();
            Array.Reverse(fisrtPortion);
            Array.Reverse(secondPortion);
            for (int i = 0; i < fisrtPortion.Length; i++)
            {
                middlePart[i] += fisrtPortion[i];

            }
            Array.Reverse(middlePart);
            Array.Reverse(secondPortion);

            for (int i = 0; i < secondPortion.Length; i++)
            {
                middlePart[i] += secondPortion[i];
            }
            Array.Reverse(middlePart);
            Console.WriteLine(String.Join(" ",middlePart));
        }
    }
}
