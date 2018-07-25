using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Integer_to_Hex_and_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            int nubmer = int.Parse(Console.ReadLine());
            string binary = Convert.ToString(nubmer, 2);
            string hexadecimal = Convert.ToString(nubmer, 16).ToUpper();
            Console.WriteLine(hexadecimal);
            Console.WriteLine(binary);

        }
    }
}
