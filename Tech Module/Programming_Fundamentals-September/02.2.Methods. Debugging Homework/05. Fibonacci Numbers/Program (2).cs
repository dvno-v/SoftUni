using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Fibonacci_Numbers
{
    class Program
    {
        static int Fibonachi(int firstNumber , int SecondNumber, int n)
        {
            int fibonachiResult=0;
            if (n==0)
            {
                return 1;
            }
            if (n <=2)
            {
                return n;
            }
            for (int i = 1; i < n; i++)
            {
                fibonachiResult = firstNumber + SecondNumber;
                SecondNumber = firstNumber;
                firstNumber = fibonachiResult;
            }
            return fibonachiResult;
        }
        static void Main(string[] args)
        {
            int n = Int32.Parse(Console.ReadLine());
            int FirstNumber = 1;
            int SecondNumber = 1;
            Console.WriteLine(Fibonachi(FirstNumber , SecondNumber, n));
        }
    }
}
