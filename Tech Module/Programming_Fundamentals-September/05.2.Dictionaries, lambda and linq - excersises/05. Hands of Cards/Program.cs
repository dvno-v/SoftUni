namespace _05.Hands_of_Cards
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] {' ', ',', ':'},StringSplitOptions.RemoveEmptyEntries).ToList();
            var data = new Dictionary<string, string>();
            var PlayersScores = new Dictionary<string, Int32>();

            while (input[0] != "JOKER")
            {
                var name = input[0];
                for (int i = 1; i < input.Count; i++)
                {
                    if (!data.ContainsKey(name))
                    {
                        data[name] = input[i]+" ";
                    }
                    if (!data[name].Contains(input[i]))
                    {
                        data[name] += input[i] + " ";
                   }
                }
                
                input = Console.ReadLine().Split(new char[] { ' ', ',', ':' }).ToList();

            }
                int playaScore = 0;
                var listOfCards = new List<string>();
                foreach (var cards in data)
                {
                    listOfCards = cards.Value.Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries).ToList();
                    foreach (var listOfCard in listOfCards)
                    {
                        playaScore += SumOfCards(listOfCard);
                    }
                    if (!PlayersScores.ContainsKey(cards.Key))
                        PlayersScores[cards.Key] = playaScore;
                    playaScore = 0;
                }
            foreach (var playersScore in PlayersScores)
            {
                Console.WriteLine($"{playersScore.Key}: {playersScore.Value}");
            }
        }

        static int SumOfCards(string cards)
        {
            int scoreofCurrentPlayer = 0;
            string power = cards[0].ToString();
            if (power == "1")
            {
                power = "10";
            }
            string type = cards[cards.Length - 1].ToString();
            var powerAsNumber = 0;
            var typeAsNumber = 0;
            bool maika = int.TryParse(power, out powerAsNumber);
            if (!maika)
            {
                switch (power)
                {
                    case "J":
                        powerAsNumber = 11;
                        break;
                    case "Q":
                        powerAsNumber = 12;
                        break;
                    case "K":
                        powerAsNumber = 13;
                        break;
                    case "A":
                        powerAsNumber = 14;
                        break;
                }
            }
            switch (type)
            {
                case "S":
                    typeAsNumber = 4;
                    break;
                case "H":
                    typeAsNumber = 3;
                    break;
                case "D":
                    typeAsNumber = 2;
                    break;
                case "C":
                    typeAsNumber = 1;
                    break;
            }
            scoreofCurrentPlayer = powerAsNumber * typeAsNumber;
            return scoreofCurrentPlayer;
        }
    }
}
