using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace watching_and_trying
{
    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine().Split(' ').Select(s => double.Parse(s))
                .ToList();
            var numbersCount = new SortedDictionary<double, int>();
            foreach (var item in input)
            {
                if (!numbersCount.ContainsKey(item))
                {
                    numbersCount[item] = 0;
                }
                numbersCount[item]++;
            }
            foreach (var item in numbersCount)
            {
                Console.WriteLine(item.Key + " -> " + item.Value);
            }
        }
    }
}
