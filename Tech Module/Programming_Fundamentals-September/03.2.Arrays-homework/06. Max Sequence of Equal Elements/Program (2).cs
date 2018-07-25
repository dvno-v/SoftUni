using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ');
            Console.WriteLine(String.Join(" ", input));
            int[] counter =new int[10];
            for (int i = 0; i < input.Length; i++)
            {
                switch (input[i])
                {
                    case "0":
                        counter[0]++;
                        break;
                    case "1":
                        counter[1]++;
                        break;
                    case "2":
                        counter[2]++;
                        break;
                    case "3":
                        counter[3]++;
                        break;
                    case "4":
                        counter[4]++;
                        break;
                    case "5":
                        counter[5]++;
                        break;
                    case "6":
                        counter[6]++;
                        break;
                    case "7":
                        counter[7]++;
                        break;
                    case "8":
                        counter[8]++;
                        break;
                    case "9":
                        counter[9]++;
                        break;
                }
                int number = counter.Max();
                switch (@enum)
                {
                        
                }

            }
        }
    }
}
