using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Армадата_на_стършелите
{
    class legion
    {
        public int activity { get; set; }
        public Dictionary<string, int> soldiers { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var legions = new Dictionary<string, legion>();
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine();
                var match = Regex.Match(input, @"^(\d+) = (\w.*) -> (\w+):(\d+)$");
                if (match.Success)
                {
                    var legionName = match.Groups[2].Value;
                    var legion = new legion()
                    {
                        activity = int.Parse(match.Groups[1].Value),
                        soldiers = new Dictionary<string, int>(),
                    };
                    var soldierCount = int.Parse(match.Groups[4].Value);
                    var soldierType = match.Groups[3].Value;
                    legion.soldiers.Add(soldierType, soldierCount);
                    if (!legions.ContainsKey(legionName))
                    {
                        legions[legionName] = legion;
                    }
                    else
                    {

                       if( legions[legionName].activity < legion.activity)
                        {
                            legions[legionName].activity = legion.activity;
                        }
                        if (!legions[legionName].soldiers.ContainsKey(soldierType))
                        {
                            legions[legionName].soldiers[soldierType] = soldierCount;
                        }
                        else
                        {
                            legions[legionName].soldiers[soldierType] += soldierCount;
                        }
                    }
                }
            }
            var command = Console.ReadLine();
            Regex pattern = new Regex(@"^(\d+)\\(\w+)$");
            if (pattern.Match(command).Success)
            {
                var activity = int.Parse(pattern.Match(command).Groups[1].Value);
                var soldierType = pattern.Match(command).Groups[2].Value;
                foreach (var legion in legions)
                {

                }
                Console.WriteLine();
            }
            else
            {
                var soldierType = command;
                foreach (var item in legions.OrderByDescending(c=>c.Value.activity))
                {
                    foreach (var soldiersType in item.Value.soldiers)
                    {
                        if (soldiersType.Key==soldierType)
                        {
                            Console.WriteLine($"{item.Value.activity} : {item.Key}");
                        }
                    }
                }
            }
        }
    }
}
