namespace testing
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class ObjectsAndClasses
    {
        public static void Main()
        {
            var firstCat = new Cats();
            var secondCat = new Cats();
            var thirdCat = new Cats();
            firstCat.Name = "ivan";
            var name = firstCat.Name;
            firstCat.colour = "asd";
            secondCat.colour = "rijava";
            thirdCat.Age = 3;
            thirdCat.colour = "white";
            thirdCat.isAsleep = true;
            Console.WriteLine(firstCat.Name);
            Console.WriteLine(secondCat.colour);
            Console.WriteLine(thirdCat.isAsleep);
        }
    }
}
