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
            decimal halfOf = pokePower *0.5m;
            var Distance = long.Parse(Console.ReadLine());
            var excoustionFactor = long.Parse(Console.ReadLine());
            var targetsReached = 0;
            while (pokePower>=Distance)
            {
                pokePower -= Distance;
                targetsReached++;
                if (pokePower==halfOf&&excoustionFactor>0)
                {
                    pokePower /= excoustionFactor;
                }
            }
            Console.WriteLine(pokePower);
            Console.WriteLine(targetsReached);
        }
    }
}
