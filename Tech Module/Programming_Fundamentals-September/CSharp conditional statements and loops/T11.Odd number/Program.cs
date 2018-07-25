using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T11.Odd_number
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            if (num % 2 != 0)
            {
                Console.WriteLine("The number is: {0}",Math.Abs(num));
            }
            else if (num % 2 == 0)
            {
                for (int i = 0; i < 10; i++)
                {
                    Console.WriteLine("Please write an odd number.");
                    num = int.Parse(Console.ReadLine());
                    if (num % 2 != 0)
                    {
                        Console.WriteLine("The number is: {0}", Math.Abs(num));
                        break;
                    }
                }
            }
        }
    }
}
