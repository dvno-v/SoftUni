import java.util.Scanner;

public class p04_Vowel_or_Digit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char ch = scanner.nextLine().charAt(0);
        if (Character.isDigit(ch)) {
            System.out.println("digit");
        }
        else if (Character.isLetter(ch)) {
            ch = Character.toLowerCase(ch);
            switch (ch) {
                case 'a' :
                case 'e' :
                case 'i' :
                case 'o' :
                case 'u' :
                case 'y' :
                    System.out.println("vowel");
                    break;
                default:
                    System.out.println("other");
            }
        }
        else {
            System.out.println("other");
        }
    }
}
