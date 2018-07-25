using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Reverse_Array_of_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var IntegerArr = new int[n];
            for (int i = 0; i < n; i++)
            {
                IntegerArr[i] = int.Parse(Console.ReadLine());
            }
            Console.WriteLine(String.Join(" ",IntegerArr.Reverse()));

        }

    }
}
