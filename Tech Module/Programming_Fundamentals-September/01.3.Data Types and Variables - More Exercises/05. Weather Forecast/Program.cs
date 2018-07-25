using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Weather_Forecast
{
    class Program
    {
        static void Main(string[] args)
        {
            string nubmer = Console.ReadLine();
            try
            {
                long nubmer1 = long.Parse(nubmer);
                if (nubmer1 >= sbyte.MinValue && nubmer1 <= sbyte.MaxValue)
                {
                    Console.WriteLine("Sunny");
                }
                else if (nubmer1 >= int.MinValue && nubmer1 <= int.MaxValue )
                {
                    Console.WriteLine("Cloudy");
                }
                else if (nubmer1 >= long.MinValue && nubmer1 <= long.MaxValue)
                {
                    Console.WriteLine("Windy");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Rainy");
            }
        }
    }
}
