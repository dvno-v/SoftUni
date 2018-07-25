using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Draw_a_Filled_Square
{
    class Program
    {
        static void top(int numberOfDashes)
        {
            Console.WriteLine(new string('-', 2 * numberOfDashes));
        }

        static void middlePart(int n)
        {
            for (int i = 0; i < n-2 ; i++)
            {
                Console.Write("-");
                for (int j = 0; j < n-1; j++)
                {
                    Console.Write("\\/");
                }
                Console.Write("-");
                Console.WriteLine();
            }
        }
        static void bottom(int numberOfDashes)
        {
            Console.WriteLine(new string('-', 2 * numberOfDashes));
        }
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            top(n);
            middlePart(n);
            bottom(n);
        }
    }
}
