using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Math_Power
{
    class Program
    {
        static double MathPowering(double n, int p)
        {
            double result = 1;
            for (int i = 1; i <= p ; i++)
            {
                result*= n;
            }
            return result;
        }
        static void Main(string[] args)
        {
            double n = double.Parse(Console.ReadLine());
            int p = int.Parse(Console.ReadLine());
            double Power = MathPowering(n, p);
            Console.WriteLine(Power);
        }
    }
}
