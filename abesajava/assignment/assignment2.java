package abesajava.assignment;
import java.util.*;

public class assignment2 {
    static int add(int num) {
        if (num == 1) {
            return 1;
        } else {
            return num + add(num - 1);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(add(num));
        sc.close();
    }
}
