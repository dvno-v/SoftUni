using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace _08.Center_Point
{
    class Program
    {
        static void CenterOfACoordinate(int x1, int x2, int y1, int y2)
        {
            int Xcentre = (x2 + x1) / 2;
            int YCentre = (y2 + y1) / 2;
            Console.WriteLine($"({Xcentre}, {YCentre})");
        }
        static void Main(string[] args)
        {
            int x1 = int.Parse(Console.ReadLine());
            int x2 = int.Parse(Console.ReadLine());
            int y1 = int.Parse(Console.ReadLine());
            int y2 = int.Parse(Console.ReadLine());
            CenterOfACoordinate(x1,x2,y1,y2);
        }
    }
}
