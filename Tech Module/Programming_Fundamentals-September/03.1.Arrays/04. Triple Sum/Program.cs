using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Triple_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var Numbers = Console.ReadLine().Split(' ').Select(s => long.Parse(s)).ToArray();

            long[] ArrayOfNumbers = Numbers;
            bool notFound = false;
            for (int i = 0; i < ArrayOfNumbers.Length; i++)
            {
                for (int j = i +1; j < ArrayOfNumbers.Length; j++)
                {
                var sum = ArrayOfNumbers[i]+ ArrayOfNumbers[j];
                    if (ArrayOfNumbers.Contains(sum))
                    {
                        Console.WriteLine($"{ArrayOfNumbers[i]} + {ArrayOfNumbers[j]} == {sum}");
                        notFound = true;

                    }
                }
            }
            if (!notFound)
            {
                Console.WriteLine("No");
            }
        }
    }
}
