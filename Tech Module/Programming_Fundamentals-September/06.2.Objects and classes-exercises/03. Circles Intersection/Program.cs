using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Circles_Intersection
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var firstCircleInput = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            var secondCircleInput = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            var firstCircle = new CircleProperties()
            {
                X = firstCircleInput[0],
                y = firstCircleInput[1],
                radius = firstCircleInput[2],
            };

            var secondCircle = new CircleProperties()
            {
                X = secondCircleInput[0],
                y = secondCircleInput[1],
                radius = secondCircleInput[2]
            };

            bool intercect = intersect(firstCircle, secondCircle);

            if (intercect)
                Console.WriteLine("Yes");
            else
                Console.WriteLine("No");
        }
        static bool intersect(CircleProperties circle1, CircleProperties circle2)
        {
            double distance = Math.Abs(circle1.X - circle2.X) + Math.Abs(circle1.y - circle2.y);
            if (distance <= circle1.radius + circle2.radius)
                return true;
            else
                return false;
        }
        public class CircleProperties
        {
            public double X { get; set; }
            public double y { get; set; }
            public double radius { get; set; }
        }
    }
}
