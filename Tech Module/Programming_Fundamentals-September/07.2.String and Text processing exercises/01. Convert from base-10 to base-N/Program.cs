using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _01.Convert_from_base_10_to_base_N
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Where(x=> x.Length>0).ToArray();
            var Base = int.Parse(input[0]);
            var number =BigInteger.Parse(input[1]);
            var numberInBase = new List<BigInteger>();
            while (number!=0)
            {
                var temp = number % Base;
                number /= Base;
                numberInBase.Insert(0,temp);
            }
            Console.WriteLine(string.Join("",numberInBase));
        }
    }
}
