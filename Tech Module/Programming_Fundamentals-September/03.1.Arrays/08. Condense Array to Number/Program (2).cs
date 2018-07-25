using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Condense_Array_to_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var StringsToArray = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var ArrayOfIntegers = StringsToArray;
            var condencedArray = new int[ArrayOfIntegers.Length - 1];
            if (ArrayOfIntegers.Length == 1)
            {
                Console.WriteLine($"{ArrayOfIntegers[0]} is already condensed to number");
            }
            else
            {
                for (int i = 0; i < ArrayOfIntegers.Length -1; i++)
                {
                    var modifiedlength = ArrayOfIntegers[ArrayOfIntegers.Length - 1];
                    for (int j = 0; j < modifiedlength-1; j++)
                    if(i == ArrayOfIntegers.Length - 1)
                    {
                        condencedArray[i] = ArrayOfIntegers[0];
                    }
                    else
                    {
                        condencedArray[i] = ArrayOfIntegers[i] + ArrayOfIntegers[i + 1];
                    }
                }
                Console.WriteLine(condencedArray.Sum());
            }
        }
    }
}
