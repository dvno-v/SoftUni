import java.util.Scanner;

public class Sum_N_Integers {
    public static void main(String[] args) {
        Scanner readData = new Scanner(System.in);
        int n = readData.nextInt();

        long sum = 0;
        for (int i = 0; i < n; i++) {
            int currentNum = readData.nextInt();
            sum += currentNum;
        }

        System.out.printf("Sum = %d", sum);
    }
}
