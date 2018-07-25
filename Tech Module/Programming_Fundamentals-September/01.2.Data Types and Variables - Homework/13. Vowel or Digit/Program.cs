using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Vowel_or_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            string theThingToBeChecked = Console.ReadLine();
            int digit;
            bool ifDigit =  int.TryParse(theThingToBeChecked, out digit);
            if (theThingToBeChecked == "a" || theThingToBeChecked == "e" || theThingToBeChecked == "o" || theThingToBeChecked == "u" || theThingToBeChecked == "i" || theThingToBeChecked == "y")
            {
                Console.WriteLine("vowel");
            }
            else if (ifDigit)
            {
                Console.WriteLine("digit");
            }
            else
            {
                Console.WriteLine("other");
            }
        }
    }
}
