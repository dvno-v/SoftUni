namespace _08.Mentor_Group
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine();
            var studentList = new List<student>();
            while (input!="end of dates")
            {
                var tokens = input.Split(new char[] { ' ', ',' },StringSplitOptions.RemoveEmptyEntries).ToList();
                var datestAttended = new List<DateTime>();
                for (int i = 1; i < tokens.Count; i++)
                {
                    datestAttended.Add(DateTime.ParseExact(tokens[i], "dd/MM/yyyy", CultureInfo.InvariantCulture));
                }
                var student = new student() { name = tokens[0], attendedDates = datestAttended ,comments= new List<string>() };
                studentList.Add(student);
                input = Console.ReadLine();
            }
            while (true)
            {
                input = Console.ReadLine();
                if (input=="end of comments")
                {
                    break;
                }
                var studentData = input.Split(new char[] {'-'}, StringSplitOptions.RemoveEmptyEntries).ToList();
                var name = studentData[0]; var comment = studentData[1];
                if (studentList.Any(x=>x.name==name))
                {
                    var existingStudent = studentList.First(x => x.name == name);
                    existingStudent.comments.Add(comment);
                } 
            }
            foreach (var student in studentList.OrderBy(x=>x.name))
            {
                Console.WriteLine(student.name);
                if (student.comments != null)
                {
                    Console.WriteLine($"Comments:");
                    foreach (var comments in student.comments)
                    {
                        Console.WriteLine($"- {comments}");
                    }
                }
                else Console.WriteLine("Comments: ");
                Console.WriteLine("Dates attended: ");
                foreach (var dates in student.attendedDates.OrderBy(x=>x))
                {
                    Console.WriteLine($"-- {dates:dd/MM/yyyy}");
                }
            }
        }
    }
    public class student
    {
        public string name { get; set; }
        public List<DateTime> attendedDates { get; set; }
        public List<string> comments { get; set; }
    }
}
