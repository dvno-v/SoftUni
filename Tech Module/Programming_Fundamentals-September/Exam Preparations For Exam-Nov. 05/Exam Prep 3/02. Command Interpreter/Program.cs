using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Command_Interpreter
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputNUmbers = Console.ReadLine()
                .Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            while (true)
            {
                var input = Console.ReadLine();
                if (input == "end") break;
                var tokens = input.Split(' ');
                int start = 0;
                int count = 0;
                int countRoll = 0;
                
                switch (tokens[0].ToLower())
                {
                    case "reverse":
                        start = int.Parse(tokens[2]);
                        count = int.Parse(tokens[tokens.Length - 1]);
                        break;
                    case "sort":
                        start = int.Parse(tokens[2]);
                        count = int.Parse(tokens[tokens.Length - 1]);
                        break;
                    case "rollleft":
                        countRoll = int.Parse(tokens[1]);
                        break;
                    case "rollright":
                        countRoll = int.Parse(tokens[1]);
                        break;
                }
                if (count + start >= inputNUmbers.Count || count < 0 || start < 0)
                {
                    Console.WriteLine("Invalid input parameters.");
                    continue;
                }
                switch (tokens[0].ToLower())
                {
                    case "reverse":
                        inputNUmbers = reverse(inputNUmbers, start, count);
                        break;
                    case "sort":
                        inputNUmbers = sort(inputNUmbers, start, count);
                        break;
                    case "rollleft":
                        ShiftingLeft(countRoll, inputNUmbers);
                        break;
                    case "rollright":
                        ShiftingRight(countRoll, inputNUmbers);
                        break;
                }
            }
            Console.WriteLine('[' + string.Join(", ",inputNUmbers)+']');
        }
        public static void ShiftingLeft(int positions, List<string> numbers)
        {
            for (int i = 1; i <= positions; i++)
            {
                string currentNumber = numbers[0];
                numbers.RemoveAt(0);
                numbers.Add(currentNumber);
            }
        }
        public static void ShiftingRight(int positions, List<string> numbers)
        {
            for (int i = 1; i <= positions; i++)
            {
                string currentNumber = numbers[numbers.Count - 1];
                numbers.RemoveAt(numbers.Count - 1);
                numbers.Insert(0, currentNumber);
            }
        }
        public static List<string> reverse(List<string> arr, int start, int count)
        {
            string[] reversed = new string[count];
            for (int i = 0; i < count; i++)
            {
                reversed[i] = arr[i + start];
            }
            reversed = reversed.Reverse().ToArray();
            for (int i = 0; i < count; i++)
            {
                arr[i + start] = reversed[i];
            }
            return arr;
        }
        public static List<string> sort(List<string> arr, int start, int count)
        {
            string[] sorted = new string[count];
            for (int i = 0; i < count; i++)
            {
                sorted[i] = arr[i + start];
            }
            sorted = sorted.OrderBy(c => c).ToArray();
            for (int i = 0; i < count; i++)
            {
                arr[i + start] = sorted[i];
            }
            return arr;
        }
    }
}


