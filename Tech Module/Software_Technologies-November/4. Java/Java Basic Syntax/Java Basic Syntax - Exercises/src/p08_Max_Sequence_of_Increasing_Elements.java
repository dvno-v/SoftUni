import java.util.Scanner;

public class p08_Max_Sequence_of_Increasing_Elements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] numsAsStrArr = scanner.nextLine().split(" ");

        long[] nums = new long[numsAsStrArr.length];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = Long.parseLong(numsAsStrArr[i]);
        }

        int maxSequence = 1;
        int currSequence = 1;
        int startPos = 0;
        int bestStartPos = 0;

        for (int i = 0; i < nums.length - 1; i++)
        {
            startPos = i;
            while (i < nums.length - 1
                    && nums[i] < nums[i + 1])
            {
                currSequence++;
                if (currSequence > maxSequence)
                {
                    maxSequence = currSequence;
                    bestStartPos = startPos;
                }
                i++;
            }
            currSequence = 1;
        }

        for (int i = bestStartPos; i < bestStartPos + maxSequence; i++)
        {
            System.out.print(nums[i] + " ");
        }
    }
}
