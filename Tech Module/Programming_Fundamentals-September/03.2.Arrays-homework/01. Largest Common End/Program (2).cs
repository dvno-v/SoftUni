using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Largest_Common_End
{
    class Program
    {
        static string[] biggerArray(string[] array1, string[] array2)
        {
            if (array1.Length>=array2.Length)
                return array1;
            else
                return array2;
        }
        static string[] smallerrArray(string[] array1, string[] array2)
        {
            if (array1.Length < array2.Length)
                return array1;
            else
                return array2;
        }
        static void Main(string[] args)
        {
            var firstArrayInput = Console.ReadLine().Split(' ').ToArray();
            var secondArrayInput = Console.ReadLine().Split(' ').ToArray();
            var biggerArr = biggerArray(firstArrayInput, secondArrayInput);
            var smallerArr = smallerrArray(firstArrayInput, secondArrayInput);
            var counterLeftToRight = 0;
            var counterRightToLeft = 0;
            bool exitForCicle = false;
            for (int j = 0; j < smallerArr.Length; j++)
                {
                    if (biggerArr[j] == smallerArr[j])
                    {
                        counterLeftToRight++;
                    }
                    else
                    {
                        exitForCicle = true;
                        break;
                    }
                }

            var reversedSmallArr= smallerArr.Reverse().ToArray();
            var reversedBiggerArr= biggerArr.Reverse().ToArray();
            
                for (int j = 0; j < reversedSmallArr.Length; j++)
                {
                    if (reversedSmallArr[j]==reversedBiggerArr[j])
                    {
                        counterRightToLeft++;
                    }
                    else
                    {
                        exitForCicle = true;
                        break;
                    }
                }
                
            switch (counterRightToLeft>counterLeftToRight)
            {
                case true:
                    Console.WriteLine(counterRightToLeft);
                    break;
                case false:
                    Console.WriteLine(counterLeftToRight);
                    break;
            }
        }
    }
}
