using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Lady_lings
{

    class Program
    {
        public static int[] MovingRight(int[]initial,long index , long moving)
        {
            if (index+moving>=initial.Length)
            {
                initial[index] = 0;
                return initial;
            }
            initial[index] = 0;
            for (long i = index+moving; i < initial.Length; i+=moving)
            {
                if (initial[i]==1)
                {
                    continue;
                }
                else
                {
                    initial[i] = 1;
                    break;
                }
            }
            return initial;
        }
        public static Int32[] MovingLeft(int[] initial, long index, long moving)
        {
            if (index-moving<=0)
            {
                initial[index] = 0;
                return initial;
            }
            initial[index] = 0;
            for (long i = index-moving; i >= 0; i-=moving)
            {
                if (initial[i]==1)
                {
                    continue;
                }
                else
                {
                    initial[i] = 1;
                    break;
                }
            }
            return initial;
        }
        static void Main(string[] args)
        {
            short size = short.Parse(Console.ReadLine());
            int[] field = new int[size];
            var indexes = Console.ReadLine().Split(new char[] { ' ' },StringSplitOptions.RemoveEmptyEntries)
                .Select(long.Parse).ToArray();
            for (int i = 0; i < field.Length; i++)
            {
                if (indexes.Contains(i))
                {
                    field[i] = 1;
                }
            }
            while (true)
            {
                var command = Console.ReadLine();
                if (command == "end") break;
                string[] tokens = command.Split(' ').Where(c=>c.Length>0).ToArray();
                var indexOfBug = long.Parse(tokens[0]);
                var rotation = tokens[1].ToLower();
                var rotationLenght = long.Parse(tokens[2]);
                if (indexOfBug < field.Length)
                {
                    switch (rotation)
                    {
                        case "left":
                            field = MovingLeft(field, indexOfBug, rotationLenght);
                            break;
                        case "right":
                            field = MovingRight(field, indexOfBug, rotationLenght);
                            break;
                    }
                }

            }
            Console.WriteLine(string.Join(" ",field));
        }
    }
}
