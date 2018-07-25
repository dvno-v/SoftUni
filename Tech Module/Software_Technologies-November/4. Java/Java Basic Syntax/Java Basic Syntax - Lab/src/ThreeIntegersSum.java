import java.util.Scanner;

public class ThreeIntegersSum {
    public static void main(String[] args) {
        Scanner readData = new Scanner(System.in);
        int num1 = readData.nextInt();
        int num2 = readData.nextInt();
        int num3 = readData.nextInt();

        if (num1 == num2 + num3) {
            System.out.printf("%d + %d = %d",
                    Math.min(num2, num3),
                    Math.max(num2, num3),
                    num1);
        }
        else if (num2 == num1 + num3) {
            System.out.printf("%d + %d = %d",
                    Math.min(num1, num3),
                    Math.max(num1, num3),
                    num2);
        }
        else if (num3 == num1 + num2) {
            System.out.printf("%d + %d = %d",
                    Math.min(num1, num2),
                    Math.max(num1, num2),
                    num3);
        }
        else {
            System.out.println("No");
        }
    }
}
