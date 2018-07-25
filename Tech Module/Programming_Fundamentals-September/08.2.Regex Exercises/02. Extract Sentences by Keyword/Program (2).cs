using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _02.Extract_Sentences_by_Keyword
{
    class Program
    {
        static void Main(string[] args)
        {
            var keyword = Console.ReadLine();
            var input = Console.ReadLine();
            var pattern = new Regex(@"\b(^|[^\.\!\?])*\b"+ keyword + @"\b[^|\.!?]*");
            foreach (Match match in pattern.Matches(input))
            {
                Console.WriteLine(match);
            }
        }
    }
}
