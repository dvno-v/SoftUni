using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Special_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            short n = short.Parse(Console.ReadLine());
            int currentnumber = 0;
            for (int i = 0; i < n; i++)
            {
                currentnumber++;
                if ((currentnumber%10 + currentnumber/10) == 5 || (currentnumber % 10 + currentnumber / 10) == 7 || (currentnumber % 10 + currentnumber / 10) == 11)
                {
                    Console.WriteLine(currentnumber + " -> True");
                }
                else
                {
                    Console.WriteLine(currentnumber + " -> False");
                }
            }
        }
    }
}
