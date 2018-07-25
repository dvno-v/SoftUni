using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Multiply_Evens_by_Odds
{
    class Program
    {
        static int EvenAndOddNumbersSbor(int nubmer)
        {
            int absoluteNumber = Math.Abs(nubmer);
            int oddnubmerSbor = 0;
            int evenNumberSbor=0;
            int resultOfMutiplicationOfEvenAndOddNumbersSbor = 0;
            int numberAtTheEndOfTheAbsoluteNumber = 0;
            while (absoluteNumber!=0)
            {
                numberAtTheEndOfTheAbsoluteNumber = absoluteNumber % 10;
                absoluteNumber /= 10;
                if (numberAtTheEndOfTheAbsoluteNumber %2 ==0)
                {
                    evenNumberSbor += numberAtTheEndOfTheAbsoluteNumber;
                }
                else
                {
                    oddnubmerSbor += numberAtTheEndOfTheAbsoluteNumber;
                }
            }
            resultOfMutiplicationOfEvenAndOddNumbersSbor = oddnubmerSbor * evenNumberSbor;
            return resultOfMutiplicationOfEvenAndOddNumbersSbor;
        }
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = EvenAndOddNumbersSbor(a);
            Console.WriteLine(b);

        }
    }
}
