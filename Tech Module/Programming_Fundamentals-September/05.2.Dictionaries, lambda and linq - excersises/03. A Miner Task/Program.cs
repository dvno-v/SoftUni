namespace _03.A_Miner_Task
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            string resourse = Console.ReadLine();
            var quantityOFResourse = new Dictionary<string, int>();
            while (resourse!="stop")
            {
                int quantity = Int32.Parse(Console.ReadLine());
                if (!quantityOFResourse.ContainsKey(resourse))
                    quantityOFResourse[resourse] = 0;
                quantityOFResourse[resourse]+= quantity;
                resourse = Console.ReadLine();
            }
            foreach (var resourseQuantity in quantityOFResourse)
            {
                Console.WriteLine($"{resourseQuantity.Key} -> {resourseQuantity.Value}");
            }
        }
    }
}
