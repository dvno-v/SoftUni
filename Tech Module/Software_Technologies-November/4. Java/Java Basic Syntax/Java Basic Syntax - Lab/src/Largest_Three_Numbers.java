import java.lang.reflect.Array;
import java.util.*;

public class Largest_Three_Numbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] nums = Arrays
                .stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        List<Integer> numsList = new ArrayList<Integer>();
        for (int index = 0; index < nums.length; index++)
        {
            numsList.add(nums[index]);
        }
        Collections.sort(numsList);
        Collections.reverse(numsList);

        for (int i = 0; i < numsList.size(); i++) {
            if (i == 3) {
                break;
            }
            System.out.println(numsList.get(i));
        }
    }
}
