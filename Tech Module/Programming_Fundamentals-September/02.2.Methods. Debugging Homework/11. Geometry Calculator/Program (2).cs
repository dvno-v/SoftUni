using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace _11.Geometry_Calculator
{
    class Program
    {
        private static double area = 0;
        static void areaOfTriangle(double side, double height)
        {
            area = side * height / 2;
            Console.WriteLine($"{area:f2}");
        }

        static void areaOfCircle(double radius)
        {
            area = Math.Pow(radius, 2) * Math.PI;
            Console.WriteLine($"{area:f2}");
        }

        static void areaOFRectangle(double width, double height)
        {
            area = width * height;
            Console.WriteLine($"{area:f2}");
        }

        static void areaOfSquare(double side)
        {
            area = side * side;
            Console.WriteLine($"{area:f2}");
        }
        static void Main(string[] args)
        {
            string typeOfFigure = Console.ReadLine();
            switch (typeOfFigure)
            {
                case "triangle":
                    areaOfTriangle(double.Parse(Console.ReadLine()),double.Parse(Console.ReadLine()));
                    break;
                case "circle":
                    areaOfCircle(double.Parse(Console.ReadLine()));
                    break;
                case "rectangle":
                    areaOFRectangle(double.Parse(Console.ReadLine()),double.Parse(Console.ReadLine()));
                    break;
                case "square":
                    areaOfSquare(double.Parse(Console.ReadLine()));
                    break;
            }
            
        }
    }
}
