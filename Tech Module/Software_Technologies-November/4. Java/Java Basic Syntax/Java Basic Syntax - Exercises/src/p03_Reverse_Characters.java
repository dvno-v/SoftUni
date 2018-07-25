import java.util.Arrays;
import java.util.Scanner;

public class p03_Reverse_Characters {
    public static void main(String[] args) {
        char[] charArray = new char[3];

        Scanner scanner = new Scanner(System.in);
        charArray[0] = scanner.nextLine().charAt(0);
        charArray[1] = scanner.nextLine().charAt(0);
        charArray[2] = scanner.nextLine().charAt(0);

        for (int i = 2; i >= 0; i--) {
            System.out.print(charArray[i]);
        }
    }
}
