import java.util.Scanner;

public class p06_Compare_Char_Arrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String first = scanner.nextLine();
        String charArray = first.replaceAll(" ", "");
        char[] firstCharArr = charArray.toCharArray();

        String second = scanner.nextLine().replaceAll(" ", "");
        char[] secondCharArr = second.toCharArray();

        int shorter = Math.min(firstCharArr.length, secondCharArr.length);

        for (int i = 0; i < shorter; i++)

            if (firstCharArr[i] == secondCharArr[i])
            {
                if (i == shorter - 1)
                {
                    if (firstCharArr.length >= secondCharArr.length)
                    {
                        PrintCharArray(secondCharArr);
                        PrintCharArray(firstCharArr);
                    }
                    else
                    {
                        PrintCharArray(firstCharArr);
                        PrintCharArray(secondCharArr);
                    }

                    break;
                }
            }
            else if (firstCharArr[i] <= secondCharArr[i])
            {
                PrintCharArray(firstCharArr);
                PrintCharArray(secondCharArr);
                break;
            }
            else if (firstCharArr[i] > secondCharArr[i])
            {
                PrintCharArray(secondCharArr);
                PrintCharArray(firstCharArr);
                break;
            }
        }

        private static void PrintCharArray(char[] charArr)
        {
            for (int i = 0; i < charArr.length; i++)
            {
                System.out.print(charArr[i]);
            }
            System.out.println();
        }
}
