using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Equal_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(long.Parse).ToArray();
            bool exitBecauseNoMatch = false;
            for (long i = 0; i < input.Length; i++)
            {
                var sumToLeft = 0L;
                var sumToRight = 0L;

                //SumfromItoItsLeft
                for (long j = 0; j < i; j++)
                {
                    sumToLeft += input[j];
                }
                //sumfromIToItsRight
                for (long j = i + 1; j < input.Length; j++)
                {
                    sumToRight += input[j];
                }
                if (sumToRight == sumToLeft)
                { 
                    Console.WriteLine(i);
                exitBecauseNoMatch = true;
            }


        }
            if (!exitBecauseNoMatch)
            {
                Console.WriteLine("no");
            }
        }
    }
}
