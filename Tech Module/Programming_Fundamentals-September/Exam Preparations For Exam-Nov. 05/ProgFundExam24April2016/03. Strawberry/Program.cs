using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Strawberry
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            //top
            var innerDashes = n;
            var outerDashes = 0;
            
            for (int i = 0; i < n/2; i++)
            {
                var upperPart = new string('-', outerDashes) + '\\' + new string('-', innerDashes) + '|' 
                                + new string('-', innerDashes) +
                                 '/' + new string('-', outerDashes);
                Console.WriteLine(upperPart);
                innerDashes -= 2;
                outerDashes += 2;
            }

            //static
            Console.WriteLine(new string('-',n) + '#' + '.' + '#' + new string('-', n));
            //midTop
            innerDashes = n;
            var innerDot = 1;
            for (int i = 0; i < n/2; i++)
            {
                innerDot += 4;
                innerDashes -= 2;
                Console.WriteLine(new string('-', innerDashes) + '#' 
                                   + new string('.',innerDot) +
                                  '#' + new string('-', innerDashes));
            }
            //static
            Console.WriteLine('#' + new string('.',2*n+1) + '#');
            //midBot
            outerDashes = 1;
            innerDot = 2 * n -1;
            for (int i = n - 1; i >= 1; i--)
            {
                Console.WriteLine(new string('-',outerDashes) + '#'+new string('.',innerDot)+'#' +new string('-', outerDashes));
                innerDot -= 2;
                outerDashes++;
            }
            //bot Static
            Console.WriteLine(new string('-', n) + '#' + '.' + '#' + new string('-', n));


        }
    }
}
