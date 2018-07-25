
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Convert_Speed_Units
{
    class Program
    {
        static void Main(string[] args)
        {
            Int32 distance = Int32.Parse(Console.ReadLine());
            byte hours = byte.Parse(Console.ReadLine());
            byte minutes = byte.Parse(Console.ReadLine());
            byte seconds = byte.Parse(Console.ReadLine());
            float timeInSecs = (float)((hours * 60 * 60) + (minutes * 60) + seconds);
            float metersPerSec = (float)((distance) / timeInSecs);
            float kilometresPerHour = (float)((distance / 1000) / (timeInSecs / 3600));
            float miles = (float)(distance / 1609F);
            float milesPerHour = (float)(miles / (timeInSecs / 3600));
            Console.WriteLine(metersPerSec);
            Console.WriteLine(kilometresPerHour);
            Console.WriteLine(milesPerHour);

        }
    }
}
