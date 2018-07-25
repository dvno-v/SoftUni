namespace _09.Melrah_Shake
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine();
            var pattern = Console.ReadLine();
            while (true)
            {
                int indexFirst = input.IndexOf(pattern);
                int indexLast = input.LastIndexOf(pattern);
                if (indexFirst >=0 && indexLast>=  0 && pattern.Length>0)
                {
                    input = input.Remove(indexLast, pattern.Length);
                    input = input.Remove(indexFirst, pattern.Length);
                    pattern = pattern.Remove(pattern.Length / 2,1);
                    Console.WriteLine("Shaked it.");
                }
                else
                {
                    break;
                }
            }
            Console.WriteLine("No shake.");
            Console.WriteLine(input);
        }
    }
}
