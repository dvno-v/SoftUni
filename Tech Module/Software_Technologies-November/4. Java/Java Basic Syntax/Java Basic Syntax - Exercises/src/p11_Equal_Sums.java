import java.util.Arrays;
import java.util.Scanner;

public class p11_Equal_Sums {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] nums = Arrays
                .stream(scan.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        int bestIndex = 0;
        boolean equalSums = false;

        for (int i = 0; i < nums.length; i++)
        {
            int leftSum = 0;
            int rightSum = 0;
            for (int left = 0; left < i; left++)
            {
                leftSum += nums[left];
            }
            for (int right = i + 1; right < nums.length; right++)
            {
                rightSum += nums[right];
            }
            if (leftSum == rightSum)
            {
                bestIndex = i;
                equalSums = true;
                break;
            }
        }

        if (equalSums == true)
        {
            System.out.println(bestIndex);
        }
        else
        {
            System.out.println("no");
        }
    }
}
