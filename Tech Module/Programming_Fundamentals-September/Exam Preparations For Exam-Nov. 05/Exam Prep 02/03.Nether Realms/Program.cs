using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
namespace _03.Nether_Realms
{
    class Program
    {
        static void Main(string[] args)
        {
            var digitpattern = new Regex(@"[\+\-]*[0-9.]+[0-9]*");
            var participants = Console.ReadLine()
                .Split(new char[] {' ',',','\t' },StringSplitOptions.RemoveEmptyEntries)
                .OrderBy(c=>c)
                .ToArray();
            var Matchdigits = new List<Match>();
            var digits = new List<double>();
            var damage = 0.0;
            var health = 0.0;
            foreach (var participant in participants)
            {
                var matchesdigit = digitpattern.Matches(participant);
                damage = Damage(matchesdigit,participant);
                health = Health(participant);
                Console.WriteLine($"{participant} - {health} health, {damage:f2} damage");
            }
            
        }
        public static double Damage(MatchCollection matchesdigit, string letterOnlyName)
        {
            double damage = 0;
            foreach (var item in matchesdigit)
            {
                damage += double.Parse(item.ToString());
            }
            foreach (var item in letterOnlyName.Where(c=> c=='*'||c=='/'))
            {
                if (item=='*')
                    damage *= 2;
                if (item=='/')
                    damage /= 2;
            }
            return damage;
        }
        public static double Health(string demon)
        {
            string demonHealthPattern = @"[^\d\.\+\-\*\/\s\,]";
            Regex regex = new Regex(demonHealthPattern);
            MatchCollection collection = regex.Matches(demon);
            double health = 0;
            foreach (Match str in collection)
            {
                foreach (char c in str.ToString())
                {
                    health += c;
                }
            }

            return health;
        }
    }
}
