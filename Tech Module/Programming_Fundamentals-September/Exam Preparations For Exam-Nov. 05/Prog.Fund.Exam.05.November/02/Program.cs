namespace _02
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    public class Program
    {
        public static void Main()
        {
            var strings = Console.ReadLine().Split(new char[] {' ','\t'}, StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            var command = Console.ReadLine();
            while (command!="3:1")
            {
                
                var tokens = command.Split(' ');
                var commands = tokens[0];
                switch (commands)
                {
                    case "merge":
                        var startIndex = int.Parse(tokens[1]);
                        var endIndex = int.Parse(tokens[2]);
                        strings = merging(strings, startIndex, endIndex);
                        break;
                    case "divide":
                        var index = int.Parse(tokens[1]);
                        var partitions = int.Parse(tokens[2]);
                        strings = deviding(strings, index, partitions);
                        break;
                }
                command = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ", strings));

        }

        public static List<string> merging(List<string> input, int startIndex, int endIndex)
        {
            var result = new List<string>();
            if ((startIndex>=0&&startIndex<input.Count-1)&&(endIndex<input.Count-1&&endIndex>=0))
            {
                for (int i = startIndex; i <= endIndex; i++)
                {
                    result.Add(input[i]);
                }
                StringBuilder concatinated = new StringBuilder();
                concatinated.Append(string.Join("", result));
                for (int i = startIndex; i <= endIndex; i++)
                {
                    input[i] = "0";
                }
                input.Insert(startIndex, concatinated.ToString());
                input = input.Where(x => x != "0").ToList();
            }
            else if (startIndex<0 && (endIndex < input.Count - 1 && endIndex >= 0))
            {
                startIndex = 0;
                for (int i = startIndex; i <= endIndex; i++)
                {
                    result.Add(input[i]);
                }
                StringBuilder concatinated = new StringBuilder();
                concatinated.Append(string.Join("", result));
                for (int i = startIndex; i <= endIndex; i++)
                {
                    input[i] = "0";
                }
                input.Insert(startIndex, concatinated.ToString());
                input = input.Where(x => x != "0").ToList();
            }
            else if (endIndex>input.Count-1&&(startIndex >= 0 && startIndex < input.Count - 1))
            {
                endIndex = input.Count - 1;
                for (int i = startIndex; i <= endIndex; i++)
                {
                    result.Add(input[i]);
                }
                StringBuilder concatinated = new StringBuilder();
                concatinated.Append(string.Join("", result));
                for (int i =startIndex; i <=endIndex; i++)
                {
                    input[i] = "0";
                }
                input.Insert(startIndex, concatinated.ToString());
                input = input.Where(x => x != "0").ToList();
            }
            else
            {
                for (int i = 0; i < input.Count; i++)
                {
                    result.Add(input[i]);
                }
                input.Clear();
                input.Add(string.Join("", result));
            }
            return input;
        }

        public static List<string> deviding(List<string> input, int index, int partitions)
        {
            if(partitions!=0){
                var partitionLenght = 0;
                var pattitionCOunt = 0;
                StringBuilder devided = new StringBuilder();
                if (input[index].Length % partitions == 0)
                {
                    partitionLenght = input[index].Length / partitions;
                    for (int i = 0; i < input[index].Length; i++)
                    {
                        if (partitions==1)
                        {
                            devided.Append(input[index][i] + " ");
                            continue;
                        }
                        if (i % partitionLenght == 0 && i != 0)
                        {
                            devided.Append(' ');
                        }
                        devided.Append(input[index][i]);
                    }
                }
                else
                {
                    partitionLenght = input[index].Length / partitions;
                    for (int i = 0; i < input[index].Length; i++)
                    {
                        if (partitions == 1)
                        {
                            devided.Append(input[index][i] + " ");
                            continue;
                        }
                        pattitionCOunt++;
                        if ((pattitionCOunt == input[index].Length - 1))
                        {
                            devided.Append(input[index][i]);
                            continue;
                        }
                        if (i % partitionLenght == 0 && i != 0)
                        {
                            devided.Append(' ');
                        }
                        devided.Append(input[index][i]);
                    }
                }
                input[index] = devided.ToString();
            }
            return input;
        }
    }
}
