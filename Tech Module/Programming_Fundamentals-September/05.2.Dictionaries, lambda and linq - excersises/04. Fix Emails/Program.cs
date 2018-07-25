namespace _04.Fix_Emails
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            string name = Console.ReadLine();
            var nameAndEmail = new Dictionary<string, string>();

            while (name != "stop")
            {
                string email = Console.ReadLine();
                if (!email.EndsWith("us") && !email.EndsWith("uk"))
                {
                    nameAndEmail[name] = email;
                }
                name = Console.ReadLine();

            }
            foreach (var emailsOfPersons in nameAndEmail)
            {
                Console.WriteLine($"{emailsOfPersons.Key} -> {emailsOfPersons.Value}");
            }
        }
    }
}
