using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Hornet_Assault
{
    class Program
    {
        static void Main(string[] args)
        {
            var bees = Console.ReadLine().Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(long.Parse).ToList();
            var hornets = Console.ReadLine().Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(long.Parse).ToList();
            var BeesCount = bees.Count;
            for (int i = 0; i < BeesCount; i++)
            {
                if (hornets.Count==0)
                {
                    break;
                }
                long hornetPower = hornets.Sum();
                if (hornetPower>bees[i])
                {
                    bees[i] = 0;
                }
                else
                {
                    hornets.RemoveAt(0);
                    bees[i] -= hornetPower;
                }
            }
            var clear = bees.Where(c => c != 0).ToList();
            if (clear.Count==0)
            {
                Console.WriteLine(string.Join(" ",hornets));
            }
            else
            Console.WriteLine(string.Join(" ",clear));
        }
    }
}
