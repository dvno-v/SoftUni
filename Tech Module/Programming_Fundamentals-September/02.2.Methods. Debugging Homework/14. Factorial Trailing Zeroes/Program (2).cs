using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;
namespace _14.Factorial_Trailing_Zeroes
{
    class Program
    {
        static void TrailingZonesCounter(BigInteger num)
        {
            int TrailingZonesCounter = 0;
            BigInteger lastdigit = 0;
            while (num > 0)
            {
                lastdigit = num % 10;
                num /= 10;
                if (lastdigit == 0)
                {
                    TrailingZonesCounter +=1 ;
                }
                else
                {
                    break;
                }

            }
            Console.WriteLine(TrailingZonesCounter);
            
        }
        static void Main(string[] args)
        {
            BigInteger n = BigInteger.Parse(Console.ReadLine());
            BigInteger factorial = 1;
            for (int i = 1; i <= n; i++)
            {
                factorial *= i;
            }
            TrailingZonesCounter(factorial);
        }
    }
}
