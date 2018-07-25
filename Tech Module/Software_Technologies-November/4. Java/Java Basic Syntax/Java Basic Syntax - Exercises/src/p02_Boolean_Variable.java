import java.util.Scanner;

public class p02_Boolean_Variable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean inputBool = Boolean.parseBoolean(scanner.nextLine());

        if (inputBool == true)
        {
            System.out.println("Yes");
        }
        else
        {
            System.out.println("No");
        }
    }
}
