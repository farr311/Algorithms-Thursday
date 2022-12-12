import java.util.Arrays;

public class DynamicArray implements Dynamic {

    private int[] arr;

    private static final int DEFAULT_CAPACITY = 8; // Константа

    private int size = 0;
    private int capacity;

    public DynamicArray() { // функция, которая выполняется, когда выполняется код new DynamicArray()
        arr = new int[DEFAULT_CAPACITY];
        capacity = DEFAULT_CAPACITY;
    }

    @Override
    public void add(int value) {
        if (size == capacity) {
            growSize();
        }

        arr[size] = value;
        size++;
    }

    @Override
    public void addAt(int index, int value) {
        if (size == capacity) {
            growSize();
        }

        for (int i = size; i >= index; i--) {
            arr[i + 1] = arr[i];
        }

        arr[index] = value;
        size++;
    }

    @Override
    public void remove() {
        arr[size - 1] = 0;
        size--;
    }

    @Override
    public void removeAt(int index) {
        for (int i = index; i < size; i++) {
            arr[i] = arr[i + 1];
        }
        arr[size - 1] = 0;
        size--;
        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // [1, 2, 3, 4, 0, 6, 7, 8, 9, 10]
        // [1, 2, 3, 4, 6, 7, 8, 9, 10]
    }

    @Override
    public void set(int index, int value) {
        arr[index] = value;
    }

    @Override
    public int get(int index) {
        return arr[index];
    }

    @Override
    public void clear() {
        arr = new int[DEFAULT_CAPACITY];
    }

    @Override
    public boolean contains(int value) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return true;
            }
        }

        return false;
    }

    private void growSize() {
        capacity *= 2;
        int[] tempArr = new int[capacity];

        for (int i = 0; i < size; i++) {
            tempArr[i] = arr[i];
        }

        arr = tempArr;
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    @Override
    public void print() {
        System.out.println(Arrays.toString(arr));
    }
}
