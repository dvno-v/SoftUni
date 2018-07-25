using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Resurection
{
    class Program
    {
        static void Main(string[] args)
        {
            int numberOfPhenixes = int.Parse(Console.ReadLine());
            for (int i = 0; i < numberOfPhenixes; i++)
            {
                var lenghtOfBody = long.Parse(Console.ReadLine());
                decimal widthOfBody = decimal.Parse(Console.ReadLine());
                var lenghtOfOneWing = long.Parse(Console.ReadLine());
                //totalYears = {totalLength} ^ 2 * ({totalWidth} + 2 * {wingLength})
                decimal yearsToReincarnate = (decimal)Math.Pow(lenghtOfBody, 2) * (widthOfBody + 2 * lenghtOfOneWing);
                Console.WriteLine(yearsToReincarnate);

            }
        }
    }
}
