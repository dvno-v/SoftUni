using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Poke_Mon
{
    class Program
    {
        static void Main(string[] args)
        {
            var pokePower = long.Parse(Console.ReadLine());
            var distanceBetweenPokes = long.Parse(Console.ReadLine());
            var exhaustionFactor = int.Parse(Console.ReadLine());
            var targets = 0;
            var halfPokePower = pokePower * 0.5m;
            while (pokePower>=distanceBetweenPokes)
            {
                targets++;
                pokePower -= distanceBetweenPokes;
                if (pokePower==halfPokePower&&exhaustionFactor!=0)
                {
                    pokePower /= exhaustionFactor;
                }
            }
            Console.WriteLine(pokePower);
            Console.WriteLine(targets);
        }
    }
}
