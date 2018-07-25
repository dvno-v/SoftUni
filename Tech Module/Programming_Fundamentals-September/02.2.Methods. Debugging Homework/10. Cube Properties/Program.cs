using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Cube_Properties
{
    class Program
    {
        static void CubeProperties(string propertyOfCube, double a)
        {
            switch (propertyOfCube)
            {
                case "face":
                    double faceDiagonal = Math.Sqrt(2) * a;
                    Console.WriteLine($"{faceDiagonal:f2}");
                    break;
                case "area":
                    double surfaceArea = Math.Pow(a, 2) * 6;
                    Console.WriteLine($"{surfaceArea:f2}");
                    break;
                case "space":
                    double space = Math.Sqrt(3) * a;
                    Console.WriteLine($"{space:f2}");
                    break;
                case "volume":
                    double volume = Math.Pow(a, 3);
                    Console.WriteLine($"{volume:f2}");
                    break;

            }

        }
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());
            string propertyOfCube = Console.ReadLine();
            CubeProperties(propertyOfCube,a);
        }
    }
}
