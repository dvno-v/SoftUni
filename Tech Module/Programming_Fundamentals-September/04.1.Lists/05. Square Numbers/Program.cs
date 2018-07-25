using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Square_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse).ToList();
            List<int> numbers = new List<int>(input);
            List<int> sqrNumbers = new List<int>();
            for (int i = 0; i < numbers.Count; i++)
            {
                if (Math.Sqrt(numbers[i]) % 1 == 0)
                {
                    sqrNumbers.Add(numbers[i]);
                }
            }
            sqrNumbers.Sort((a, b) => b.CompareTo(a));
            Console.WriteLine(String.Join(" ",sqrNumbers));
        }
    }
}
