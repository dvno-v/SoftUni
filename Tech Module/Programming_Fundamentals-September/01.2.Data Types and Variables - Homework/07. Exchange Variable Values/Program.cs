using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Exchange_Variable_Values
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 5;
            int b = 10;
            Console.WriteLine("Before:" + System.Environment.NewLine + "a = " + a + System.Environment.NewLine + "b = " + b);
            int c = b;
            b = a;
            a = c;
            Console.WriteLine("After:" + System.Environment.NewLine + "a = " + c + System.Environment.NewLine + "b = " + b);

        }
    }
}
