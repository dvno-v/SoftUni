using System.Security.Cryptography.X509Certificates;

namespace _07.Population_Counter
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main(string[] args)
        {
            var input = Console.ReadLine().Split('|').ToList();
            var CountryTownsPopulations = new Dictionary<string,Dictionary<string,decimal>>();
            while (input[0] != "report")
            {
                var CountryName = input[1];
                var TownName = input[0];
                var population = ulong.Parse(input[2]);
                if (!CountryTownsPopulations.ContainsKey(CountryName))
                {
                    CountryTownsPopulations.Add(CountryName, new Dictionary<string, decimal>());
                    CountryTownsPopulations[CountryName].Add(TownName, population);
                }
                else if (CountryTownsPopulations.ContainsKey(CountryName)&& !CountryTownsPopulations[CountryName].ContainsKey(TownName))
                {
                    CountryTownsPopulations[CountryName][TownName] = population;
                }
                else if (CountryTownsPopulations.ContainsKey(CountryName) && CountryTownsPopulations[CountryName].ContainsKey(TownName))
                {
                    CountryTownsPopulations[CountryName][TownName] += population;
                }
                input = Console.ReadLine().Split('|').ToList();
            }
            var orderedCountries = CountryTownsPopulations.OrderByDescending(c => c.Value.Values.Sum());
            foreach (var country in orderedCountries)
            {
                var orderedCities = country.Value.OrderByDescending(c => c.Value);
                Console.WriteLine(country.Key + $" (total population: {country.Value.Values.Sum()})");
                foreach (var TownXPopulation in orderedCities)
                {
                   Console.WriteLine($"=>{TownXPopulation.Key}: {TownXPopulation.Value}");
                }
            }
        }
        
    }
}