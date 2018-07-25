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
            const long portionSize = 6l;
            decimal ivanchoCash = decimal.Parse(Console.ReadLine());//ivancho cash
            var guests = long.Parse(Console.ReadLine());
            decimal priceBanana = decimal.Parse(Console.ReadLine());//price for 2 bannanas
            decimal priceEggs = decimal.Parse(Console.ReadLine()); //price for 4 eggs
            decimal priceBerries = decimal.Parse(Console.ReadLine());//price for 0.2 kilo berries
            var portions = 0l;
            if (guests == 0) portions = 0;
            else if (portionSize >= guests)
            {
                portions = 1l;
            }
            else
            {
                while (portions * portionSize < guests)
                {
                    portions++;
                }
            }
            decimal overAllMoney = portions * (2m * priceBanana + 4m * priceEggs + 0.20m * priceBerries);
            if (ivanchoCash >= overAllMoney)
            {
                Console.WriteLine($"Ivancho has enough money - it would cost {overAllMoney:f2}lv.");
            }
            else
            {
                Console.WriteLine($"Ivancho will have to withdraw money - he will need {Math.Abs(overAllMoney - ivanchoCash):f2}lv more.");
            }
        }
    }
}

