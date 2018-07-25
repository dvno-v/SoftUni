using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Numbers_in_Reversed_Order
{
    class Program
    {
        static string ReversedNumber(string number)
        {
            char[] CharArr = number.ToCharArray();
            Array.Reverse(CharArr);
            return new string(CharArr);
        }
        static void Main(string[] args)
        {
            string number = Console.ReadLine();
            string reversedNumber = ReversedNumber(number);
            Console.WriteLine(reversedNumber);

        }
    }
}
