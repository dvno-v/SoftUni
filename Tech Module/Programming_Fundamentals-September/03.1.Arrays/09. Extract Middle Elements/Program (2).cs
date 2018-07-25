using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Extract_Middle_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                        .Split(' ').Select(int.Parse).ToArray();
            var array = input;
            if (array.Length == 1)
            {
                Console.WriteLine("{ "+ input[0] + " }");
                
            }
            else
            switch (array.Length % 2)
            {
                case 0:
                    var firstVariableOfArray = array[array.Length / 2 - 1];
                    var secondVariableToPrint = array[array.Length / 2].ToString();
                    Console.WriteLine("{ "+ firstVariableOfArray +", "+ secondVariableToPrint +" }");
                    break;
                default:
                    var oddFirst = array[array.Length / 2 - 1];
                    var oddSecond = array[array.Length / 2];
                    var third = array[array.Length / 2 + 1];
                    Console.WriteLine("{ " + oddFirst + ", " + oddSecond + ", " +third + " }");
                    break;

            }
        }
    }
}
