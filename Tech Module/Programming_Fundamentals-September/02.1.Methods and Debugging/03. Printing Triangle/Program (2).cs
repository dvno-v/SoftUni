using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Printing_Triangle
{
    class Program
    {
        static void TriangeOfNumbers(int n)
        {
            for (int j = 1; j <= n; j++)
            {
                Console.Write(j + " ");

            }
            Console.WriteLine();
        }
        static void Main(string[] args)
        {
            int n = Int32.Parse(Console.ReadLine());
            for (int i = 1; i <= n; i++)
            {
                TriangeOfNumbers(i);
            }
            for (int i = n - 1; i >= 0; i--)
            {
                TriangeOfNumbers(i);
            }
        }
    }
}
