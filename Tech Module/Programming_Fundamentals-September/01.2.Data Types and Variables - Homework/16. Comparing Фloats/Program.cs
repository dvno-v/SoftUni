using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16.Comparing_Фloats
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal a = decimal.Parse(Console.ReadLine());
            decimal b = decimal.Parse(Console.ReadLine());
            decimal eps = 0.000001m;
            bool IsEqual = true;
            decimal difference = Math.Abs(a - b);
            if (difference >= eps)
            {
                Console.WriteLine(!IsEqual);
            }
            else if(Math.Abs(a-b) == eps)
            {
                Console.WriteLine(!IsEqual);
            }
             else if(Math.Abs(a-b) < eps)
            {
                Console.WriteLine(IsEqual);
            }
        }
    }
}
