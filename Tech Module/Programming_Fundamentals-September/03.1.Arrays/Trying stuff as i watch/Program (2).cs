using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trying_stuff_as_i_watch
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] daysOfWeek =
                { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};

            int numberOfDay = int.Parse(Console.ReadLine());
            if (numberOfDay > 0 && numberOfDay < 8)
            {
                Console.WriteLine(daysOfWeek[numberOfDay - 1]);
            }
            else
            {
                Console.WriteLine("Invalid Day!");
            }
        }

    }
}
