public class Main {
    public static void main(String[] args) {
       // test();
        System.out.println(test2());
    }

    static void test() {
        int[] arr = new int[0];

        try {
            System.out.println(arr[1]);
        } catch (ArrayIndexOutOfBoundsException e) {
            throw new RuntimeException();
        } finally {
            System.out.println("Tested");
        }
    }

    static String test2() {
        int[] arr = new int[0];

        try {
            System.out.println(arr[1]);
            return "test";
        } catch (ArrayIndexOutOfBoundsException e) {
            return "test2";
        } finally {
            //return "test3";
            System.out.println("test");
        }
    }
}