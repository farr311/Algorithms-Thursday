public interface Dynamic {

    void add(int value);

    void addAt(int index, int value);

    void remove();

    void removeAt(int index);

    void set(int index, int value);

    int get(int index);

    void clear();

    boolean contains(int value);

    boolean isEmpty();

    void print();
}
