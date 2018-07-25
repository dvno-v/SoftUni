namespace _08.Letters_Change_Numbers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine()
                .Split(new char[] { ' ','\t' }, StringSplitOptions.RemoveEmptyEntries)
                .ToArray();
            var listOfNumbersLetters = new List<string>();
            foreach (var numberLetter in input)
            {
                listOfNumbersLetters.Add(numberLetter);
            }
            double sum = 0.0;
            foreach (var numberLetter in listOfNumbersLetters)
            {
                var firstLetter = numberLetter[0];
                var number = new StringBuilder();
                for (int i = 1; i < numberLetter.Length-1; i++)
                {
                    number.Append(numberLetter[i]);
                }
                char secondLetter = numberLetter[numberLetter.Length-1];
                double numbers = double.Parse(number.ToString());
                switch (char.IsUpper(firstLetter))
                {
                    case true:
                        numbers /= (firstLetter - 64);
                        break;
                    case false:
                        numbers *= (firstLetter - 96);
                        break;
                }
                switch (char.IsUpper(secondLetter))
                {
                    case true:
                        numbers -= (secondLetter - 64);
                        break;
                    case false:
                        numbers += (secondLetter - 96);
                        break;
                }
                sum += numbers;
            }
            Console.WriteLine($"{sum:f2}");
        }
    }
}