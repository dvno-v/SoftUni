using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Rounding_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var number = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            var Array = number;
            for (int i = 0; i < Array.Length; i++)
            {
                Console.WriteLine($"{Array[i]} => {Math.Round(Array[i], MidpointRounding.AwayFromZero)}");
            }

        }
    }
}
