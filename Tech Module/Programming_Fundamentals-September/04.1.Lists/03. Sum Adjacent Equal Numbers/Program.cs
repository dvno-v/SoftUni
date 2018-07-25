using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace _03.Sum_Adjacent_Equal_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbersArr = new List<int> {1, 2, 3, 4};
            int k = int.Parse(Console.ReadLine());
            for (int i = 0; i < k; i++)
            {
                var lastDigitofArray = numbersArr[numbersArr.Count - 1];
                for (int j = numbersArr.Count - 1; j > 0; j--)
                {
                    numbersArr[j] = numbersArr[j - 1];
                }
                numbersArr[0] = lastDigitofArray;
            }
            Console.WriteLine(String.Join(" ",numbersArr));
        }
    }
}
