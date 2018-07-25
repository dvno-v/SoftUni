using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Catch_the_Thief
{
    class Program
    {
        static void Main(string[] args)
        {
            string variabmeType = Console.ReadLine();
            int n = int.Parse(Console.ReadLine());
            long nubmer = 0;
            long biggernubmer = 0;
            long thethief = 0;
            for (int i = 0; i < n; i++)
            {
                nubmer = long.Parse(Console.ReadLine());
                if (nubmer >= biggernubmer)
                {
                    biggernubmer = nubmer;
                }
                if (variabmeType == "sbyte")
                {
                    if (biggernubmer <= sbyte.MaxValue)
                    {
                        thethief = biggernubmer;
                    }  
                }
                else if (variabmeType == "int")
                {
                    if (biggernubmer <= int.MaxValue)
                    {
                        thethief = biggernubmer;
                    }
                }
                else if (variabmeType == "long" && biggernubmer <= long.MaxValue)
                {
                    thethief = biggernubmer;
                }
            }
            Console.WriteLine(thethief);
        }
    }
}
