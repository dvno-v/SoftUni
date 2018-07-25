using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Change_List
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(x => int.Parse(x))
                .ToList();
            List<string> command = Console.ReadLine().ToLower()
                .Split(new char[] {' '},StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            
            bool doWhile = true;
            while (doWhile)
            {
                switch (command[0])
                {
                    case "delete":
                       int deleting = int.Parse(command[1]);
                        input.RemoveAll(x => x == deleting);
                        break;
                    case "insert":
                        int element = int.Parse(command[1]);
                        int position = int.Parse(command[2]);
                        input.Insert(position,element);
                        break;
                    case "odd":
                        doWhile = false;
                        for (int i = 0; i < input.Count; i++)
                        {
                            if (input[i] %2 != 0)
                            {
                                Console.Write(input[i] + " ");
                            }
                        }
                        break;
                    case "even":
                        doWhile = false;
                        for (int i = 0; i < input.Count; i++)
                        {
                            if (input[i] % 2 == 0)
                            {
                                Console.Write(input[i] + " ");
                            }
                        }
                        break;


                }
                if (!doWhile)
                {
                    Console.WriteLine();
                    break;
                }
                else
                    command = Console.ReadLine().ToLower()
                    .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
            }
        }
    }
}
