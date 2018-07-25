using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Array_Manipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputNumbers = Console.ReadLine().Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(long.Parse).ToList();
            var command = Console.ReadLine();
            while (command!="end")
            {
                
                var tokens = command.Split(' ');
                var index = 0;
                switch (tokens[0])
                {
                    case "exchange":
                        if (int.Parse(tokens[1])>inputNumbers.Count-1)
                        {
                            Console.WriteLine("Invalid index");
                            break;
                        }
                        inputNumbers = exchange(inputNumbers, int.Parse(tokens[1]));
                        break;
                    case "max":
                        var biggestNumList = maxIndex(tokens[1], inputNumbers);
                        if (biggestNumList.Count==0)
                        {
                            Console.WriteLine("No matches");
                            break;
                        }
                        for (int i = 0; i < inputNumbers.Count; i++)
                        {
                            if (inputNumbers[i] == biggestNumList.Max())
                            {
                                index = i;
                            }
                        }
                        Console.WriteLine(index);
                        break;
                    case "min":
                        var smallestNum = minIndex(tokens[1], inputNumbers);
                        if (smallestNum.Count == 0)
                        {
                            Console.WriteLine("No matches");
                            break;
                        }
                        for (int i = 0; i < inputNumbers.Count; i++)
                        {
                            if (inputNumbers[i] == smallestNum.Min())
                            {
                                index = i;
                            }
                        }
                        Console.WriteLine(index);
                        break;
                    case "first":
                        index = int.Parse(tokens[1]);
                        var result = firstIndex(index, tokens[2], inputNumbers);
                        if (result.Count==0)
                        {
                            Console.WriteLine("[]");
                            break;
                        }
                        if (index>inputNumbers.Count)
                        {
                            Console.WriteLine("Invalid count");
                            break;
                        }
                        Console.WriteLine('['+string.Join(", ",result)+']');
                        break;
                    case "last":
                        index = int.Parse(tokens[1]);
                        var resultLast = lastIndexes(index, tokens[2], inputNumbers);
                        if (resultLast.Count==0)
                        {
                            Console.WriteLine("[]");
                            break;
                        }
                        if (index > inputNumbers.Count)
                        {
                            Console.WriteLine("Invalid count");
                            break;
                        }
                        Console.WriteLine('[' + string.Join(", ", resultLast) + ']');
                        break;
                }
                command = Console.ReadLine();
            }
            Console.WriteLine('[' + string.Join(", ", inputNumbers) + ']');
        }
        static List<long> maxIndex(string command, List<long> inputList)
        {
            if (command == "even")
            {
                var biggestEven = inputList.Where(x => x % 2 == 0).ToList();
                    return biggestEven;
            }
            else 
            {
                var biggestOdd = inputList.Where(x => x % 2 != 0).ToList();
                return biggestOdd;
            }
        }
        static List<long> minIndex(string command, List<long> inputList)
        {
            if (command == "even")
            {
                var smallestEven = inputList.Where(x => x % 2 == 0).ToList();
                    return smallestEven;
            }
            else
            {
                var smallestOdd = inputList.Where(x => x % 2 != 0).ToList();
                    return smallestOdd;
            }
        }
        static List<long> exchange (List<long> input,int index)
        {
            var listForExchange = new List<long>();
            for (int i = 0; i <= index; i++)
            {
                listForExchange.Add(input[i]);
            }
            input.RemoveRange(0, listForExchange.Count);
            input.AddRange(listForExchange);
            return input;
        }
        static List<long> firstIndex(int index,string command, List<long> inputList)
        {
            List<long> result = new List<long>();
            if (command == "even")
            {
                var Even = inputList.Where(x => x % 2 == 0).ToList();
                for (int i = 0; i < Math.Min(Even.Count, index); i++)
                {
                    result.Add(Even[i]);
                }
            }
            else if (command == "odd")
            {
                var Odd = inputList.Where(x => x % 2 != 0).ToList();
                for (int i = 0; i < Math.Min(Odd.Count, index); i++)
                {
                    result.Add(Odd[i]);
                }
            }
            return result;
        }
        static List<long> lastIndexes (int index, string command, List<long> inputList  )
        {
            List<long> result = new List<long>();
            if (command == "even")
            {
                var Even = inputList.Where(x => x % 2 == 0).ToList();
                if (index>=Even.Count)
                {
                    return Even;
                }

                for (int i = Even.Count - index; i < Even.Count; i++)
                {
                    result.Add(Even[i]);

                }
            }
            else if (command == "odd")
            {
                var Odd = inputList.Where(x => x % 2 != 0).ToList();
                if (index>=Odd.Count)
                {
                    return Odd;
                }
                for (int i = Odd.Count - index; i < Odd.Count; i++)
                {
                    result.Add(Odd[i]);
                }
            }
            return result;
        }
    }
}
