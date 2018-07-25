using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Last_K_Numbers_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());

            var array = new long[n];
            array[0] = 1;
            for (int currentNumber = 0; currentNumber < n; currentNumber++)
            {
                var sum = 0L;
                var start = Math.Max(0, currentNumber - k);
                for (int i = start; i < n; i++)
                {
                    sum += array[i];
                }
                array[currentNumber] = sum;
            }
            Console.WriteLine(String.Join(" ",array));
        }
    }
}
