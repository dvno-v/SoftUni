using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Variable_in_Hex_Format
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = Console.ReadLine();
            int a1 = Convert.ToInt32(a, 16);
            Console.WriteLine(a1);
        }
    }
}
