using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Pokemon_dont_go
{
    class Program
    {
        static void Main(string[] args)
        {
            var distancesBetweenPokes = Console.ReadLine()
                .Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();
            var sumRemovedNum = 0;
            while (distancesBetweenPokes.Count!=0)
            {
                var input = int.Parse(Console.ReadLine());
                var removedElement = 0;
                if (input<0)
                {
                    removedElement = distancesBetweenPokes[0];
                    sumRemovedNum += removedElement;
                    distancesBetweenPokes.RemoveAt(0);
                    distancesBetweenPokes.Insert(0, distancesBetweenPokes[distancesBetweenPokes.Count - 1]);
                    IncreasingDecresingElements(distancesBetweenPokes, removedElement);
                    continue;
                }
                if (input>distancesBetweenPokes.Count-1)
                {
                    removedElement = distancesBetweenPokes[distancesBetweenPokes.Count - 1];
                    sumRemovedNum += removedElement;
                    distancesBetweenPokes.RemoveAt(distancesBetweenPokes.Count - 1);
                    distancesBetweenPokes.Add(distancesBetweenPokes[0]);
                    IncreasingDecresingElements(distancesBetweenPokes, removedElement);
                    continue;
                }
                removedElement = distancesBetweenPokes[input];
                sumRemovedNum += removedElement;
                distancesBetweenPokes.RemoveAt(input);
                IncreasingDecresingElements(distancesBetweenPokes, removedElement);
            }
            Console.WriteLine(sumRemovedNum);
        }
        public static void IncreasingDecresingElements(List<int> inputArr, int removed)
        {
            for (int i = 0; i < inputArr.Count; i++)
            {
                if (inputArr[i] <= removed)
                {
                    inputArr[i] += removed
;
                }
                else
                {
                    inputArr[i] -= removed;
                }
            }
        }
    }
}
