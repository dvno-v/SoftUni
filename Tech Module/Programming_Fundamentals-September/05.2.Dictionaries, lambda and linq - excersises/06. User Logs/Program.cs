namespace _06.User_Logs
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[]{' '})
                .ToList();
            var entriesIpName = new Dictionary<string,Dictionary<string ,int>>();
            while (input[0] != "end")
            {
                var ip = input[0].Replace("IP=",null);
                var user = input[input.Count - 1].Replace("user=",null);
                if (!entriesIpName.ContainsKey(user))
                {
                    entriesIpName.Add(user, new Dictionary<string, int>());
                }
                if (entriesIpName.ContainsKey(user) && !entriesIpName[user].ContainsKey(ip))
                {
                    entriesIpName[user][ip] = 0;
                }
                if (entriesIpName.ContainsKey(user) && entriesIpName[user].ContainsKey(ip))
                {
                    entriesIpName[user][ip]++;
                }
                input = Console.ReadLine().Split(' ')
                    .ToList();
            }
            var orderedDict = entriesIpName.OrderBy(c => c.Key);
            foreach (var item in orderedDict)
            {
                Console.Write($"{item.Key}: ");
                foreach (var i in item.Value)
                {
                    Console.Write($"{i.Key} => {i.Value}, ");
                }
                Console.Write(".");
            }

        }
    }
}
