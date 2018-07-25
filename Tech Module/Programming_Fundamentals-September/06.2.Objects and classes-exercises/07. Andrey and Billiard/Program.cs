namespace _07.Andrey_and_Billiard
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            int numberOfStuff = int.Parse(Console.ReadLine());
            var productList = new Dictionary<string, Decimal>();
            for (int i = 0; i < numberOfStuff; i++)
            {
                var Productinput = Console.ReadLine().Split('-');
                var product = Productinput[0];
                var price = decimal.Parse(Productinput[1]);
                productList[product] = price;
            }
            var customerList = new List<Customer>();
            while (true)
            {
                var input = Console.ReadLine();
                if (input=="end of clients")
                {
                    break;
                }
                var customerData = input.Split('-', ',');
                var customerName = customerData[0];
                var product = customerData[1];
                var quantity = int.Parse(customerData[2]);
                if (!productList.ContainsKey(product))
                {
                    continue;
                }
                var client = new Customer()
                {
                    Name = customerName,
                    shopList=new Dictionary<string, int>()
                };
                client.shopList[product] = quantity;
                if (customerList.Any(c => c.Name == customerName))
                {
                    var existingClient = customerList.First(c => c.Name == customerName);
                    if (existingClient.shopList.ContainsKey(product))
                    {
                        existingClient.shopList[product] += quantity;
                        existingClient.bill += existingClient.shopList[product] * productList[product];

                    }
                    else
                    {
                        existingClient.shopList[product] = quantity;
                        existingClient.bill += existingClient.shopList[product] * productList[product];
                    }

                }
                else
                {
                    customerList.Add(client);
                    client.bill += client.shopList[product] * productList[product];
                }

            }
            decimal bill = 0m;
            var orderedList = customerList.OrderBy(x => x.Name);
            foreach (var item in orderedList)
            {
                Console.WriteLine(item.Name);
                foreach (var product in item.shopList)
                {
                    Console.WriteLine($"-- {product.Key} - {product.Value}");
                }
                Console.WriteLine($"Bill: {item.bill:f2}");
                bill += item.bill;
            }
            Console.WriteLine($"Total bill: {bill:f2}");
        }
    }
    public class Customer
    {
        public string Name { get; set; }
        public Dictionary<string, int> shopList { get; set; }
        public decimal bill { get; set; }
    }
}