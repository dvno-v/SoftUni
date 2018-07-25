import java.util.Scanner;

public class p01_Variable_in_Hex_Format {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String hexValue = scanner.nextLine();
        int decValue = Integer.parseInt(hexValue, 16);
        System.out.println(decValue);
    }
}
