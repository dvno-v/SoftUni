using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T01.Sino_The_Walker
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputtime = Console.ReadLine();
            var timeOfDepart = DateTime.ParseExact(inputtime,"HH:mm:ss",null);
            var stepsTaken = int.Parse(Console.ReadLine())%86400;
            var secForStep = int.Parse(Console.ReadLine()) % 86400;
            timeOfDepart = timeOfDepart.AddSeconds(stepsTaken * secForStep);
            Console.WriteLine($"Time Arrival: {timeOfDepart:HH:mm:ss}");
        }
    }
}
