using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Water_Overflow
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            short litres=0;
            int sumOfLitres = 0;
            for (int i = 0; i <n ; i++)
            {
                litres = short.Parse(Console.ReadLine());
                sumOfLitres += litres;
                if (sumOfLitres > 255)
                {
                    Console.WriteLine("Insufficient capacity!");
                    sumOfLitres -= litres;
                }
            }
            Console.WriteLine(sumOfLitres);
        }
    }
}
