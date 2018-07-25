using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Search_for_a_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(x => int.Parse(x)).ToList();
            var commands = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(x => int.Parse(x)).ToList();
            var isFound = false;
            for (int i = commands[0]; i < input.Count; i++)
            {
                input.Remove(input[commands[0]]);
            }
            for (int i = 0; i < commands[1]; i++)
            {
                input.Remove(input[0]);
            }
            for (int i = 0; i < input.Count; i++)
            {
                if (input[i] == commands[2])
                {
                    isFound = true;
                }
            }
            if (isFound)
            {
                Console.WriteLine("YES!");   
            }
            else
            {
                Console.WriteLine("NO!");
            }
        }
    }
}
