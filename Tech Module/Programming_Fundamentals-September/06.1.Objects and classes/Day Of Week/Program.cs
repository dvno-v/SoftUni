using System.Globalization;

namespace Day_Of_Week
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main(string[] args)
        {
            string dateAsText = Console.ReadLine();
            var date = DateTime.ParseExact(dateAsText, "d-M-yyyy"
                , CultureInfo.InvariantCulture);
            Console.WriteLine(date.DayOfWeek);
        }
    }
}
