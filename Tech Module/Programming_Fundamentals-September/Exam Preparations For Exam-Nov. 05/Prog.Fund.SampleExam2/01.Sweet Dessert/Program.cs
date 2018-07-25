using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sweet_Dessert
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal ivanchosCash = decimal.Parse(Console.ReadLine());
            int guests = int.Parse(Console.ReadLine());
            decimal priceOfBanana = Decimal.Parse(Console.ReadLine());//single unit
            decimal priceOfEggs = decimal.Parse(Console.ReadLine());//singe unit
            decimal priceOfBerries = decimal.Parse(Console.ReadLine());//killo
            decimal overallPrice = 0.0m;
            //portions
            var portions = 1;

            if (guests==0)
            {
                portions = 0;

            }
            var portionsSize = 6;
            if (portionsSize>guests)
            {
                overallPrice = portions * (2 * priceOfBanana) + portions * (4 * priceOfEggs) + portions * (0.2m * priceOfBerries);
            }
            else
            {
                while (portions*portionsSize<guests)
                {
                    portions++;
                }
                overallPrice =portions*( 2 * priceOfBanana) +portions*( 4 * priceOfEggs) + portions*( 0.2m * priceOfBerries);
            }
            if (overallPrice > ivanchosCash)
            {
                Console.WriteLine($"Ivancho will have to withdraw money - he will need {Math.Abs(ivanchosCash-overallPrice):f2}lv more.");
            }
            else
            {
                Console.WriteLine($"Ivancho has enough money - it would cost {overallPrice:f2}lv.");
            }
        }
    }
}
