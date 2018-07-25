import java.util.Scanner;

public class p15_Censor_Email_Address {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String email = scanner.nextLine();
        String text = scanner.nextLine();

        String[] emailSplit = email.split("@");
        String username = emailSplit[0];
        String domain = emailSplit[1];

        String replacement = newString('*', username.length());
        replacement = replacement + '@' + domain;

        text =  text.replaceAll(email, replacement);
        System.out.println(text);
    }

    public static String newString(char ch, int size) {
        return new String(new char[size]).replace('\0', ch);
    }
}
