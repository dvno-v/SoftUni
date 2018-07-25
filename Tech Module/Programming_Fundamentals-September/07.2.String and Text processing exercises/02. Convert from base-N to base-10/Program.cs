using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
namespace _02.Convert_from_base_N_to_base_10
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                .Split(' ')
                .Where(x => x.Length > 0)
                .ToArray();
            var Base = double.Parse(input[0]);
            BigInteger number = BigInteger.Parse(input[1]);
            var power = 0;
            BigInteger sum = 0;
            if (Base == 10)
            {
                Console.WriteLine(number);
            }
            else { 
                while (number != 0)
                {
                    var temp = number % 10;
                    number /= 10;
                    sum += temp * (BigInteger)Math.Pow(Base, power);
                    power++;
                }
            Console.WriteLine(sum);
            }
        }
    }
}
