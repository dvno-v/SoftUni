using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Temperature_Conversion
{
    class Program
    {
        static double FarenheitToCelsius(double degrees)
        {

            degrees= (degrees - 32) * 5 / 9;
            return degrees;
        }
        static void Main(string[] args)
        {
            double fahrenheit = Double.Parse(Console.ReadLine());
            double celsius = FarenheitToCelsius(fahrenheit);
            Console.WriteLine($"{celsius:f2}");
        }
    }
}
