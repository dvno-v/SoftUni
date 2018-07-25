using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Endurance_Rally
{
    public class Program
    {
        static void Main(string[] args)
        {
            var drivers = Console.ReadLine().Split(' ');
            var zones = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            var chekpoints = Console.ReadLine().Split(' ').Select(long.Parse).ToList();
            bool hasReached = true;
            foreach (var driver in drivers)
            {
                double driverFuel = driver[0];
                hasReached = true; 
                for (int i = 0; i < zones.Length; i++)
                {
                    if (chekpoints.Contains(i))
                        driverFuel += zones[i];
                    else
                        driverFuel -= zones[i];
                    if (driverFuel<=0)
                    {
                        Console.WriteLine($"{driver} - reached {i}");
                        hasReached = false;
                        break;
                    }
                }
                if (hasReached)
                {
                    Console.WriteLine($"{driver} - fuel left {driverFuel:f2}");
                }
            }
           
        }
    }
}