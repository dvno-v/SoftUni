using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Phoenix_Grid
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var pattern = new Regex(@"^[^\s_]{3}((?=$)|(\.[^\s_]{3})*$)");
            while (input!="ReadMe")
            {
                var match = pattern.Match(input);
                if (match.Success)
                {
                    if (IsPalindrom(match.Value.ToString()))
                    {
                        Console.WriteLine("YES");
                    }
                    else
                    {
                        Console.WriteLine("NO");
                    }
                }
                else Console.WriteLine("NO");
                input = Console.ReadLine();
            }
        }
        public static bool IsPalindrom(string myString)
        {
            string first = myString.Substring(0, myString.Length / 2);
            char[] arr = myString.ToCharArray();
            Array.Reverse(arr);
            string temp = new string(arr);
            string second = temp.Substring(0, temp.Length / 2);
            return first.Equals(second);
        }
    }
}
