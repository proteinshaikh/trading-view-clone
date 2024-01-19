# How a HashMap Works Internally

1. **Storage:** At its core, a HashMap uses an array for storage. Each element in this array is a bucket that can store one or more key-value pairs.
2. **Hash Function:**
   - When you put a key-value pair into the map, the key is processed by a hash function, which generates an integer (the hash code).
   - This hash code is then transformed into an index in the array where the corresponding value should be stored.
   - Java's Object class provides a default `hashCode()` method, but many classes override this to provide a more efficient or suitable hash code.
3. **Buckets and Collision:**
   - It's possible for two different keys to have the same hash code (or map to the same bucket after transformation). This is called a collision.
   - To handle collisions, each bucket in the HashMap array doesn't just store a single key-value pair. Instead, it stores a linked list (or a tree, as we'll see later) of all the key-value pairs that hash to the same bucket.
   - When you look up a value by key, the HashMap finds the right bucket (using the hash code), then traverses the linked list in that bucket to find the key-value pair with the matching key.
4. **Resizing and Load Factor:**
   - The capacity of the backing array and the load factor are two important attributes of a HashMap.
   - The load factor is a measure of how full the array is allowed to get before it's resized (increased). A typical value might be 0.75.
   - When the number of entries in the hashmap exceeds the product of the load factor and the current capacity, the hashmap is rehashed (i.e., internal data structures are rebuilt). This usually means the array is doubled in size.
5. **Treeify/Bin:**
   - Starting with Java 8, a bin in the HashMap will be transformed from a linked list to a balanced tree when the number of items in a bin exceeds a certain threshold. This is done to improve performance. If many items hash to the same bucket, looking up an item can take O(n) time in the worst case. Using a tree instead of a linked list reduces this to O(log n).
6. **Null Keys:** Java's HashMap allows one null key. It's stored in a special bucket, so no hash function is called on a null key.
7. **Concurrency Issues:**
   - The standard HashMap isn't synchronized, meaning concurrent access by multiple threads can lead to undefined behavior.
   - For a thread-safe version, you could use `Collections.synchronizedMap()` or opt for `ConcurrentHashMap`.