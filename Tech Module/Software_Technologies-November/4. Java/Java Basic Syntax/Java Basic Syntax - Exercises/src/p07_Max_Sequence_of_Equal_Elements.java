import java.util.Scanner;

public class p07_Max_Sequence_of_Equal_Elements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] numsAsStrArr = scanner.nextLine().split(" ");

        int[] nums = new int[numsAsStrArr.length];
        for (int i = 0; i < nums.length; i++) {
            nums[i] = Integer.parseInt(numsAsStrArr[i]);
        }

        int maxSequence = 1;
        int currSequence = 1;
        int bestStartPos = 0;

        for (int i = 0; i < nums.length - 1; i++)
        {
            int currPos = i;
            Boolean fb = i < nums.length - 1;
            Boolean sb = nums[i] == nums[i + 1] - 1;
            while (i < nums.length - 1
                    && nums[i] == nums[i + 1] - 1)
            {
                currSequence++;
                if (currSequence > maxSequence)
                {
                    maxSequence = currSequence;
                    bestStartPos = currPos;
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
