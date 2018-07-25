using System;
class Program
{
    static void Main()
    {
        string number = Console.ReadLine();
        try
        {
            string dataType = "";
            long updatedNumber = long.Parse(number);

            if (updatedNumber <= sbyte.MaxValue && updatedNumber >= sbyte.MinValue)
            {
                dataType += "* sbyte";
            }
            if (updatedNumber <= byte.MaxValue && updatedNumber >= byte.MinValue)
            {
                dataType += "\n* byte";
            }
            if (updatedNumber <= short.MaxValue && updatedNumber >= short.MinValue)
            {
                dataType += "\n* short";
            }
            if (updatedNumber <= ushort.MaxValue && updatedNumber >= ushort.MinValue)
            {
                dataType += "\n* ushort";
            }
            if (updatedNumber <= int.MaxValue && updatedNumber >= int.MinValue)
            {
                dataType += "\n* int";
            }
            if (updatedNumber <= uint.MaxValue && updatedNumber >= uint.MinValue)
            {
                dataType += "\n* uint";
            }
            if (updatedNumber <= long.MaxValue && updatedNumber >= long.MinValue)
            {
                dataType += "\n* long";
            }
            Console.Write("{0} can fit in: ", updatedNumber);
            Console.WriteLine(dataType);
        }
        catch (OverflowException)
        {
            Console.WriteLine("{0} can't fit in any type", number);
        }
    }
}