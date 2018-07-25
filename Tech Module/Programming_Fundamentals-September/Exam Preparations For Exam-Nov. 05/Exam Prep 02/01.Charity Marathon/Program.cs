using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Charity_Marathon
{
    class Program
    {
        static void Main(string[] args)
        {
            var marathonDays = Int32.Parse(Console.ReadLine());
            var runners = long.Parse(Console.ReadLine());
            var laps = short.Parse(Console.ReadLine());
            var lapLenght = long.Parse(Console.ReadLine());
            var trackCapacity = int.Parse(Console.ReadLine());
            var moneyPerKm = decimal.Parse(Console.ReadLine());

            long overAllCapacity = marathonDays * trackCapacity;
            if (overAllCapacity < runners)
            {
                runners = overAllCapacity;
            }
            decimal totalKM = (runners * laps * lapLenght)/1000;
            decimal moneyRaised = totalKM * moneyPerKm;
            Console.WriteLine($"Money raised: {moneyRaised:f2}");
        }
    }
}
