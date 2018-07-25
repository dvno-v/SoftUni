using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Demo
{
    public class Program
    {
        public static void Main()
        {
            var text = Console.ReadLine().ToLower();
            var pattern = Console.ReadLine().ToLower();
            var counter = 0;
            var index = -1;
            while (true)
            {
                index = text.IndexOf(pattern,index+1);
                if (index==-1)
                {
                    break;
                }
                counter++;
            }
            Console.WriteLine(counter);
        }
    }
}
