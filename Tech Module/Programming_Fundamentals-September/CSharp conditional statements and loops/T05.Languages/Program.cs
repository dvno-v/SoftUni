using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T05.Languages
{
    class Program
    {
        static void Main(string[] args)
        {
            string country = Console.ReadLine().ToLower();
            switch(country)
            {
                case "usa":
                case "england":
                    Console.WriteLine("English");
                    break;
                case "spain":
                case "argentina":
                case "mexico":
                    Console.WriteLine("Spanish");
                    break;
                default:
                    Console.WriteLine("unknown");
                    break;
            }
        }
    }
}
