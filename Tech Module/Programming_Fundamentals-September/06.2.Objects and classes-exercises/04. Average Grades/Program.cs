namespace _04.Average_Grades
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            List<Student> students = new List<Student>();
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(' ');
                double[] grades = new double[input.Length - 1];
                for (int j = 1; j < input.Length; j++)
                {
                    grades[j - 1] = double.Parse(input[j]);
                }
                students.Add(new Student { Name = input[0], Grades = grades });
            }
            foreach (var item in students.OrderBy(x=>x.Name)
                .ThenByDescending(x=>x.AverageGrades())
                .Where(student => student.AverageGrades()>=5))
            {
                Console.WriteLine($"{item.Name} -> {item.AverageGrades():f2}");
            }
        }
    }
    public class Student
    {
        public string Name { get; set; }
        public double[] Grades { get; set; }
        public double AverageGrades()
        {
            return Grades.Average();
        }
    }
}

