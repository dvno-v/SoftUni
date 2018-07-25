namespace _08.Logs_Aggregator
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main(string[] args)
        {
            int n = Int32.Parse(Console.ReadLine());
            var IPNameAndDurations = new Dictionary<string, Dictionary<string,int>>();
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries).ToList();
                var name = input[1];
                var ip = input[0];
                var duration = int.Parse(input[2]);
                if (!IPNameAndDurations.ContainsKey(name))
                {
                    IPNameAndDurations.Add(name,new Dictionary<string,int>());
                }
                if (IPNameAndDurations.ContainsKey(name)&&!IPNameAndDurations[name].ContainsKey(ip))
                {
                    IPNameAndDurations[name][ip] = 0;
                }
                if (IPNameAndDurations.ContainsKey(name) && IPNameAndDurations[name].ContainsKey(ip))
                {
                    IPNameAndDurations[name][ip] += duration;
                }

            }
            var alphabeticallOrdered = IPNameAndDurations.OrderBy(c => c.Key);
            foreach (var item in alphabeticallOrdered)
            {
                Console.WriteLine($"{item.Key}: {item.Value.Values.Sum()} [{string.Join(", ",item.Value.Keys.OrderBy(c=> c))}]");
            }

        }
    }
}
