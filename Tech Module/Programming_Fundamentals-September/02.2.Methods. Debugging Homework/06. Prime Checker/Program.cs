using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Prime_Checker
{
    class Program
    {
        static bool PrimeChecker(long number)
        {
            if (number == 0 || number == 1)
            {
                return false;
            }
            for (int i = 2; i < number - 1; i++)
            {
                if (number % i == 0)
                {
                    return false;
                }
            }
            return true;
        }
        static void Main(string[] args)
        {
            long nubmer = long.Parse(Console.ReadLine());
            Console.WriteLine(PrimeChecker(nubmer));
        }
    }
}
