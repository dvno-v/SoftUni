using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Rotate_and_Sum
{
    class Program
    {
        
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var numbersArr = new int[input.Length];
            numbersArr = (int[])input.Clone();
            var sumArr = new int[input.Length];
            var cloneOfnumberArr = new int[input.Length];
            int k = Int32.Parse(Console.ReadLine());
            //rotation
            for (int i = 0; i < k; i++)
            {
                var lastDigitofArray = numbersArr[numbersArr.Length-1];
                for (int j = numbersArr.Length - 1; j > 0; j--)
                {
                    numbersArr[j] = numbersArr[j - 1];
                }
                numbersArr[0] = lastDigitofArray;
               
                for (int j = 0; j < numbersArr.Length; j++)
                {
                    sumArr[j] += numbersArr[j];
                }
            }
            Console.WriteLine(String.Join(" ",sumArr));
        }
    }
}
