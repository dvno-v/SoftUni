using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Sum_Reversed_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                //.Select(s=>int.Parse(s)) 
                .ToList();
            int sum = 0;
            for (int i = 0; i < input.Count; i++)
            {
                string output = new string(input[i].ToCharArray().Reverse().ToArray());
                sum += int.Parse(output);
            }
            Console.WriteLine(sum);
        }
    }
}
