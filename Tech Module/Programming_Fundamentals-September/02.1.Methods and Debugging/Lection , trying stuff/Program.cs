using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lection___trying_stuff
{
    class Program
    {

        static void checkingTheSignOfANumber(int n)
        {
            if (n > 0)
            {
                Console.WriteLine("positive");
            }
            else if (n==0)
            {
                Console.WriteLine("zero");
            }
            else
            {
                Console.WriteLine("negative");
            }
        }
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
        checkingTheSignOfANumber(n);
        }
        
    }
}
