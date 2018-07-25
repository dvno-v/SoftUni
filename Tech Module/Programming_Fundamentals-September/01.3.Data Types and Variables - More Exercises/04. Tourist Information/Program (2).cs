using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Tourist_Information
{
    class Program
    {
        static void Main(string[] args)
        {
            string unit = Console.ReadLine().ToLower();
            double value = double.Parse(Console.ReadLine());
            double transferedValue = 0;
            string metricUnit = null;
            switch (unit)
            {
                case "miles":
                    transferedValue = value* 1.6;
                    metricUnit = "kilometers";
                    Console.WriteLine($"{value} {unit} = {transferedValue:f2} {metricUnit}");
                    break;
                case "inches":
                    transferedValue = value * 2.54;
                    metricUnit = "centimeters";
                    Console.WriteLine($"{value} {unit} = {transferedValue:f2} {metricUnit}");
                    break;
                case "feet":
                    transferedValue = value * 30;
                    metricUnit = "centimeters";
                    Console.WriteLine($"{value} {unit} = {transferedValue:f2} {metricUnit}");
                    break;
                case "yards":
                    transferedValue = value * 0.91;
                    metricUnit = "meters";
                    Console.WriteLine($"{value} {unit} = {transferedValue:f2} {metricUnit}");
                    break;
                case "gallons":
                    transferedValue = value * 3.8;
                    metricUnit = "liters";
                    Console.WriteLine($"{value} {unit} = {transferedValue:f2} {metricUnit}");
                    break;
                    default:
                        break;




            }
        }
    }
}
