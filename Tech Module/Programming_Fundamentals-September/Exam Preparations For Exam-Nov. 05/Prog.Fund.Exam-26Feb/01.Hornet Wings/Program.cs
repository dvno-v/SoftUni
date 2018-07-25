using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Hornet_Wings
{
    class Program
    {
        static void Main(string[] args)
        {
            int wingFlaps = int.Parse(Console.ReadLine());
            double distancePerWingFlaps = double.Parse(Console.ReadLine());//distance for 1000 wingflaps
            int enduranceForWingFlaps = int.Parse(Console.ReadLine());//how many flaps before a 5 sec break
            double overAllDistance = (wingFlaps / 1000) * distancePerWingFlaps;

            int overAllTime = (wingFlaps / 100) + ((wingFlaps / enduranceForWingFlaps) * 5);
            Console.WriteLine($"{overAllDistance:f2} m.");
            Console.WriteLine($"{overAllTime} s.");


        }
    }
}
