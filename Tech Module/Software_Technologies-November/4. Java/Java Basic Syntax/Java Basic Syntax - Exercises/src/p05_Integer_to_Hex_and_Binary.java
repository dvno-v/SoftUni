import java.util.Scanner;

public class p05_Integer_to_Hex_and_Binary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int decimalInput = Integer.parseInt(scanner.nextLine());

        String hexValue = Integer.toHexString(decimalInput).toUpperCase();
        String binaryValue = Integer.toBinaryString(decimalInput);

        System.out.println(hexValue);
        System.out.println(binaryValue);
    }
}
