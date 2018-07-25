using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T09.Multiplication_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int n1 = n;
            int result = 0;
            for (int i = 1; i <= 10; i++)
            {
                result = n * i;
                n = n1;
                Console.WriteLine($"{n} X {i} = {result}");
            }
            ;

        }
    }
}
