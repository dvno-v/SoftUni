using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Sorting_numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(double.Parse).ToList();
            List<double> numbers = new List<double>(input);
            numbers.Sort();
            Console.WriteLine(String.Join(" <= ",numbers));

        }
    }
}
