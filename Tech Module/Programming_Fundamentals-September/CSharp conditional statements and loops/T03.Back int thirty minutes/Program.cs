using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T03.Back_int_thirty_minutes
{
    class Program
    {
        static void Main(string[] args)
        {
            double hours = double.Parse(Console.ReadLine());
            double minutes = double.Parse(Console.ReadLine());
            double afterMinutes = minutes + 30;
            if (afterMinutes >59)
            {
                hours++;
                afterMinutes -= 60;
            }
            if (hours > 23)
            {
                hours -= 24;
            }
            Console.WriteLine($"{hours}:{afterMinutes:00}");
        }
    }
}
