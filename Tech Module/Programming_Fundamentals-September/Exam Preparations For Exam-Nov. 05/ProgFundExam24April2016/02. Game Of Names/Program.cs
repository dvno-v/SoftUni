using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Game_Of_Names
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var winner = new KeyValuePair<string,int>();
            for (int i = 0; i < n; i++)
            {

                string name = Console.ReadLine();
                var initialScore = int.Parse(Console.ReadLine());
                foreach (var ch in name)
                {
                    if (ch%2==0)
                    {
                        initialScore += ch;
                    }
                    else if (ch % 2 != 0)
                        initialScore -= ch;
                }
                var currentPlayer = new KeyValuePair<string,int>(name,initialScore);
                if (winner.Key==null)
                {
                    winner = currentPlayer;
                }
                if (winner.Value<currentPlayer.Value)
                {
                    winner = currentPlayer;
                }
            }
            Console.WriteLine($"The winner is {winner.Key} - {winner.Value} points");
        }
    }
}
