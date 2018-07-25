import java.util.Scanner;

public class Symmetric_Numbers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        for (int i = 1; i <= n; i++) {
            if (isSymmetric(Integer.toString(i))) {
                System.out.printf("%d ", i);
            }
        }
    }

    private static boolean isSymmetric(String numAsStr) {
        for (int i = 0; i < numAsStr.length() / 2; i++) {
            if (numAsStr.charAt(i) != numAsStr.charAt(numAsStr.length() - i - 1)) {
                return false;
            }
        }
        return true;
    }
}
