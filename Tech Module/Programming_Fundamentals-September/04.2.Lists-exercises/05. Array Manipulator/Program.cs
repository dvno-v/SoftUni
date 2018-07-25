using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Array_Manipulator
{
    class Program
    {
        static void Main()
        {
            List<int> input = Console.ReadLine()
                .Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .Select(int
                    .Parse).ToList();

            string[] command = Console.ReadLine()
                .ToLower().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                .ToArray();
            while (command[0] != "print")
            {
                switch (command[0])
                {
                    case "add":
                        short index = short.Parse(command[1]);
                        int element = int.Parse(command[2]);
                        input.Insert(index, element);
                        break;
                    case "addmany":
                        int indexer = Int32.Parse(command[1]);
                        AddMany(command, input, indexer);
                        break;
                    case "contains":
                        ContainsANumber(input, Int32.Parse(command[1]));
                        break;
                    case "remove":
                        int removeIndex = Int32.Parse(command[1]);
                        input.RemoveAt(removeIndex);
                        break;
                    case "shift":
                        ShiftList(input, Int32.Parse(command[1]));
                        break;
                    case "sumpairs":
                        short lenght = (short) (input.Count / 2);
                        SummingPairs(input, lenght);
                        break;
                    case "print":
                        break;
                }
                command = Console.ReadLine().ToLower().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();
            }
            Console.WriteLine("[" + String.Join(", ", input) + "]");
        }

        static void SummingPairs(List<int> inputList, short lenght)
        {
            List<int> result = new List<int>();
            for (int i = 0; i < lenght; i++)
            {
                inputList[i] += inputList[i + 1];
                inputList.Remove(inputList[i + 1]);
            }
        }

        static void ShiftList(List<Int32> inputList, int numberOfShifts)
        {
            int number = numberOfShifts;
            var numbersCopied = inputList.Take(number).ToList();
            inputList.RemoveRange(0, number);
            inputList.AddRange(numbersCopied);
        }

        static void ContainsANumber(List<Int32> inputList, int number)
        {
            bool contains = true;
            int containsElement = number;
            for (int i = 0; i < inputList.Count; i++)
            {
                if (inputList[i] == containsElement)
                {
                    Console.WriteLine(i);
                    contains = false;
                    break;
                }

            }
            if (contains)
            {
                Console.WriteLine("-1");
            }

        }

        public static void AddMany(string[] command, List<int> numbers, int index)
        {
            var range = new List<int>();

            for (int i = 2; i < command.Length; i++)
            {
                range.Add(int.Parse(command[i]));
            }

            numbers.InsertRange(index, range);
        }
    }
}
