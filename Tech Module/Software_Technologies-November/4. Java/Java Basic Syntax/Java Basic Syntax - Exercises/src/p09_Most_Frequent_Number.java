import java.util.Scanner;

public class p09_Most_Frequent_Number {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] numsAsStrArr = scanner.nextLine().split(" ");

        int[] nums = new int[numsAsStrArr.length];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = Integer.parseInt(numsAsStrArr[i]);
        }

        int currNum = 0;
        int numFrqu = 0;
        int bestFrequ = 0;
        int maxFrequ = 0;

        for (int num = 0; num < nums.length; num++) {
            currNum = nums[num];
            for (int i = 0; i < nums.length; i++) {
                if (nums[i] == currNum) {
                    numFrqu++;
                }
            }
            if (numFrqu > bestFrequ) {
                bestFrequ = numFrqu;
                maxFrequ = currNum;
            }
            numFrqu = 0;
        }
        System.out.println(maxFrequ);;
    }
}