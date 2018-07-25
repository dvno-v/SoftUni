
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Camera_View
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(s => int.Parse(s)).ToArray();
            var skip = numbers[0]+2;
            var take = numbers[1];
            var pattern = @"\|\<[A-za-z0-9]+";
            var regex = new Regex(pattern);
            var places = new List<string>();
            foreach (Match match in regex.Matches(Console.ReadLine()))
            {
                string place= new string(match.Value.Skip(skip).Take(take).ToArray());
                places.Add(place);
            }
            Console.WriteLine(string.Join(", ",places));
        }
    }
}
