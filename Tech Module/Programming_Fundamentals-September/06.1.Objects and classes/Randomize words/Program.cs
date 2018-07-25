using System.Reflection.Emit;

namespace Randomize_words
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            var words = Console.ReadLine()
                .Split(' ');

            var random = new Random();
            for (int i = 0; i < words.Length; i++)
            {
                var currentWord = words[i];
                var randomIndex = random.Next(0, words.Length);
                var tempword = words[randomIndex];
                words[i] = tempword;
                words[randomIndex] = currentWord;
            }
            foreach (var word in words)
            {
                Console.WriteLine(word);
            }
        }
    }
}
