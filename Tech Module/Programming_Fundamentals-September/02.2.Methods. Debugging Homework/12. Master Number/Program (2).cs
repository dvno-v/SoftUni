using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace _12.Master_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            for (int i = 1; i <= number; i++)
            {
                if (IsPalindrome(i) && SumOfDigits(i) && ContainsEvenDigit(i))
                {
                    Console.WriteLine(i);
                }
            }
        }
        static bool IsPalindrome(int num)
        {
            int reversednumber = 0;
            int nubmerForReverse = num;
            while (nubmerForReverse > 0)
            {
                int r = nubmerForReverse % 10;
                reversednumber = reversednumber * 10 + r;
                nubmerForReverse /= 10;

            }
            if (num == reversednumber)
            {
                return true;
            }
            return false;
            
        }

        static bool SumOfDigits(int num)
        {
            int sumsOfDigits = 0;
            while (num>0)
            {
                sumsOfDigits += num % 10;
                num /= 10;
            }
            if (sumsOfDigits % 7 == 0)
            {
                return true;
            }
            return false;
        }

        static bool ContainsEvenDigit(int num)
        {
            int digit = 0;
            while (num >0)
            {
                digit = num % 10;
                num /= 10;
                if (digit  %2==0)
                {
                    return true;
                }
            }
            return false;
        }
        
    }
}
