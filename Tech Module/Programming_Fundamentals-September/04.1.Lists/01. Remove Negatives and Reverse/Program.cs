using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Remove_Negatives_and_Reverse
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputLine = Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(x => int.Parse(x)).ToList();
            inputLine.RemoveAll(x => x < 0);
            if (inputLine.Count==0)
            {
                Console.WriteLine("empty");
            }
            else
            {
                for (int i = inputLine.Count-1; i >= 0; i--)
                {
                    Console.WriteLine(inputLine[i]);
                }
            }

        }
    }
}
