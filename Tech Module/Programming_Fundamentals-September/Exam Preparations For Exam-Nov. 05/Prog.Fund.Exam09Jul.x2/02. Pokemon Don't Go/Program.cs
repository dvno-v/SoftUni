using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Pokemon_Don_t_Go
{
    class Program
    {
        static void Main(string[] args)
        {
            var sequence = Console.ReadLine()
                .Split(new char[] {' ', '\t'}, StringSplitOptions.RemoveEmptyEntries)
                .Select(long.Parse)
                .ToList();
            var removedSum = 0l;
            while (sequence.Count != 0)
            {
                var removed = 0l;
                var command = int.Parse(Console.ReadLine());
                if (command > sequence.Count - 1)
                {
                    removed = sequence[sequence.Count - 1];
                    sequence.RemoveAt(sequence.Count - 1);
                    sequence.Add(sequence[0]);
                }
                if (command < 0)
                {
                    removed = sequence[0];
                    sequence.RemoveAt(0);
                    sequence.Insert(0, sequence[sequence.Count - 1]);
                }
                if (command>=0&&command<=sequence.Count-1)
                {
                    removed = sequence[command];
                    sequence.Remove(removed);
                }
                removedSum += removed;
                for (int i = 0; i < sequence.Count ; i++)
                {
                    if (sequence[i] <= removed)
                    {
                        sequence[i] += removed;
                    }
                    else
                    {
                        sequence[i] -= removed;
                    }
                }
            }
            Console.WriteLine(removedSum);
            
        }
    }
}
