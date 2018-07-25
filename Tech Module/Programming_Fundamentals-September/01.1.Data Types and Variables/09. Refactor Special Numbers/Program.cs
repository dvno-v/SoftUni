using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Refactor_Special_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int limitingNumber = int.Parse(Console.ReadLine());
            int sum = 0;
            int currentNumber = 0;
            bool IsEqual = false;
            for (int i = 1; i <= limitingNumber; i++)
            {
                currentNumber = i;
                while (i > 0)
                {
                    sum += i % 10;
                    i = i / 10;
                }
                IsEqual = (sum == 5) || (sum == 7) || (sum == 11);
                Console.WriteLine($"{currentNumber} -> {IsEqual}");
                sum = 0;
                i = currentNumber;
            }

        }
    }
}
