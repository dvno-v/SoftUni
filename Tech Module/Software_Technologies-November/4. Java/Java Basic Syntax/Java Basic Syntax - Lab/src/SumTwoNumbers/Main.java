package SumTwoNumbers;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);

        double num1 = read.nextDouble();
        double num2 = read.nextDouble();
        //or:
        //double num1 = Double.parseDouble(scan.nextLine());
        //double num2 = Double.parseDouble(scan.nextLine());

        System.out.printf("Sum=%.2f", num1 + num2);
    }
}
