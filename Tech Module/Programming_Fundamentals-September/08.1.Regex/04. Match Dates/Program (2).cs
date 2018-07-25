using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public class Program
{
    public static void Main()
    {
        var pattern = @"\b(\d{2})(\/|-|.)(\w{3})\2(\d{4})\b";
        var regex = new Regex(pattern);
        var input = Console.ReadLine();
        var matches = regex.Matches(input);
        foreach (Match item in matches)
        {
            Console.WriteLine($"Day: {item.Groups[1].Value}, Month: {item.Groups[3].Value}, Year: {item.Groups[4].Value}");
        }
    }
}
