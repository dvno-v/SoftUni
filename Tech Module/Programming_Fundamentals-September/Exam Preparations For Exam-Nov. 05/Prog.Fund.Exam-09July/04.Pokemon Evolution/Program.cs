using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Pokemon_Evolution
{
    class pokemon
    {
        public string evolutionType { get; set; }
        public Int32 evolutionIndex { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var pattern = new Regex(@"(\w*)\s*->\s*(\w+)\s*->\s*(\d*)");
            var pokemons = new Dictionary<string, List<pokemon>>();
            var input = Console.ReadLine();
            while (input!= "wubbalubbadubdub")
            {
                var matches = pattern.Matches(input);
                foreach (Match match in matches)
                {
                    var pokemon = match.Groups[1].Value;
                    var evoType = match.Groups[2].Value;
                    var evoIndex = int.Parse(match.Groups[3].Value);
                    var poke = new pokemon
                    {
                        evolutionType = evoType,
                        evolutionIndex = evoIndex
                    };
                    if (!pokemons.ContainsKey(pokemon))
                    {
                        pokemons[pokemon] = new List<pokemon>();
                    }
                    pokemons[pokemon].Add(poke);
                }
                input = Console.ReadLine();
                if (pokemons.ContainsKey(input))
                {
                    Console.WriteLine($"# {input}");
                    foreach (var item in pokemons[input])
                    {
                        Console.WriteLine($"{item.evolutionType} <-> {item.evolutionIndex}");
                    }
                }
            }
            foreach (var pokemon in pokemons)
            {
                  Console.WriteLine($"# {pokemon.Key}");
                foreach (var item in pokemon.Value.OrderByDescending(x=>x.evolutionIndex))
                {
                     Console.WriteLine($"{item.evolutionType} <-> {item.evolutionIndex}");
               
                }
            }

        }
    }
}
