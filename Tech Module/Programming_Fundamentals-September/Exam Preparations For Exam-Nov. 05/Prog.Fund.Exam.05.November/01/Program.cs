using System.Numerics;

namespace _01
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    public class Program
    {
        public static void Main()
        {
            int numbetOfSites = int.Parse(Console.ReadLine());
            int securityKey = int.Parse(Console.ReadLine());
            BigInteger securityToken = securityKey;
            for (int i = 1; i <numbetOfSites; i++)
            {
                securityToken *= securityKey;
            }
            decimal totalMoneyLoss = 0.0m;
            var siteList = new List<string>();
            for (int i = 0; i < numbetOfSites; i++)
            {
                var input = Console.ReadLine().Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();
                string siteName = input[0];
                long siteVisits = long.Parse(input[1]);
                decimal siteCommercialPricePerVisit = decimal.Parse(input[2]);
                decimal siteLoss = siteVisits * siteCommercialPricePerVisit;
                totalMoneyLoss += siteLoss;
                siteList.Add(siteName);
            }
            foreach (var site in siteList)
            {
                Console.WriteLine(site);
            }
            Console.WriteLine($"Total Loss: {totalMoneyLoss:f20}");
            Console.WriteLine($"Security Token: {securityToken}");
        }
    }
}
