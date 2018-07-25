using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04
{
    class data
    {
        public string dataKey { get; set; }
        public int dataSize { get; set; }
        public string dataSet { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var pattern = new Regex(@"^([\w+\W+]+) -> (\d*) \| ([\w+\W+]+)$");
            var dataList = new Dictionary<string,Dictionary<string,int>>();
            var cache = new List<data>();
            string command = "";
            while ((command=Console.ReadLine())!= "thetinggoesskrra")
            {
                var match = pattern.Match(command);
                if (match.Success)
                {
                    data data1 = new data()
                        {
                        dataKey = match.Groups[1].Value,
                        dataSize = int.Parse(match.Groups[2].Value),
                        dataSet = match.Groups[3].Value
                    };
                    cache.Add(data1);
                }
                else
                {
                    var dataSetName = command;
                    dataList[dataSetName] = new Dictionary<string, int>();
                }
            }
            foreach (var bokluk in cache)
            {
                if (dataList.ContainsKey(bokluk.dataSet))
                {
                    dataList[bokluk.dataSet].Add(bokluk.dataKey,bokluk.dataSize);
                }
            }
            var counter = 0;
            foreach (var data in dataList.OrderByDescending(x=>x.Value.Values.Sum()))
            {
                foreach (var x in data.Value.OrderBy(x=>x.Key))
                {
                    if (counter==0)
                    {
                        Console.WriteLine($"Data Set: {data.Key}, Total Size: {data.Value.Values.Sum()}");
                        counter++;
                    }
                    Console.WriteLine($"$.{x.Key}");
                }
                break;
            }
        }
    }
}
