using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SoftUni_Karaoke
{
    class Program
    {
        static void Main(string[] args)
        {
            var allParticipans = Regex.Split(Console.ReadLine(), @"\s*,\s*");
            var allSongs = Regex.Split(Console.ReadLine(), @"\s*,\s*");

            var akwardsOfParticipans = new Dictionary<string, HashSet<string>>();



            foreach (var participan in allParticipans)
            {
                akwardsOfParticipans[participan] = new HashSet<string>();
            }

            while (true)
            {
                var command = Console.ReadLine();
                if (command == "dawn")
                {
                    break;
                }
                else
                {

                    var tokens = Regex.Split(command, @"\s*,\s*");

                    var participan = tokens[0];
                    var song = tokens[1];
                    var akward = tokens[2];

                    if (allParticipans.Contains(participan) && allSongs.Contains(song))
                    {
                        akwardsOfParticipans[participan].Add(akward);
                    }
                }
            }
            var sortedAkwardsOfParticipan = akwardsOfParticipans
                 .Where(a => a.Value.Count > 0)
                .OrderByDescending(a => a.Value.Count)
                .ThenBy(a => a.Key).ToArray();

            if (sortedAkwardsOfParticipan.Length == 0)
            {
                Console.WriteLine("No awards");

            }

            foreach (var sortedAkward in sortedAkwardsOfParticipan)
            {

                var akwardWiner = sortedAkward.Key;
                var akwardCount = sortedAkward.Value.Count;
                var akwards = sortedAkward.Value.OrderBy(c=>c);

                Console.WriteLine($"{akwardWiner}: {akwardCount} awards");

                foreach (var akward in akwards)
                {
                    Console.WriteLine($"--{akward}");
                }
            }
        }
    }
}