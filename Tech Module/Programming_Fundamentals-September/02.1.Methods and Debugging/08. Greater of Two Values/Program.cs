using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Greater_of_Two_Values
{
    class Program
    {
        static int GetMax(int a , int b)
        {
            if (a>b)
            {
                return a;
            }
            else
            {
                return b;
            }
        }

        static void GetMax(string firstString, string secondString)
        {
            int a = string.Compare(firstString, secondString);
            if (firstString.CompareTo(secondString) >=0)
            {
                Console.WriteLine(firstString);
            }
            else
            {
                Console.WriteLine(secondString);
            }
        }

        static char GetMax(char a, char b)
        {
            if (a >b )

            {
                return a;

            }

            else
            {
                return b;
            }
        }
        static void Main(string[] args)
        {
            string type = Console.ReadLine();
            if (type == "int")
            {
                int a = int.Parse(Console.ReadLine());
                int b = int.Parse(Console.ReadLine());
                int max = GetMax(a, b);
                Console.WriteLine(max);
            }
            if (type == "char")
            {
                char a = char.Parse(Console.ReadLine());
                char b = char.Parse(Console.ReadLine());
               char max = GetMax(a,b);
                Console.WriteLine(max);

            }
            if (type == "string")
            {
                string a = Console.ReadLine();
                String b = Console.ReadLine();
                GetMax(a, b);
            }
        }
    }
}
