using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
namespace _01.Demo
{
    public class Program
    {
        public static void Main()
        {
            var text = "text 123 text 456";
          
            var regex = new Regex(@"\d+");
            var matcher = regex.Matches(text);


            foreach (Match match in matcher)
            {
                Console.WriteLine(match.Groups.Count);
            }
        }
    }
}
