using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace somekind_of_problem
{
    class Program
    {
        static void topPiramid(int start, int end)
        {
            for (int i = start; i <= end; i++)
            {
                Console.Write(i + " ");
            }
            
        }

       
        static void Main(string[] args)
        {
            for (int i = 0; i < 20; i++)
            {
                for (int j = 0; j < 20; j++)
                {
                    Console.WriteLine(i);
                    
                }
                Console.WriteLine();
            }
        }
    }
}
