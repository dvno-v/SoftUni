using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T06.Ticket_Promotion
{
    class Program
    {
        static void Main(string[] args)
        {
            string day = Console.ReadLine().ToLower();
            int age = int.Parse(Console.ReadLine());
            double price = 0.0;
            if (age <0 || age >122)
            {
                Console.WriteLine("Error!");
            }
            else if ( 0 <= age && age <=18)
            {
                switch(day)
                {
                    case "weekday":
                        price = 12;
                        break;
                    case "weekend":
                        price = 15;
                        break;
                    case "holiday":
                        price = 5;
                        break;

                }
                Console.WriteLine($"{price}$");
            }
            else if (18 < age && age <= 64)
            {
                switch (day)
                {
                    case "weekday":
                        price = 18;
                        break;
                    case "weekend":
                        price = 20;
                        break;
                    case "holiday":
                        price = 12;
                        break;

                }
                Console.WriteLine($"{price}$");
            }
            else if (64 < age && age <= 122)
            {
                switch (day)
                {
                    case "weekday":
                        price = 12;
                        break;
                    case "weekend":
                        price = 15;
                        break;
                    case "holiday":
                        price = 10;
                        break;

                }
                Console.WriteLine($"{price}$");
            }
           

        }
    }
}
