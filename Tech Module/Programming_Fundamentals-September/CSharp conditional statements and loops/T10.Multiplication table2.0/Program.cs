using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace T10.Multiplication_table2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int n1 = n;
            int otkydedavyrticikyla = int.Parse(Console.ReadLine());
            int multiplication = otkydedavyrticikyla;
            int result = 0;
            if (otkydedavyrticikyla <=10)
            {
                for (int i = otkydedavyrticikyla; i <= 10; i++)
                {
                    result = n * multiplication;
                    n = n1;
                    Console.WriteLine($"{n} X {multiplication} = {result}");
                    multiplication++;
                }
            }
            else if (otkydedavyrticikyla>10)
            {
                Console.WriteLine($"{n} X {multiplication} = {n * multiplication}");
            }
        }
    }
}
