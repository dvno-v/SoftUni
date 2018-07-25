using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace __Sieve_of_Eratosthenes
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var primed = new Boolean[n+1];
            for (int i = 1; i <=n; i++)
            {
                primed[i] = true;
            }
            primed[0] = false; primed[1] = false;
            for (int i = 0; i < primed.Length; i++)
            {
                if (primed[i] == true)
                {
                    for (int j = 2; j * i <=n; j++)
                    {
                        primed[j * i] = false;
                    }
                }
            }
            for (int i = 2; i <= n; i++)
            {
                if (primed[i]==true)
                {
                    Console.Write(i + " ");
                }
            }

            Console.WriteLine();
        }
       
    }
}