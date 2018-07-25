using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Sum_Arrays
{
    class Program
    {
        static int[] MaxLengthOfArray(int[] array1, int[] array2)
        {
            if (array1.Length >= array2.Length)
                return array1;
            else
                return array2;
        }

        static int[] SmallerLengthOfArray(int[] array1, int[] array2)
        {
            if (array1.Length < array2.Length)
                return array1;
            else
                return array2;
        }

        static void Main(string[] args)
        {
            var firstArrayStrings = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var firstArray = firstArrayStrings;

            var secondArrayStrings = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var secondArray = secondArrayStrings;

            var biggerArray = MaxLengthOfArray(firstArray, secondArray);
            var smallerArray = SmallerLengthOfArray(firstArray, secondArray);
            var couterForSmallerArray = 0;
            var sum = new int[biggerArray.Length];

            for (int i = 0; i < biggerArray.Length; i++)
            {
                sum[i] = biggerArray[i] + smallerArray[couterForSmallerArray];
                couterForSmallerArray++;
                if (couterForSmallerArray == smallerArray.Length)
                {
                    couterForSmallerArray = 0;
                }
                
            }
            Console.WriteLine(String.Join(" ",sum));
        }

    }
}
