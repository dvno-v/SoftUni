using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
namespace _02.Hornet_Comm
{
    class comm
    {
        public string asd { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var secretMessegePattern = new Regex(@"^(\d+) \<\-\> ([A-Za-z0-9]+)$");
            var broadcastPattern = new Regex(@"^([^\d]+)\s*<->\s*([A-Za-z0-9]+)$");
            var input = Console.ReadLine();
            var commMesseges = new Dictionary<string, List<string>>();
            while (input!="Hornet is Green")
            {
                var secretMessege = secretMessegePattern.Match(input);
                if (secretMessege.Success)
                {
                    if (!commMesseges.ContainsKey("Messages"))
                    {
                        commMesseges["Messages"] = new List<string>();
                    }
                    var code = secretMessege.Groups[1].Value.Reverse().ToArray();
                    var revesedCode = new String(code);
                    var Messege = secretMessege.Groups[2].Value.ToString();
                    commMesseges["Messages"].Add($"{revesedCode} -> {Messege.ToString()}");
                }
                var broadcast = broadcastPattern.Match(input);
                if (broadcast.Success)
                {
                    if (!commMesseges.ContainsKey("Broadcasts"))
                    {
                        commMesseges["Broadcasts"] =new List<string>();
                    }
                    var Messege = broadcast.Groups[1].Value;
                    var frequency = broadcast.Groups[2].Value.ToCharArray();
                    for (int i = 0; i < frequency.Length; i++)
                    {
                        if (char.IsLower(frequency[i]))
                        {
                            frequency[i] = char.ToUpper(frequency[i]);
                        }
                        else
                        {
                            frequency[i] = char.ToLower(frequency[i]);
                        }
                    }
                    string neshtosi = new string(frequency);
                    commMesseges["Broadcasts"].Add($"{neshtosi} -> {Messege}");
                }
                input = Console.ReadLine();
            }
            foreach (var item in commMesseges.OrderBy(c=>c.Key))
            {
                Console.WriteLine($"{item.Key}:");
                foreach (var messege in item.Value)
                {
                    Console.WriteLine(messege);
                }
            }
        }
    }
}
