using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T08.Sum_of_Odd_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 1;
            int allsum = 0;
            for (int i = 1; i <= n; i++)
            {
                allsum += sum;
                Console.WriteLine(sum);
                sum += 2;
                
            }
            Console.WriteLine($"Sum: {allsum}");
        }
    }
}
