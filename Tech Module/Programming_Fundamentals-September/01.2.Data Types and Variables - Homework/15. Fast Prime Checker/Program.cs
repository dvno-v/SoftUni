using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15.Fast_Prime_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            int nubmerToBeChecked = int.Parse(Console.ReadLine());
            for (int i = 2; i <= nubmerToBeChecked; i++)
            {
                bool isItPrime = true;
                for (int devise = 2; devise <= Math.Sqrt(i); devise++)
                {
                    if (i % devise == 0)
                    {
                        isItPrime = false;
                        break;
                    }
                }
                Console.WriteLine($"{i} -> {isItPrime}");
            }

        }
    }
}
