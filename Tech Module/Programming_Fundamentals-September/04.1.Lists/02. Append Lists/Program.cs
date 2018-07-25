using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Append_Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> result= new List<int>(); 
            string[] lists = Console.ReadLine().Split('|');
            for (int i = lists.Length - 1; i >= 0; i--)
            {
                var elements = lists[i].Split(new char[]{' '}, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                result.AddRange(elements);
            }
            Console.WriteLine(String.Join(" ",result));
        }
    }
}
