import java.util.Scanner;

public class p10_Index_of_Letters {
    public static void main(String[] args) {

        char[] alphabet = new char[26];
        for (int i = 0; i < 26; i++) {
            char letter = (char)(97 + i);
            alphabet[i] = letter;
        }

        Scanner scanner = new Scanner(System.in);
        char[] input = scanner.nextLine().toCharArray();

        for (char letter : input) {
            int index = (int) letter - 97;
            System.out.println(letter + " -> " + index);
        }
    }
}
