using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Elevator
{
    class Program
    {
        static void Main(string[] args)
        {
            double persons = int.Parse(Console.ReadLine());
            double capacity = int.Parse(Console.ReadLine());
            double cources = (double)(persons / capacity);
            cources = Math.Ceiling(cources);
            Console.WriteLine(cources);
        }
    }
}
