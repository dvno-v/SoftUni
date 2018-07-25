using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace _02.Icarus
{
    class Program
    {
        static void Main(string[] args)
        {
            var plane = Console.ReadLine().Split(new char[] {' ', '\t'}, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse).ToArray();
            var initialStratingPosition = int.Parse(Console.ReadLine());
            var input = Console.ReadLine();
            var icarusDmg = 1;
            while (input!="Supernova")
            {
                var tokens = input.Split(new char[] {' ', '\t'}, StringSplitOptions.RemoveEmptyEntries).ToArray();
                var direction = tokens[0];
                var steps = int.Parse(tokens[1]);
                switch (direction)
                {
                    case "left":
                        if (initialStratingPosition - steps>=0)
                        {
                            for (int i = 0; i <steps; i++)
                            {
                                plane[initialStratingPosition - 1] -= icarusDmg;
                                initialStratingPosition--;
                            }
                            break;
                        }
                        while (steps>0)
                        {
                            initialStratingPosition--;
                            if (initialStratingPosition<0)
                            {
                                initialStratingPosition = plane.Length - 1;
                                icarusDmg++;
                            }
                            plane[initialStratingPosition] -= icarusDmg;
                            steps--;
                        }
                        break;
                    case "right":
                        if (initialStratingPosition + steps <= plane.Length-1)
                        {
                            for (int i = 0; i < steps; i++)
                            {
                                plane[initialStratingPosition + 1] -= icarusDmg;
                                initialStratingPosition++;
                            }
                            break;
                        }
                        while (steps > 0)
                        {
                            initialStratingPosition++;
                            if (initialStratingPosition > plane.Length-1)
                            {
                                initialStratingPosition = 0;
                                icarusDmg++;
                            }
                            plane[initialStratingPosition] -= icarusDmg;
                            steps--;
                        }
                        break;
                }
                input = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ",plane));
        }
    }
}
