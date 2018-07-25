namespace _01.Count_Working_Days
{
    using System.Linq;
    using System.Globalization;
    using System;

    public class Program
    {
        public static void Main()
        {
            var FirstDateInput = Console.ReadLine();
            var secondDateInput = Console.ReadLine();

            var firstDate = DateTime.ParseExact(FirstDateInput, "dd-MM-yyyy", CultureInfo.InvariantCulture);
            var secondDate = DateTime.ParseExact(secondDateInput, "dd-MM-yyyy", CultureInfo.InvariantCulture);
            DateTime[] holidays = new DateTime[]
            {
                new DateTime(4,01,01),
                new DateTime(4,03,03),
                new DateTime(4,05,01),
                new DateTime(4,05,06),
                new DateTime(4,05,24),
                new DateTime(4,09,06),
                new DateTime(4,09,22),
                new DateTime(4,11,01),
                new DateTime(4,12,24),
                new DateTime(4,12,25),
                new DateTime(4,12,26),
            };

            int workDays = 0;

            for (DateTime i = firstDate; i <= secondDate; i=i.AddDays(1))
            {
                DateTime tempDate = new DateTime(4, i.Month, i.Day);
                if (!holidays.Contains(tempDate) && i.DayOfWeek!=DayOfWeek.Saturday && i.DayOfWeek!=DayOfWeek.Sunday)
                {
                    workDays++;
                }
            }
            Console.WriteLine(workDays);
        }
    }
}