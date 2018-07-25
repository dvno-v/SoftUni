using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Max_Method
{
    class Program
    {
        static int Max(int a ,int b)
        {
            if (a>b)
            {
                return a;
            }
            return b;

        }
        static void Main(string[] args)
        {
            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());
            int thirdNumber = int.Parse(Console.ReadLine());
            int max = Max(firstNumber, secondNumber);
            Console.WriteLine(Max(max,thirdNumber));

        }
    }
}
