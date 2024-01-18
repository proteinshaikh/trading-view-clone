


---

Starting with Java 8, a bin in the HashMap will be transformed from a linked list to a Binary tree when the number of items in a bin exceeds a certain threshold.
---


When to use @Service over @Component:

1. Semantic Meaning: If the class is primarily aimed at handling business logic, then @Service is more semantically correct. Using @Service tells other developers that this class is a Service Layer bean.
2. Aspect-Oriented Programming (AOP): If you're using AOP in your application and want to apply certain behaviors only to service beans (like transaction management), then differentiating between components using @Service can be helpful. For instance, in many Spring applications, transactional boundaries are often set on methods of beans annotated with @Service.
3. Component Scan Filtering: If you want to include or exclude certain beans during component scanning, differentiating between @Component, @Service, @Repository, and @Controller can be handy. You can then set up component scanning to only include/exclude certain stereotypes.
---

Intercepting a Spring Boot application at the network level can be achieved through various means
1. Packet Sniffing: Tools like Wireshark or tcpdump can be used to capture and analyze network traffic. They can provide deep insights into the raw data packets that are transmitted between the client and the server.
   Note: These tools will show encrypted data if HTTPS is being used. To view the data, you would need the SSL private key to decrypt the traffic or set up a MITM (Man-in-the-Middle) proxy.
2. Proxy Tools: Tools like Charles, Fiddler, and Burp Suite can act as a proxy between the client and server. They can intercept, inspect, and even modify the requests and responses.
   Set up the proxy tool on your machine.Configure your application (or your entire system) to route traffic through this proxy.Watch and modify the traffic as needed.
   For HTTPS traffic, these tools generate their own SSL certificates. You'll have to install their root certificate on your client machine to prevent SSL warnings.
---

The single & will always evaluate both sides of the expression, while && will only evaluate the right side if it's necessary to do so
---

In a Spring Boot application, you can have both .yml (or .yaml) and .properties files present at the same time.
When both are present, the properties from both files are loaded. However, if there are conflicting property keys, the values from the .properties file will take precedence over the values from the .yml file.
---

Filters allow developers to write functions that can perform certain tasks either before the request reaches the destination (e.g., a controller) or after the response is about to be returned.

Interceptors allow developers to execute specific logic before and/or after the dispatching of a web request to a handler method (usually a method inside a @Controller). They are similar in nature to filters, but they operate at a higher level, specifically within the Spring MVC framework, making them aware of the MVC context.

Filters vs Interceptors
1. Operational Level:
	- Filters: These are based on Java's Servlet technology. Filters operate at a lower level and can intercept requests and responses before they reach the Servlet or after they leave the Servlet, respectively.
	- Interceptors: These are part of the Spring MVC framework. They operate at a higher level and can intercept requests before they reach the handler (controller methods) and after the handler completes but before the view is rendered.
2. Awareness:
	- Filters: Since they are tied to the Servlet API, they are not aware of the Spring MVC context. They only see the request and response and are not inherently aware of specific Spring components like controllers, services, etc.
	- Interceptors: They are well-integrated into the Spring lifecycle and are aware of the Spring MVC context. This means they can be aware of controllers, services, and other Spring components.
3. Use Cases:
	- Filters: Best suited for tasks like request and response modification, logging, CORS handling, input validation, encoding, and compression.
	- Interceptors: More suitable for tasks that require awareness of the application context, like modifying model data before a view is rendered, or checking authentication and authorization before reaching a handler method in a controller.
4. Configuration:
	- Filters: These are configured in the web.xml file or by using the @WebFilter annotation or through Java configuration by implementing FilterRegistrationBean.
	- Interceptors: Configured using Spring's Java configuration by implementing WebMvcConfigurer and overriding the addInterceptors method.
5. Execution Order:
	- Filters: Execute before interceptors.
	- Interceptors: Execute after the filters.
6. Flexibility:
	- Filters: Being part of the Servlet specification, filters are more general-purpose and can be used outside the Spring ecosystem in any Java-based web application.
	- Interceptors: Tightly integrated with Spring, they offer more flexibility when you're working within the Spring ecosystem, allowing for better integration with Spring features.
---

Thread parking is a concept where a thread is made to wait (or "parked") until it's unparked or a certain condition is met. In Java, this functionality is a part of the java.util.concurrent.locks package, specifically in the LockSupport class. When a thread is parked, it doesn't consume any significant CPU, allowing for efficient waiting. It can be unparked in response to an external stimulus.

Thread states:

1. New (Born): A thread is in this state after the object of the thread class is created but before the start() method is invoked on that object.
2. Runnable (Ready): After the invocation of the start() method, the thread is runnable. However, it might not necessarily be executing immediately. It's now up to the thread scheduler to pick it up for execution.
3. Running: The thread is currently executing.
4. Blocked (or Waiting): A thread can be blocked when waiting for a resource. There are several ways a thread can enter the blocked state, such as waiting for an input/output resource or trying to get a lock on an object that another thread currently holds.
5. Timed Waiting: A thread is in this state due to calling a method with a specified time period for which it will wait. For example, calling the sleep() method will put the thread in a timed waiting state.
6. Terminated (Dead): Once the execution of the thread is complete, or it's forcibly stopped, it's in the terminated state.

---

Several collections in Java's Collections Framework maintain the insertion order. Here are the primary ones:
1. ArrayList: A part of the List family, ArrayList maintains the insertion order, i.e., the order in which elements are added to the list is preserved when they are retrieved.
2. LinkedList: Also a part of the List family, LinkedList maintains the insertion order just like ArrayList.
3. LinkedHashSet: This is an ordered version of HashSet that maintains the order in which elements were inserted.
4. LinkedHashMap: While the regular HashMap doesn't maintain insertion order, the LinkedHashMap does. It preserves the order in which key-value pairs are inserted.
5. ArrayDeque: A double-ended queue, ArrayDeque can be used as a stack or queue and maintains the order of items.
6. Stack: A subclass of Vector, it represents a last-in-first-out (LIFO) stack of objects and maintains the order of insertion.
7. Vector: It's similar to ArrayList but synchronized. It maintains the order of elements based on their insertion.
---

To insert an item at a specific location in an ArrayList, you can use the add(int index, E element) method.
---

In earlier Java versions calling substring() on a long String would keep the original String in memory (they would share the internal char[]). This can cause memory issues if the original Strings are kept around in memory unnecessarily.
In Java 8 this is no longer the case (the internal char[] is copied) and you can freely take substrings of even long Strings.
---
peek
.peek(System.out::println): This is where peek comes in. For every element (word) in the stream, it prints out the element. This is useful if you want to see the intermediate data before any further operations (like map) are applied. After printing, the word is passed along unchanged.
---
DoubleSummaryStatistics can be used as a reduction target for a stream. For example:
DoubleSummaryStatistics stats = people.stream() .collect(Collectors.summarizingDouble(Person::getWeight));This computes, in a single pass, the count of people, as well as the minimum, maximum, sum, and average of their weights.
---
Prime number: 2 to square root-> if a number is divisible by none then a number is prime
---

- Stream.of(string) creates a stream containing a single element.
- strings.stream() creates a stream containing all the elements of the strings collection.
---
stereotype annotations in spring are @Component, @Service, @Repository, and @Controller. 
These annotations are used to create Spring beans automatically in the application context.
---
Eventual consistency is a model for achieving consistency in distributed computing systems and databases. If a system has eventual consistency, then any update to a particular node in the system will eventually be reflected in all nodes in the system.
---
12-factor app
1. Codebase:
	- Have a single codebase tracked in revision control.
	- Multiple deployments can arise from this codebase, such as staging, development, and production.
2. Dependencies:
	- Declare and isolate dependencies explicitly.
	- Use package managers like pip (Python), npm (JavaScript), or Bundler (Ruby) to manage libraries.
3. Config:
	- Store the configuration in the environment, separate from the code.
	- Avoid using config files that are included in the codebase.
4. Backing Services:
	- Treat backing services, like databases, messaging queues, or cache systems, as attached resources.
	- They should be addressable via a URL or connection string in the config.
5. Build, Release, Run:
	- Strictly separate the build, release, and run stages.
	- Build: Convert codebase to executables.
	- Release: Combine build with the config, ready for execution.
	- Run: Execute the app in the execution environment.
6. Processes:
	- Execute the app as one or more stateless processes.
	- Data that needs persistence should be stored in a stateful backing service, like a database.
7. Port Binding:
	- Make the app self-contained and able to bind to a port to serve requests.
	- For web apps, it can be done by using an HTTP server embedded within the app.
8. Concurrency:
	- Scale out the app horizontally, not vertically.
	- Use the process model to scale out, using distributed systems best practices.
9. Disposability:
	- Make processes fast to start and graceful to stop.
	- This aids in robustness and rapid elasticity.
10. Dev/Prod Parity:
- Keep development, staging, and production environments as similar as possible.
- This reduces the number of surprises when deploying to production.
11. Logs:
- Treat logs as event streams.
- Don't handle logs within the app, but instead, stream them to a separate system for processing.
12. Admin Processes:
- Run administrative/management tasks as one-off processes.
- They should run in an identical environment as the app's regular processes.

codebase(git), dependencies, backing services, logs, config, env variables, build-release-run, dev-prod parity, admin process, port binding, disposability, concurrency, stateless
---
SSL (Secure Sockets Layer) handshake is a protocol used to establish a secure connection between a client and a server. It's crucial for protecting sensitive data in transit. TLS (Transport Layer Security) is an updated, more secure, version of SSL. While people sometimes still refer to TLS as SSL because of its predecessor's popularity, it's more accurate to use the term TLS. For the purpose of this explanation, I'll use "SSL/TLS handshake".

SSL/TLS Handshake Overview:

1. ClientHello: The client starts by sending a "ClientHello" message that lists supported cipher suites, random bytes (Client Random), and other settings.
2. ServerHello: The server responds with a "ServerHello" message that contains the cipher suite it has selected from the list provided by the client, random bytes (Server Random), and other settings.
3. Server's Certificate: The server sends its digital certificate to the client. This certificate is typically issued by a Certificate Authority (CA), which the client trusts.
4. Key Exchange: The client and server exchange key information. Depending on the chosen cipher suite, this could involve the client sending a pre-master secret encrypted with the server's public key (from its certificate).
5. Generating the Session Key: Both the client and server compute the session key using the pre-master secret and random bytes they exchanged.
6. Client Finished & Server Finished: Both the client and server confirm that the handshake is complete and that encrypted data transmission can begin.

symmetric encryption uses same keys for encryption and decryption
asymetric uses public and private keys
---

library -> heap is books in library, stack is current book we are writing

- Stack:
	- Stores local primitive variables and references to objects.
	- Manages function/method call orders.
	- Has a fixed size set at JVM startup (and can throw a StackOverflowError if this size is exceeded, e.g., due to deep or infinite recursion).
- Heap:
	- Stores all the objects (instances of classes) in your Java application, regardless of their scope.
	- Has a dynamic size (can grow and shrink), but there's an upper limit based on the JVM's available memory (exceeding this can result in an OutOfMemoryError).
	- Managed by the garbage collector, which automatically deletes objects that are no longer in use.

---
Memory leaks and OutOfMemoryError happen in heap
stackoverflow happens in stack
---

In Java, memory leaks occur when objects are no longer needed but are still referenced in memory, preventing the garbage collector from reclaiming that space. Despite Java having a garbage collector, memory leaks can still happen. Memory leaks happen in heap.


eg:
Static Fields: One of the most common culprits for memory leaks in Java is the misuse of static fields. Static fields are associated with a class and not individual instances, and they remain in memory for the lifetime of the JVM. If a static field holds a reference to a large collection or array, it can cause a significant memory leak.
public class MemoryLeak { private static final List<Object> list = new ArrayList<>();  public void addToList(Object obj) { list.add(obj); }}
In the above case, as objects are added to list, they will never be garbage collected until the JVM stops, regardless of whether the MemoryLeak class is being used elsewhere or not.

Detecting and diagnosing memory leaks requires monitoring tools and profilers like VisualVM, YourKit, or MAT (Memory Analyzer Tool) that can help analyze heap dumps and track memory allocations.
If you suspect a memory leak in your application, it's crucial to investigate and address it early, as unchecked memory leaks can lead to OutOfMemoryErrorand can degrade the performance and responsiveness of the application.

The OutOfMemoryError in Java is a runtime error that is thrown by the Java Virtual Machine (JVM) when it runs out of memory. This error indicates that the JVM cannot allocate an object because there is no more room in the heap, or it cannot create a new native thread and so forth.

---
In Java, a StackOverflowError is an error that occurs when a program recurses too deeply. It's a runtime error thrown by the Java Virtual Machine (JVM) when the stack, a region of memory used for executing threads, overflows due to excessive method call recursion.
---


latest kafka version 3.5.1

The offset is a unique ID assigned to the partitions, which contains messages. The most important use is that it identifies the messages through ID, which are available in the partitions. In other words, it is a position within a partition for the next message to be sent to a consumer.


Kafka is immutable.
1. Topic: A stream of records. Topics in Kafka are split into one or more partitions.
2. Partition: The basic unit of parallelism in Kafka. Each topic can be split into multiple partitions, allowing for parallel read/write operations.
3. Broker: A Kafka server that stores data and serves client requests.
Data Replication:
1. Replica: Each partition can be replicated across multiple brokers. These replicas ensure data availability in case a broker fails. Every partition has one "leader" replica and zero or more "follower" replicas.
2. Leader Replica: This is the replica responsible for handling all reads and writes for a specific partition. When producers want to write data or consumers want to read data from a partition, they connect to the leader.
3. Follower Replica: These replicas replicate the data of the leader. They continually fetch messages from the leader to stay synchronized. Followers don't serve client requests; their primary role is to be ready to take over if the leader fails.

 if you set a replication factor of 3, each partition of the topic will have one leader and two followers.

debug kafka:
Look for specific Kafka exception types (e.g., ProducerFencedException, TimeoutException).
the ProducerFencedException is thrown when a producer with a specific transactional ID is deemed to be "fenced," i.e., it is not allowed to send messages.
Check the logs of the Kafka broker. They can offer insights into issues related to topic creation, replication, and other broker-level operations.

---

Spring cloud components:
- Service Discovery
- Distributed/Versioned Configuration
- API Gateways
- Load Balancing
- Circuit Breakers
- Distributed Messaging
- Distributed Tracing
- Security
---
Handling exceptions:
1. checked exceptions
try-catch or
throws  any method that calls myMethod will have to either catch the FileNotFoundException or declare that it too throws the FileNotFoundException.

2. unchecked 
can be handled same as checked.
Although it's less common, you can also declare that your method might throw an unchecked exception. However, doing so won't require the caller method to handle or declare it.

The choice between creating a checked or unchecked custom exception usually depends on the nature of the exceptional condition and how you expect callers to handle it. If you believe the caller should be made aware of and explicitly handle the exception, you'd typically make it checked. If you believe the exceptional condition is typically a programming error or something not normally recoverable, you'd make it unchecked.
when you're creating a custom exception, whether it's checked or unchecked depends on which class you extend
---
Composition: Composition implies a relationship where the child cannot exist independently of the parent. If the parent is destroyed, the child will also be.

Aggregation: Aggregation implies a relationship where the child can exist independently of the parent.

---
static methods can be tested using junit by testing the state of the method by adding some values.
---
If the superclass overridden method throws an exception:
- The subclass overriding method can only throw the same, subclass, or no exception. Throwing a parent exception in the Exception hierarchy will lead to a compile-time error.
---

The Actuator is a sub-project of Spring Boot that provides production-ready features to help you monitor and manage your application.
Features:
1. Health Check: Provides the health status of your application. It checks various components (like database connectivity, disk space, etc.) and reports whether they are up or down.
2. Metrics: Exposes a vast number of metrics related to JVM, application performance, and other internals.
3. Application Environment: Shows details about the Spring configuration properties, environment properties, configuration beans, and more.
4. Auditing: Provides a way to track user activity in your application.
5. HTTP Tracing: Keeps track of HTTP request-response exchanges.
6. Loggers: Displays and modifies the configuration of loggers in the system.
7. Thread Dump: Provides a thread dump of the application.
8. Info: Exposes arbitrary application information.

---

AOP (Aspect-Oriented Programming) is a programming paradigm that provides a way to modularize cross-cutting concerns separately from the main business logic of an application. Cross-cutting concerns are aspects of a program that affect multiple modules, such as logging, transaction management, security
@Aspect@Componentpublic class LoggingAspect { @Before("execution(* com.example.service.*.*(..))") public void beforeAdvice(JoinPoint joinPoint) { System.out.println("Before method:" + joinPoint.getSignature()); }

@After("execution(* com.example.service.*.*(..))") public void afterAdvice(JoinPoint joinPoint) { System.out.println("After method:" + joinPoint.getSignature()); }}

 @Before and @After are advice annotations. The string argument is a pointcut expression which says, "For all methods in com.example.service, execute the advice before/after the method."
---
Java provides a Collector interface to create custom collectors.
---
ExecutorService is an interface in the java.util.concurrent package. It provides a higher-level replacement for the traditional way of managing threads in Java. Instead of directly controlling threads, you submit tasks to the ExecutorService, and it takes care of scheduling and executing them using managed thread pools.
When you submit a Callable task to an ExecutorService, it returns a Future<V>
---
We can test private methods in junit by using Reflection
```
Method method = TargetClass.getDeclaredMethod(methodName, argClasses);
method.setAccessible(true);
return method.invoke(targetObject, argObjects);
```

---
Java Singleton ensures a single instance per JVM (unless there are classloader nuances). Spring Singleton ensures a single instance per application context.
---

@EnableTransactionManagement for transaction
By default, Spring rolls back the transaction if the method throws a runtime exception (unchecked exception). If a checked exception is thrown, the transaction is not rolled back. You can configure this behavior using the rollbackFor and noRollbackFor attributes of @Transactional.
---
Short-circuiting operations in streams are those operations that don't necessarily process all the elements of the stream to produce a result. Once they satisfy their conditions or find the desired element(s), they terminate the operation.
limit, findFirst(),findAny()
---
ForkJoinPool is a specialized implementation of the ExecutorService interface introduced in Java 7, aiming to facilitate the efficient execution of tasks that can be broken down into smaller subtasks, potentially to be executed in parallel. It employs a work-stealing algorithm to ensure that threads are kept busy and overhead is minimized.
---
Streams:

Stateless Operations:

1. Definition: Stateless operations do not retain any state from previously seen elements when processing new elements. Each element can be processed independently of operations on other elements.
eg. filter, map

Stateful Operations:

1. Definition: Stateful operations may retain state from previously seen elements when processing new elements. They may need to process the entire input before producing a result or may produce several intermediary results.
eg. sorted, distinct, limit, collect
---

- A static method can be called both from static and non-static methods. If calling from a non-static method, you can use the method name directly.
- A non-static method requires an instance of the class to be called. If you're trying to call it from a static method, you'll need to first create an instance of the class.
---
If wait() and notify() were on the Thread instead then each thread would have to know the status of every other thread and there is no way to know thread1 that thread2 was waiting for any resource to access. Hence, notify, wait, notifyAll methods are defined in object class in Java.

To make threads run in sequence, you typically have to use synchronization constructs. 1. Using join()
By calling the join() method of a thread, the current thread will wait until the specified thread terminates.
Java's Semaphore class provides a mechanism to control thread execution sequences.
---
Predicate is a functional interface introduced in Java 8, located in the java.util.function package. Its primary purpose is to represent a boolean-valued function of one argument. In other words, it's a function that takes a single input and returns a boolean value.
Supplier: It doesn't take any input but returns some value.
Consumer: accepts a single input argument and returns no result
---
The function passed to map must be a function that takes an element of the original type and produces a result (which might be of a different type).

The filter operation is used to select elements from a stream that satisfy a given predicate (a function that returns true or false). The result is a new stream that contains only the elements for which the predicate returns true
---

CrudRepository:
- Handles fundamental CRUD functions.
- No requirement for defining a primary key type.
- Versatile: usable with other Spring Data modules like Solr and Elasticsearch.
- Key operations: save(), findOne(), findAll(), etc.
JpaRepository:
- Inherits CrudRepositoryand PagingAndSortingRepository, providing all their capabilities plus JPA-specific ones.
- Tailored for JPA; not for other database technologies.
- Manages large datasets using pagination (e.g., findAll(Pageable pageable)).
- Offers JPA-specialized operations like flush() and deleteInBatch().

Which One to Use?
- If you are working with JPA and need features like pagination or JPA-specific methods, then JpaRepository is the better choice.
- If you want a more general-purpose repository with basic CRUD operations (and maybe you're planning to switch between different Spring Data modules), then CrudRepository might be a better fit.
- However, in many typical Spring Data JPA scenarios, developers lean towards JpaRepository because of the added functionality it provides on top of CrudRepository.
Remember, in most cases, you don't implement these interfaces directly. Spring Data JPA will provide the implementation at runtime. You simply extend one of these interfaces and, if necessary, define custom query methods.
---
The try-with-resources statement is a feature introduced in Java 7 (as part of Project Coin) to simplify the handling of resources such as files, sockets, or database connections, and ensure that they are closed properly to avoid resource leaks.

The resource class must implement the AutoCloseable or Closeable interface, both of which have the close() method.

eg Bufferedreader -> Once the try block is exited, the BufferedReader's close() method is automatically called, ensuring the file is properly closed without having to explicitly do so.

---
For classes you don't control (like those in the Java standard library or third-party libraries), you can't add Comparable to them, but you can always define a Comparator.
---
If arr is already of type Integer[], then there's no need for the boxed() method. If arr is of type int[], then the boxed() method is necessary to work with the Collectors provided by the Streams API, as they operate on objects, not primitives.
---

1. In-Memory Cache:
	- Caffeine: A high-performance cache which can be easily integrated with Spring Boot.
	- EhCache: A popular choice for in-memory caching that also offers disk-based persistence.
2. Distributed Cache:
	- Redis: A fast, open-source, in-memory key-value data store. It's widely used for caching in distributed systems.
	- Memcached: Another popular distributed caching system.
	- Hazelcast: An in-memory data grid, which is often used for distributed caching scenarios.
---
While both @Primary and @Qualifier are used to resolve autowiring conflicts, @Primary sets a bean as the default for autowiring among multiple eligible beans of the same type. In contrast, @Qualifier is used to specify exactly which bean should be wired in at the point of injection.
---
@RestController = @Controller + @ResponseBody(method level annotation)
---
The @SpringBootApplication annotation is a convenience annotation in Spring Boot that combines the following three annotations:
1. @SpringBootConfiguration: Indicates that the class is a configuration class, effectively a specialized form of the @Configuration annotation provided by Spring Framework.
2. @EnableAutoConfiguration: Enables Spring Boot's auto-configuration mechanism, which tries to automatically configure your application based on the libraries you have in your classpath.
3. @ComponentScan: Enables the scanning for Spring components (like @Service, @Controller, @Repository, etc.) starting from the package where the annotated class is located and its sub-packages.
---

@EqualsAndHashCode annotation at the class level, Lombok will generate both equals() and hashCode() methods based on all non-static fields.
---
The reduce operation in Java streams is used to produce a single result from a sequence of elements. The reduce method takes a binary operator function, which accumulates the elements of the stream.
---
Covariant return types in Java refer to the ability of a method in a subclass to override a superclass method such that the return type of the overriding method in the subclass is a subtype (subclass or derived type) of the return type of the overridden method in the superclass.
---

- @Secured: Checks security constraints before the method execution.
- @PreAuthorize: Also checks before method execution but allows for more complex expressions with SpEL.
- @PostAuthorize: Checks after method execution, often used to make decisions based on the returned value.
---
Here are a few ways to prevent private methods from being accessed using reflection in Java:

1. Use access modifiers like private, protected or package-private appropriately to prevent direct access. This will disallow direct access from other classes.

2. Disable reflection access via a SecurityManager:

```javaSystem.setSecurityManager(new SecurityManager() { public void checkMemberAccess(Member m) { if (m.isAccessible()) { throw new SecurityException("Access denied"); } } });```

3. Modify the access flags on private methods using setAccessible(false) to prevent reflection from changing access:

```java method.setAccessible(false);```

4. Use nested classes instead of private methods since the outer class instance acts as an access control mechanism.

5. Obfuscate method names and use access modifiers like strictfp to discourage reflection attacks.

6. Use JVM agents to disallow unsafe reflective access at runtime.

7. Validate stack traces to check if accessed via reflection and throw exceptions.

But in general, keeping sensitive logic in private methods and following secure coding practices is the best policy to avoid misuse of reflections.
---
Hashtable vs hashmap
- HashMap is non-synchronized and allows null keys and values. It is not thread-safe and can't be shared between multiple threads without external synchronization.
- Hashtable is synchronized and is thread-safe. It doesn't allow null keys or values. All methods of Hashtable are synchronized.
- HashMap extends the AbstractMap class. Hashtable extends Dictionary class.

---
differences between Spring Boot and traditional Spring Framework:
- Spring Boot is built on top of Spring Framework, but aims to simplify configuration and development of Spring applications. The traditional Spring Framework is more focused on providing core infrastructure.
- Spring Boot uses opinionated defaults and auto-configuration to reduce the amount of manual configuration needed. With traditional Spring you have to configure everything manually.
- Spring Boot projects can be created with Spring Initializr which generate a project structure including build configuration, starter dependencies, and boilerplate code. This makes it easy to get started with Spring Boot.
- Spring Boot integrates various non-functional features like embedded servers, security, metrics, health checks etc. These have to be configured manually in traditional Spring Framework.
- Spring Boot provides CLI tool to run Groovy scripts for quick testing. Spring Framework does not have an equivalent.
---
Java builds convert source code to bytecode, package it with dependencies, test, document and deploy the code to create a runnable application. Build automation makes this process reliable and efficient.
---
An index in SQL is a database structure that helps speed up queries by organizing data in a way that allows the database engine to quickly locate records in a table without reading every row.
---

Here is a simple example of using Kafka with Spring Boot:

1. Add the Spring Kafka dependency:

```xml<dependency> <groupId>org.springframework.kafka</groupId> <artifactId>spring-kafka</artifactId></dependency>```

2. Configure Kafka properties in application.properties:

```spring.kafka.consumer.bootstrap-servers=localhost:9092spring.kafka.consumer.group-id=myGroupspring.kafka.consumer.auto-offset-reset=earliestspring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializerspring.kafka.consumer.value-deserializer=org.apache.kafka.common.serialization.StringDeserializer

spring.kafka.producer.bootstrap-servers=localhost:9092spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializerspring.kafka.producer.value-serializer=org.apache.kafka.common.serialization.StringSerializer```

3. Create a Kafka listener:

```java@KafkaListener(topics = "myTopic") public void listen(String message) { System.out.println("Received Messasge: " + message);}```

4. Create a Kafka template for publishing:

```java@Autowiredprivate KafkaTemplate<String, String> kafkaTemplate;

public void publish(String message) { kafkaTemplate.send("myTopic", message);}```

So in summary, Spring Boot auto-configures the Kafka consumer and producer with simple annotations and configuration properties. The KafkaTemplate provides a convenient way to send messages.
---

When a performance issue occurs in production but can't be reproduced in non-production environments, there are several approaches you can take to diagnose and resolve the issue:
1. Application Monitoring: Use application monitoring tools like Dynatrace, New Relic, AppDynamics, or even custom logging to capture performance metrics, errors, and issues in the production environment. These tools can help identify slow areas, memory leaks, or high-CPU utilization issues.
2. Compare Configurations: Ensure that your production and non-production environments are as similar as possible. Differences in configuration, hardware, network topology, or software versions could all lead to issues that only appear in the production environment.
3. Production Debugging: Some languages and platforms offer the ability to attach a debugger to a running production application. This should be done cautiously, as it can affect performance and stability, but it can sometimes be the best way to understand what's happening.
4. Analyze Logs: Analyze application and system logs to see if there are any error messages or warnings that could provide clues to the performance issues.
5. Profiling: Profiling tools can give you a detailed breakdown of where your application is spending its time. This could be database queries, network I/O, CPU-heavy computations, or something else entirely.
6. Load Testing: Try to simulate production load in the non-prod environment. Tools like Apache JMeter, Gatling, or Locust can help simulate heavy loads and stress test the system.
7. Database Performance: Sometimes performance issues can be due to database queries. Tools like slow query logs in MySQL, or SQL Server Profiler in Microsoft SQL Server, can help identify problematic queries.
8. Memory Leaks: Tools like Valgrind, Java VisualVM, or similar can help identify memory leaks that may not be apparent in less-loaded non-production environments.
9. Production Data: If possible and compliant with all privacy laws and regulations, testing with a copy of production data in your non-production environment can sometimes highlight issues that are data-specific.
10. A/B Testing: Gradually roll out changes to a small percentage of users and monitor the effect on performance. This can help isolate the cause of the issue.
---
In SQL, you can use foreign key constraints with the ON DELETE CASCADE option to automatically delete dependent entries in different tables. When a parent row is deleted, the child rows in other tables will be automatically deleted by the database management system.
Here's an example of how you could set this up:
```


```
CREATE TABLE parent ( id INT PRIMARY KEY, data VARCHAR(100) ); CREATE TABLE child ( id INT PRIMARY KEY, parent_id INT, data VARCHAR(100), FOREIGN KEY (parent_id) REFERENCES parent(id) ON DELETE CASCADE ); 
In the above example, if a row in the parent table is deleted, all rows in the child table that have the same parent_id will be automatically deleted.
Please note that not all database management systems support the ON DELETE CASCADE option. If your database does not support this, you will have to manually delete the child rows before deleting the parent row. This can be done in a transaction to ensure data consistency:
```


```
BEGIN TRANSACTION; DELETE FROM child WHERE parent_id = 1; DELETE FROM parent WHERE id = 1; COMMIT;
---
running code before spring boot starts.
you can use the ApplicationRunneror CommandLineRunnerinterfaces provided by Spring Boot. These interfaces allow you to define a callback method that will be executed once the application context has been fully initialized, but before the application starts handling requests.
---
The @PostConstruct method is invoked exactly once after the object has been instantiated and all its dependencies have been resolved and injected. It is called before the object is made available for use.
---
trace id for ms/how to track microservices logs across various microservices in sping boot? spring-cloud-sleuth 
Propagate Trace Context: As requests flow from one microservice to another, ensure that the trace ID is propagated in the request headers.
Each microservice should extract the trace ID from the headers and associate it with its own logging and tracing information.

Log with Trace ID: In each microservice, include the trace ID in your log statements. This allows you to filter logs by the trace ID and correlate logs across multiple services for a single request. You can use MDC (Mapped Diagnostic Context) or Sleuth's MDCScopeDecorator to automatically include the trace ID in log output.

Distributed Tracing Backend: Configure a distributed tracing backend such as Jaeger, Zipkin, or AWS X-Ray. These tools provide a centralized location to aggregate and visualize trace information across microservices.
---
In Java, hashcode collision can be resolved in several ways:
1. Overriding the equals() method: When two objects have the same hashcode, the equals() method is called to check if they are equal. Therefore, it is important to override the equals() method appropriately to ensure that two objects are considered equal if and only if they have the same values for their attributes.
2. Using a better hashing algorithm: Java provides a default hashing algorithm for objects, but this may not be suitable for all types of objects. It is possible to override the hashCode() method to provide a custom hashing algorithm that reduces the likelihood of collisions. The algorithm should distribute hash codes uniformly across the range of possible values.
3. Using a HashMap with a collision resolution strategy: Java's HashMap class has a collision resolution strategy that is used when two objects have the same hashcode. By default, it uses chaining, which means that multiple values with the same hashcode are stored in a linked list. However, this can lead to performance problems if the linked lists become too long. Java provides an alternative collision resolution strategy called open addressing, which avoids linked lists by searching for an empty slot in the hash table when a collision occurs.
4. Using a LinkedHashMap: Java provides a LinkedHashMap class that maintains the order of elements in the map based on the order in which they were added. This can be useful for debugging, but it also has the side effect of reducing the likelihood of collisions, since elements that are added close together in time are likely to have different hashcodes.
---
the main method is a special method in Java that cannot be overridden because it is the entry point of a program and changing its behavior would violate the language specification.
---
In Spring Boot, beans have a well-defined lifecycle that is managed by the Spring IoC (Inversion of Control) container. The lifecycle of a bean consists of several phases:
1. Bean instantiation: In this phase, the IoC container creates an instance of the bean by invoking its constructor.
2. Dependency injection: In this phase, the IoC container sets the values of the bean's dependencies, either by calling its setter methods or by directly injecting them into its fields.
3. Initialization: In this phase, the IoC container invokes the bean's @PostConstruct method, if it has one. This method is used to perform any initialization tasks that the bean requires.
4. Usage: In this phase, the bean is available for use by other parts of the application. It can be injected into other beans or accessed directly by the application code.
5. Destruction: In this phase, the IoC container invokes the bean's @PreDestroy method, if it has one. This method is used to perform any cleanup tasks that the bean requires, such as releasing resources or closing database connections.
---
The scope of a bean in Spring Boot refers to the lifecycle and visibility of the bean within the application. Spring Boot provides several bean scopes, including:
1. Singleton: A single instance of the bean is created and shared by all the objects that require it.
2. Prototype: A new instance of the bean is created each time it is requested.
3. Request: A new instance of the bean is created for every HTTP request.
4. Session: A new instance of the bean is created for every HTTP session.
5. Application: A new instance of the bean is created for every ServletContext.
6. WebSocket: A new instance of the bean is created for every WebSocket session.
---
auto-configuration is a feature that automatically configures the Spring application based on the dependencies present on the classpath.
---
Hexagonal architecture, also known as Ports and Adapters architecture or the Onion architecture, is a software architectural pattern that separates the core logic of an application from its external dependencies, such as databases, web frameworks, or other systems. It aims to make an application more modular, flexible, and easier to test and maintain.
---
Using sealed classes allows you to control the class hierarchy and limit the possibilities for extension. This can help make your code more secure and easier to maintain.
---
when you call the run() method on a thread, it simply executes the code within that method on the current thread, not on a separate thread. To start a new thread and execute a block of code concurrently, you need to call the start() method on a Thread object.
---
The get() method will block the current thread until the result is available. If the CompletableFuture is not completed yet, the calling thread will be blocked until the result is available. If the CompletableFuture is completed exceptionally, the get() method will throw an ExecutionException with the cause of the exception. By default, Spring Boot is synchronous.
The thenCompose() method is used to chain multiple CompletableFuture objects.
---
preventing a file from being read until a write operation is completed can be achieved using file locking, synchronization mechanisms, or file-renaming strategies.

blocking queue, synchronized buffer, and flag.
---
Abstract classes can also have final methods, just like regular classes. A final method is a method that cannot be overridden by a subclass
---
Covariant return types allow a subclass method to return a more specific type than the method it overrides in the superclass.
---
intermediate operations are only performed on the elements that are required by the terminal operation.
---
OWASP: Input validation, Authentication, and Authorization, Session management, Error handling, Secure communications (HTTPS), Logging and monitoring, and Vulnerability scanning.

custom serialization, Validate input, Limit the scope of deserialization

SQL security: Use parameterized queries, input validation, database privileges, Use prepared statements
---
To enable trace ID logs with Kibana in Spring Boot, you can use the Sleuth and Logstash libraries. we use the LogstashTcpSocketAppender to send our logs to Logstash
---
Spring security implementation: Create a Security Configuration class that extends WebSecurityConfigurerAdapter:
---
volatile keyword is used to ensure that changes to a variable are visible to all threads
---
When a method is marked as native, it means that the method definition is not provided in Java, but rather in another programming language that is specific to the platform on which the Java program is running.
---
If @ControllerAdvice is used, this message will be used to render an error page. If @RestControllerAdvice is used, this message will be returned as a response body in the requested data format.
---
LinkedHashMap maintains a doubly-linked list of entries in the order in which they were inserted into the map, and it can optionally order the entries based on their access order. It achieves this by implementing the Map interface and overriding some of the methods of the HashMap class to update the linked list.
---
- forEach consumes the stream or collection and performs some action on each element. 
- It doesn't return a new stream or modify the original collection, it just performs a side-effect for each element.  
- Stream is best suited for functional-style operations on data, while forEach is best suited for performing side-effects on each element in a collection.
---
The reason why you cannot override the main method in Java is because it is a static method, which means it is bound to the class rather than to an instance of the class. When you define a method with the same signature in a subclass, it is considered as a new method that is unrelated to the main method in the superclass. Therefore, it cannot serve as the entry point of the program.
---
states of circuit breaker:
1. Closed state: In the closed state, the circuit is closed, and the service is available. The client can send requests to the service as usual.
2. Open state: In the open state, the circuit is open, and the service is unavailable. The client cannot send requests to the service, and the circuit breaker immediately returns an error or a default value.
3. Half-open state: In the half-open state, the circuit is partially open, and the circuit breaker allows a limited number of requests to pass through to the service. If these requests succeed, the circuit breaker returns to the closed state. If they fail, the circuit breaker returns to the open state.
---
Hashtable vs hashmap
- HashMap is non-synchronized and allows null keys and values. It is not thread-safe and can't be shared between multiple threads without external synchronization.
- Hashtable is synchronized and is thread-safe. It doesn't allow null keys or values. All methods of Hashtable are synchronized.
- HashMap extends the AbstractMap class. Hashtable extends Dictionary class.
---
differences between Spring Boot and traditional Spring Framework:
- Spring Boot is built on top of Spring Framework, but aims to simplify configuration and development of Spring applications. The traditional Spring Framework is more focused on providing core infrastructure.
- Spring Boot uses opinionated defaults and auto-configuration to reduce the amount of manual configuration needed. With traditional Spring you have to configure everything manually.
- Spring Boot projects can be created with Spring Initializr which generate a project structure including build configuration, starter dependencies, and boilerplate code. This makes it easy to get started with Spring Boot.
- Spring Boot integrates various non-functional features like embedded servers, security, metrics, health checks etc. These have to be configured manually in traditional Spring Framework.
- Spring Boot provides CLI tool to run Groovy scripts for quick testing. Spring Framework does not have an equivalent.
---
Java builds convert source code to bytecode, package it with dependencies, test, document and deploy the code to create a runnable application. Build automation makes this process reliable and efficient.
---
An index in SQL is a database structure that helps speed up queries by organizing data in a way that allows the database engine to quickly locate records in a table without reading every row.

In Java, you should use an abstract class when:

1. You want to share code among several related classes. An abstract class can provide a default implementation of an interface or it can declare abstract methods that subclasses must implement.
2. You want to declare b, which is not possible in an interface.

You should use an interface when:

1. You want to specify a contract that can be implemented by multiple classes, independently of their inheritance hierarchy.
2. You want to define a type that can be implemented by objects of several classes, regardless of their implementation details.
3. You want to support multiple inheritance of type. A class can implement multiple interfaces, but it can only extend a single class.
---
an abstract class can have any access modifier - public, protected, package-private, or private. If no access modifier is specified, the default access level is package-private.
we can have constructors and static methods in abstract classes in Java
---

what happens during java build

During a Java build, the following steps occur:

1. Compilation: The Java source code is compiled into bytecode using the javac compiler.
2. Packaging: The bytecode and any associated resources are packaged into a Java Archive (JAR) file, which is a file format that allows multiple files to be packaged and compressed into a single archive file.
3. Dependency Resolution: Any required dependencies are resolved and included in the build process.
4. Testing: Unit tests are run to ensure the code is working as expected.
5. Deployment: The JAR file is deployed to a runtime environment such as a Java Virtual Machine (JVM) where it can be executed.

These steps are typically performed by a build tool such as Apache Maven or Gradle, which automates the build process and makes it easier to manage dependencies, test and deploy code.

---
we can Run code upon startup in  spring boot 
1. using CommandLineRunner ->create a @Component class that implements CommandLineRunner and override the run() method 
2. using application event listener-> implementing ApplicationListener interface in a component class
---
Internal working of spring boot app
1. Bootstrapping: The process of starting a Spring Boot application starts with the creation of an instance of the SpringApplication class. This instance is used to configure and launch the application.
2. Auto-configuration: Spring Boot uses auto-configuration to automatically configure various components of the application, such as databases, security, and more. It does this by examining the classpath and the environment variables and making decisions about which components to configure based on that information.
3. Application components: The application components, such as controllers, services, and repositories, are defined and wired together using annotations and Java configuration classes.
4. Tomcat server: Spring Boot uses an embedded Tomcat server to run the application. The Tomcat server is started automatically when the application starts.
5. Application context: The application context is the central part of the Spring framework and is responsible for managing the components of the application. It is created by the SpringApplication class and is used to access the components of the application.
6. Request handling: When a request is made to the application, the request is passed to the appropriate controller, which performs the necessary actions and returns a response. The response is then sent back to the client.
7. Shutdown: The Spring Boot application can be stopped by using the SpringApplication.exit() method. When the application is stopped, the application context is destroyed and the resources it uses are released.
---

openfeign dependency for feign client

@enablefeignclient in client app
---
HashMap itself doesn't maintain insertion order - but LinkedHashMap does, so use that instead.
---

map() vs flatmap()

Stream.flatMap, as it can be guessed by its name, is the combination of a map and a flat operation. That means that you first apply a function to your elements, and then flatten it. Stream.map only applies a function to the stream without flattening the stream.
To understand what flattening a stream consists in, consider a structure like [ [1,2,3],[4,5,6],[7,8,9] ] which has "two levels". Flattening this means transforming it in a "one level" structure : [ 1,2,3,4,5,6,7,8,9 ].
---

@ExceptionHandler

@ExceptionHandler works at the Controller level and it is only active for that particular Controller, not globally for the entire application.

HandlerExceptionResolver

This will resolve any exceptions thrown by the application. It is used to resolve standard Spring exceptions to their corresponding HTTP Status Codes. It does not have control over the body of the response, which means it does not set anything to the body of the Response. It does map the status code on the response but the body is null.

@ControllerAdvice

@ControllerAdvice is used for global error handling in the Spring MVC application. It also has full control over the body of the response and the status code.

The @ControllerAdvice annotation is specialization of @Component annotation so that it is auto-detected via classpath scanning.
---
how does abstraction differ from encapsulation?
While abstraction focuses on an object’s behaviour, encapsulation focuses on the implementation of an object’s behaviour. Abstraction hides unwanted information whereas encapsulation hides the data into a single unit, protecting the information from outside influence.
---
print the content of a multidimensional array 
Arrays.deepToString(obj)
---
Java Reflection enables us to inspect classes, interfaces, fields, and methods at runtime. We can do it without knowing the names of the classes, and methods, at compile time.
For example, all objects in Java have the method getClass(), which lets you determine the object's class even if you don't know it at compile time
---
Fail-Fast :
- Iterators immediately throw ConcurrentModificationException if structural modification(add, update, delete) happens.
- Example: ArrayList, HashMap, TreeSet
Fail-Safe:
- Here Iterators do not throw any exception because they operate on the clone of the collection, not the original one. So, they are fail-safe iterators.
- Example : CopyOnWriteArrayList, ConcurrentHashMap
---

JavaBeans:

At a basic level, JavaBeans are simply Java classes which adhere to certain coding conventions. Specifically, classes that
- have public default (no argument) constructors
- allow access to their properties using accessor (getter and setter) methods
- implement java.io.Serializable

Spring Beans:

A Spring bean is basically an object managed by Spring. More specifically, it is an object that is instantiated, configured and otherwise managed by a Spring Framework container. Spring beans are defined in Spring configuration files (or, more recently, with annotations), instantiated by Spring containers, and then injected into applications.

Note that Spring beans need not always be JavaBeans. but every java bean can be a spring bean.


Java Bean VS Spring Bean

1. Spring bean is managed by Spring IOC, Java Bean is not.
2. Java Bean is always serializable, Spring Bean doesn’t need to.
3. Java Bean must have a default no-arg constructor, Spring Bean doesn’t need to.
4. A Java object can be a JavaBean, a POJO and a Spring bean all at the same time.
---
cookie is a small piece of data that the Web server sends to the browser. The browser stores the cookies for each Web server in a local file. Cookies provide a reliable mechanism for websites to remember stateful information or to record the browsing activity of users.

The differences between the session and a cookie are:

- The session should work irrespective of the settings on the client’s browser. The client can choose to disable cookies. However, the sessions still work because the client has no ability to disable them on the server-side.
- The session and cookies are also different in the amount of information they can store. The HTTP session can store any Java object, while a cookie can only store String objects.
---
- Double brace initialization creates an anonymous class derived from the specified class (the outerbraces), and provides an initialiser block within that class (the innerbraces). e.g.
```
new ArrayList<Integer>() {{
  add(1);
  add(2);
}};
```

---
marshalling: converting java objects to xml
unmarshalling: converting xml to java objects
---
CountDownLatch maintains a count of tasks whereas CyclicBarrier maintains a count of threads.
---
What are the best coding practices that you learned in Java?

Answer. If you are learning and working on a programming language for a couple of years, you must surely know a lot of its best practices. The interviewer just checks by asking a couple of them, that you know your trade well. Some of the best coding practices in Java can be:

- Always try to give a name to the thread, this will immensely help in debugging.
- Prefer to use the StringBuilder class for concatenating strings.
- Always specify the size of the Collection. This will save a lot of time spent on resizing the size of the Collection.
- Always declare the variables as private and final unless you have a good reason.
- Always code on interfaces instead of implementation.
- Always provide dependency on the method instead they get it by themselves. This will make the coding unit testable.
---
Hexagonal architecture, also known as Ports and Adapters architecture or the Onion architecture, is a software architectural pattern that separates the core logic of an application from its external dependencies, such as databases, web frameworks, or other systems. It aims to make an application more modular, flexible, and easier to test and maintain.
---
The getInstance() method uses the Reflection API of Java to lookup the class at runtime. But, when we use the new operator, Java Virtual Machine will know beforehand that we need to use that class and therefore it is more efficient.
---
 Why is the Char array preferred over String for storing passwords?
 As we know that String is immutable in Java and stored in the String pool. Once we create a String, it stays in the String pool until it is garbage collected. So, even though we are done with the password it is still available in memory for a longer duration. Therefore, there is no way to avoid it.

It is clearly a security risk because anyone having access to a memory dump can find the password as clear text. Therefore, it is preferred to store the password using the char array rather than String in Java.
---
What is the difference between System.out, System.err and System.in?
Both System.out and System.err represent the Monitor by default. Hence they are used to send or write data or results to the monitor. System.out displays normal messages and results on the monitor whereas System.err displays the error messages. System.in represents an InputStream object, which by default represents a standard input device, that is, the keyboard.
---
What is a metaspace?
The Permanent Generation or PermGen space has been completely removed and replaced by a new space called Metaspace. The result of removing the PermGen removal is that the PermSize and MaxPermSize JVM arguments are ignored and we will never get a java.lang.OutOfMemoryError: PermGen error.
---
Does the garbage collector of Java guarantee that a program will not run out of memory?

There is no guarantee that using a Garbage collector will ensure that the program will not run out of memory. As garbage collection is an automatic process, programmers need not initiate the garbage collection process explicitly in the program. A Garbage collector can also choose to reject the request and therefore, there is no guarantee that these calls will surely do the garbage collection. Generally, JVM takes this decision based on the availability of space in heap memory.
---
1. Stack Segment: The stack segment contains the local variables and reference variables. Reference variables hold the address of an object in the heap segment.
2. Heap Segment: The heap segment contains all the objects that are created during runtime. It stores objects and their attributes (instance variables).
3. Code Segment: The code segment stores the actual compiled Java bytecodes when loaded.
---
Does not overriding hashCode() method have any impact on performance?
A poor hashCode() function will result in frequent collision in HashMap. This will eventually increase the time for adding an object into HashMap. But, from Java 8 onwards, the collision will not impact performance as much as it does in earlier versions. This is because after crossing a threshold value, the linked list gets replaced by a binary tree, which will give us O(logN) performance in the worst case as compared to O(n) of a linked list.
---
Dynamic Method Dispatch is also called runtime polymorphism. It is a method in which the overridden method is resolved during the runtime, not during the compilation of the program. More specifically, the concerned method is called through a reference variable of a superclass.
---
difference between sleep() and wait()
sleep() does not release the lock while wait method release the lock. sleep() method is present in java.lang.Thread class while wait() method  is present in java.lang.Object class.
---
 What will happen if we put a key object in a HashMap which is already there?
If you put the same key again then it will replace the old mapping because HashMap doesn't allow duplicate keys. 
---
Factory design pattern is the most commonly used pattern in Java. They belong to Creational Patterns because it provides means of creating an object of different instances. Here, the logic of object creation is not exposed to the client. It is implemented by using a standard interface.
---

Is it necessary to declare all immutable objects as final?

This is not necessary. The functionality of achieving immutability can also be achieved by defining the members of a class as private and not providing any setter methods to modify/update the values. Any references to the members should not be leaked and the only source of initializing the members should be by using the parameterized constructor.

We should note that the variables declared as final only takes care of not re-assigning the variable to a different value. The individual properties of an object can still be changed.
---
IntegerCache (-128 to 127 are stored as cache)
Integer.java class in Java has a private inner class called IntegerCache.java which helps to cache the Integer objects ranging from -128 to 127. All the numbers lying between this range are cached internally by the Integer class.
---
Creating string using the new operator ensures that the String is created in the heap alone and not into the string pool. Whereas, creating string using literal ensures that the string is created in the string pool. String pool exists as part of the perm area in the heap. This ensures that the multiple Strings created using literal having same values are pointed to one object and prevents duplicate objects with the same value from being created.
The Heap Space contains all objects are created, but Stack contains any reference to those objects.
---

Is it possible to override a method to throw RuntimeException from throwing NullPointerException in the parent class?

Yes, this is possible. But it is not possible if the parent class has a checked Exception. This is due to the below rule of method overriding in cases of checked exceptions:

The method that wants to override a parent class method can not throw a higher Exception than the overridden method.

This means that if the overridden method is throwing IOException, then the overriding child class method can only throw IOException or its sub-classes. This overriding method can not throw a higher Exception than the original or overridden method
---
System.out.println(0.1*3 == 0.3); -> Prints false
System.out.println(0.1*2 == 0.2); -> Prints true

This expectation mismatch is due to the error that occurs while rounding float-point numbers and the fact that in Java, only the floating-point numbers that are powers of 2 are represented accurately by the binary representation. The rest of the numbers should be rounded to accommodate the limited bits as required.
---
How would you help a colleague with lesser Java experience who has trouble in serializing a class?
I would first check if the colleague has implemented the java.io.serializable interface. If this is done, I will check if they are trying to serialize only non-static members since the static members cannot be serialized. I would also check if the fields that are not serialized are defined as transient accidentally
---
What is the result of the below code and Why?
```
public class TestClass {
public static void main(String[] args) {
    someMethod(null);
}
public static void someMethod(Object o) {
System.out.println("Object method Invoked");
}
public static void someMethod(String s) {
System.out.println("String method Invoked");
}
}
```
The output of this code is “String method Invoked”. We know that null is a value that can be assigned to any kind of object reference type in Java. null is not an object in Java.  (It is a reference type and its value does not refer to any object and so there is no representation of null in memory). Secondly, the Java compiler chooses the method with the most specific parameters in method overloading. this means that since the String class is more specific, the method with String input parameter is called.
---

How is the classpath variable different from the path variables?

The classpath variables are specific to the Java executables and are used for locating the class files. Whereas, the path variable is a variable present in the operating system and is used for locating the system executables
---
hashCode() and equals() contract
If these methods are not implemented properly, then there are chances where two keys would produce the same output for these methods resulting in inaccuracy and a wrong key’s value might get updated at the time of updation. Hence, it is very much important to implement the hashCode and the equals method correctly. This can be done properly if we follow the hashCode-equals contract. The contract states that

If two objects are equal, then the hashCode method should produce the same result for both objects. 
To ensure this, we have to override the hashCode() method whenever we override the equals() method
---
What do you understand by the ... in the below method parameters?
```
public void someMethod(String... info){
  // method body
}
```
The 3 dots feature was started in Java 5 and the feature is known as varargs (variable arguments). This simply means that the method can receive one or more/multiple String arguments
---
How is Collection different from Collections in Java?
Collection is an interface whereas Collections is a java utility class containing only static methods that can operate on collections like ArrayList, Set, Queue, etc., and both belong to Collection Framework and are present in the java.util package.

---

Volatile Variable
Transient Variable
The volatile keyword against the variable indicates that the content of the variable is stored in the main memory and every read of the variable should be done from the main memory and not the CPU cache and every write should be written to the main memory and not just to the CPU cache.
Transient is used when we do not want the variable to be serialized.
Volatile ensures that the JVM does not re-order the variables and ensures that the synchronization issues are avoided.
Transient provides flexibility and control over the attributes of objects from being serialized.
Volatile variables do not have any default values.
Transient variables are initialized with default value corresponding to the data type at the time of deserialization.
Volatile variables can be used along with the static keyword.
Transient variables cant be used along with static keywords because the static variables are class-level variables and not related to the individual instances. This matters during serialization.
Volatile variables can be used along with the final keyword.
It is not recommended to use final with transient variables as it would cause problems for re-initializing the variables once the values are populated by default at the time of deserialization.

---
Why String is immutable?
- Security: parameters are typically represented as String in network connections, database connection urls, usernames/passwords etc. If it were mutable, these parameters could be easily changed.
- Synchronization and concurrency: making String immutable automatically makes them thread safe thereby solving the synchronization issues.
- Caching: when compiler optimizes your String objects, it sees that if two objects have same value (a="test", and b="test") and thus you need only one string object (for both a and b, these two will point to the same object).
- Class loading: String is used as arguments for class loading. If mutable, it could result in wrong class being loaded (because mutable objects change their state).
That being said, immutability of String only means you cannot change it using its public API. You can in fact bypass the normal API using reflection. See the answer here.
In your example, if String was mutable, then consider the following example:
```
  String a="stack";
  System.out.println(a);//prints stack
  a.setValue("overflow");
  System.out.println(a);//if mutable it would print overflow
```

---

Abstraction
Encapsulation
Abstraction is the process or method of gaining information.
While encapsulation is the process or method to contain the information.
In abstraction, problems are solved at the design or interface level.
While in encapsulation, problems are solved at the implementation level.
Abstraction is the method of hiding unwanted information.
Whereas encapsulation is a method to hide the data in a single entity or unit along with a method to protect information from outside.
We can implement abstraction using abstract classes and interfaces.
Whereas encapsulation can be implemented using by access modifier i.e. private, protected, and public.
In abstraction, implementation complexities are hidden using abstract classes and interfaces.
While in encapsulation, the data is hidden using methods of getters and setters.
The objects that help to perform abstraction are encapsulated.
Whereas the objects that result in encapsulation need not be abstracted.

---


equals() 
==
This is a method defined in the Object class. 
It is a binary operator in Java.
This method is used for checking the equality of contents between two objects as per the specified business logic.
This operator is used for comparing addresses (or references), i.e checks if both the objects are pointing to the same memory location.

---
- JIT stands for Just-In-Time and it is used for improving the performance during run time. It does the task of compiling parts of byte code having similar functionality at the same time thereby reducing the amount of compilation time for the code to run.
---
feature of the new Date and Time API in Java 8?
- Immutable classes and Thread-safe 
- Timezone support
- Fluent methods for object creation and arithmetic
- Addresses I18N issue for earlier APIs
- Influenced by popular joda-time package
---
A stream is an abstraction to express data processing queries in a declarative way. 
---

ClassNotFoundException is an exception that occurs when you try to load a class at run time using Class.forName() or loadClass() methods and mentioned classes are not found in the classpath.

NoClassDefFoundError is an error that occurs when a particular class is present at compile-time but was missing at run time.
---
what is Method Reference?
Method reference is a compact way of referring to a method of functional interface. It is used to refer to a method without invoking it. :: (double colon) is used for describing the method reference. The syntax is class::methodName
---
How does a lambda expression relate to a functional interface?
Lambda expression is a type of function without a name. It may or may not have results and parameters. It is known as an anonymous function as it does not have type information by itself. It is executed on-demand. It is beneficial in iterating, filtering, and extracting data from a collection.
---
pre-defined functional interfaces from previous Java versions are Runnable, Callable, Comparator, and Comparable. While Java 8 introduces functional interfaces like Supplier, Consumer, Predicate
---
In terms of web apps, very crudely speaking, authentication is when you check login credentials to see if you recognize a user as logged in, and authorization is when you look up in your access control whether you allow the user to view, edit, delete or create content.

Authentication is the process of ascertaining that somebody really is whom they claim to be.
Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorized to read.
---

newly added features in Java 8?


Feature Name
Description
Lambda expression
A function that can be shared or referred to as an object.
Functional Interfaces
Single abstract method interface.
Method References
Uses function as a parameter to invoke a method.
Default method
It provides an implementation of methods within interfaces enabling 'Interface evolution' facilities.
Stream API
Abstract layer that provides pipeline processing of the data.
Date Time API
New improved joda-time inspired APIs to overcome the drawbacks in previous versions
Optional
Wrapper class to check the null values and helps in further processing based on the value.
Nashorn, JavaScript Engine
An improvised version of JavaScript Engine that enables JavaScript executions in Java, to replace Rhino.

---
The version which declares throws Exception will require the calling code to handle the exception, while the version which explicitly handles it will not.
---
valueOf(String) returns a new Integer() object whereas parseInt(String) returns a primitive int.
---
Once return is executed, the rest of the code won't be executed
---
A functional interface cannot extend another interface with abstract methods as it will void the rule of one abstract method per functional interface
---
Lazy Evaluation in Streams
In Java 8 streams the intermediate operations are not evaluated until a terminal operation is invoked
---
In the case of a serial stream, the main thread is doing all the work. Meanwhile, in the case of a parallel stream, two threads are spawned simultaneously, and the stream internally uses ForkJoinPool to create and manage threads. Parallel streams create a ForkJoinPool instance via the static ForkJoinPool.commonPool() method.
The parallel stream makes use of all available CPU cores and processes the tasks in parallel. If the number of tasks exceeds the number of cores, then the remaining tasks wait for the currently running tasks to complete.

use parallel stream only when:
1. We have a large amount of data to process.
2. We already have a performance problem in the first place.
3. All the shared resources between threads need to be synchronized properly otherwise it might produce unexpected results.
4. Use the NQ formula to decide if you want to use parallelism.
```
NQ Model:

N x Q > 10000

where,
N = number of data items
Q = amount of work per item
```

---

Collectors.summingInt

This method returns a Collector that produces the sum of an integer-valued function applied to the input elements.

---

counting()

This function returns a Collector that counts the number of the input elements.
---
Matching Operations in Stream.
	1) anyMatch()
	2) allMatch()
	3) noneMatch()
---
Slicing Operations in Stream
The slicing operations are intermediate operations, and, as the name implies, they are used to slice a stream.
1. distinct()
2. limit()
3. skip()

---

According to Oracle, “Java 8 Optional works as a container type for the value which is probably absent or null. Java Optional is a final class present in the java.util package.”

The benefit of Optional<T> is not that we are saved from applying a null check. The benefit is that Optional<T> class provides us lots of utility methods that we can apply to our wrapped objects.
If while creating the Optional, you are not sure if the value is null or not null, then use the ofNullable() method.
---
Method references are shortened versions of lambda expressions that call a specific method.

The syntax to use static methods as method reference is ClassName::MethodName.
The syntax to use the instance method as a method reference is ReferenceVariable::MethodName
constructor reference is ClassName::new.
---

Reflection

Reflection is a technique used in java to look at information about the class at runtime.
Java Reflection is an API used to examine or modify the behaviour of methods, classes, and interfaces at runtime. Using the Reflection API, we can create multiple objects in the Singleton class.


Prevent Singleton Pattern From Reflection


There are many ways to prevent Singleton pattern from Reflection API, but one of the best solutions is to throw a run-time exception in the constructor if the instance already exists. In this, we can not able to create a second instance.

Cloning


Using the "clone" method, we can create a copy of the original object; it's the same thing if we applied clone in the singleton pattern. It will create two instances: one original and another one cloned object. In this case, we will break the Singleton principle.

Deep cloning is the process of creating a new object with the same state as an existing object, including all nested objects and their states

 When you clone an object, you create a new object with the same state as the original object, but it is a different object with a different identity

Shallow cloning creates a new object with the same reference as the original object, while deep cloning creates a new object with a new reference and all the data from the original object.

used in caching/cache implementation
Prevent Singleton Pattern From Cloning

In the above code, it breaks the Singleton principle, i. e created two instances. To overcome the above issue, we need to implement/override the ​clone() method and throw an exception ​CloneNotSupportedException from the ​clone method. If anyone tries to create a ​clone object of ​Singleton, it will throw an exception, as shown in the below code.


1
    ​@Override
2
    ​protected ​Object ​clone() throws ​CloneNotSupportedException  {
3
        ​throw ​new ​CloneNotSupportedException();
4
    }





---
Synchronized HashMap：
1. Each method is synchronized using an object level lock. So the get and put methods on synchMap acquire a lock.
2. Locking the entire collection is a performance overhead. While one thread holds on to the lock, no other thread can use the collection.
ConcurrentHashMap was introduced in JDK 5.
1. There is no locking at the object level,The locking is at a much finer granularity. For a ConcurrentHashMap, the locks may be at a hashmap bucket level.
2. The effect of lower level locking is that you can have concurrent readers and writers which is not possible for synchronized collections. This leads to much more scalability.
3. ConcurrentHashMap does not throw a ConcurrentModificationException if one thread tries to modify it while another is iterating over it.
---
1. select max occurance of an element
```
SELECT itemCode , count(*) as MaxCount
FROM OrderProcessing
GROUP BY itemCode
HAVING count(*) =
-- count of most wanted item
(select top 1 count(*)
from OrderProcessing
group by itemCode
order by count(*) desc)
```

---
Callable is similar to Runnable but it returns a result and may throw an exception. Use them when you expect your asynchronous tasks to return result.
The returned result of asynchronous computation is represented by a Future.

Thread vs callable:


Comparison:

1. Return Value:
	- Thread/Runnable: Cannot return a value after completion.
	- Callable: Can return a value after execution.
2. Exception Handling:
	- Thread/Runnable: Can only throw unchecked exceptions (RuntimeException).
	- Callable: Can throw both checked and unchecked exceptions.
3. Usage:
	- Thread/Runnable: Used for fire-and-forget tasks that don't need to return a result.
	- Callable: Used when you need to execute tasks concurrently and retrieve results upon their completion. Commonly used with the ExecutorService and Future.
4. Execution:
	- Thread: Starts with the start() method.
	- Callable: Executed using an ExecutorService and the submit() method.

---
In order to create an immutable class, you should follow the below steps:

1. Make your class final, so that no other classes can extend it.
2. Make all your fields final, so that they’re initialized only once inside the constructor and never modified afterward.
3. Don’t expose setter methods.
4. When exposing methods which modify the state of the class, you must always return a new instance of the class.
5. If the class holds a mutable object:
	- Inside the constructor, make sure to use a clone copy of the passed argument and never set your mutable field to the real instance passed through constructor, this is to prevent the clients who pass the object from modifying it afterwards.
	- Make sure to always return a clone copy of the field and never return the real object instance.
---

The API guarantees a stablesorting which Quicksortdoesn’t offer. However, when sorting primitive valuesby their natural order you won’t notice a difference as primitive values have no identity. Therefore,Quicksortcan used for primitive arrays and will be used when it is considered more efficient¹.
For objects you may notice, when objects with different identity which are deemed equal according to their equalsimplementation or the provided Comparatorchange their order. Therefore, Quicksortis not an option. So a variant of MergeSortis used, the current Java versions use TimSort. This applies to both, Arrays.sortand Collections.sort, though with Java 8, the Listitself may override the sort algorithms.

---
Differences that can help you understand the advantages of persist and save methods:
- First difference between save and persist is their return type. The return type of persist method is void while return type of save
  method is Serializable object.
- The persist() method doesn’t guarantee that the identifier value will be assigned to the persistent state immediately, the assignment might happen at flush time.
- The persist() method will not execute an insert query if it is called outside of transaction boundaries. While, the save() method returns an identifier so that an insert query is executed immediately to get the identifier, no matter if it are inside or outside of a transaction.
- The persist method is called outside of transaction boundaries, it is useful in long-running conversations with an extended Session context. On the other hand save method is not good in a long-running conversation with an extended Session context.
- persist is supported by JPA, while save is only supported by Hibernate.
---
If a JUnit test method is declared as "private", it compiles successfully. But the execution will fail. This is because JUnit requires that all test methods must be declared as "public".
---

- String literals are automatically interned by the JVM. For instance, when you declare a string like String s = "hello";, it's already in the String Pool.
- However, if you create a string using the new keyword (e.g., String s = new String("hello");), it's not automatically interned. If you then call intern() on s, it will either return the reference from the pool (if "hello" is already in the pool) or add this string to the pool and return its reference.
STring intern helps in reducing the number of duplicate String objects in memory by maximizing the usage of the String Pool. 


String s2 = new String("hello"); String s3 = s2.intern();

The intern() method can be useful when you're reading in large amounts of string data that may have many duplicates, and you want to minimize memory usage.
---
An Armstrong number is a positive n-digit number that is equal to the sum of the nth powers of their digits.
EX : 1. 153 is an armstrong number.(1^3) + (5^3) + (3^3)= 153.

2. 407

(4^3) + (0^3) + (7^3) = 407.

3. 0

4. 153

5. 370

---

Questions: Differentiate between this() and super()


Answer:

this()
super()
Represents the current instance of the class.
Represents the current instance of the parent/base class.
It is used to call the default constructor of the same class
It is used to call the default constructor of the parent/base class.
Accesses method of the current class
Accesses method of the base class
Points current class instance
Points to the superclass instance.
Must be the first line of the block
It must be the first line of the block.

---

Question: Explain the concept of boxing, unboxing, autoboxing, and auto unboxing.

The process of creating an Integer from an int is called boxing. The reverse is called unboxing. Because having to box primitives every time you want to use them as Object is inconvenient, there are cases where the language does this automatically - that's called autoboxing.
---
Serialization is the process by which Java objects are converted into the byte stream.
---
The volatile keyword does not cache the value of the variable and always read the variable from the main memory.
1. static volatile int var =5;  
- It can be used as an alternative way of achieving synchronization in Java.
- All reader threads will see the updated value of the volatile variable after completing the write operation.
---
The transient keyword in Java is used to avoid serialization.
---
1. DDL – Data Definition Language
2. DML – Data Manipulation Language
3. TCL – Transaction Control Language.
4. DQL – Data Query Language
5. DCL – Data Control Language


---

- Checked Exceptions – Classes that extend Throwable class, except Runtime exception and Error, are called checked exceptions. Such exceptions are checked by the compiler during the compile time. These types of exceptions must either have appropriate try/catch blocks or be declared using the throws keyword. ClassNotFoundException is a checked exception.
- Unchecked Exceptions – Such exceptions aren't checked by the compiler during the compile time. As such, the compiler doesn't necessitate handling unchecked exceptions. Arithmetic Exception and ArrayIndexOutOfBounds Exception are unchecked exceptions.

runtime exception can be caught, like any other exception.
The throws keyword is followed by a class, whereas the throw keyword is followed by an instance
---
HashMap works on the principle of hashing
put(key, value): HashMap stores both key and value object as Map.Entry. Hashmap applies hashcode(key) to get the bucket. if there is collision ,HashMap uses LinkedList to store object.
get(key): HashMap uses Key Object's hashcode to find out bucket location and then call keys.equals() method to identify correct node in LinkedList and return associated value object for that key in Java HashMap.

When we try to insert any key in HashMap first it checks whether any other object present with same hashcode and if yes then it checks for the equals() method. If two objects are same then HashMap will not add that key instead it will replace the old value by new one.
---

In a HashMap the key is an object, that contains hashCode() and equals(Object) methods.
When you insert a new entry into the Map, it checks whether the hashCode is already known. Then, it will iterate through all objects with this hashcode, and test their equality with .equals(). If an equal object is found, the new value replaces the old one. If not, it will create a new entry in the map.
Usually, talking about maps, you use collision when two objects have the same hashCode but they are different. They are internally stored in a list.
---
Avoid raw types.
Raw types refer to using a generic type without specifying a type parameter.
For example:
A list is a raw type, while List<String> is a parameterized type.
---
A disadvantage of using the thread class is that it becomes impossible to extend any other classes.
Nonetheless, it is possible to overload the run() method in the class
---

An abstract class in Java is a class that can't be instantiated

---

if there is a collision, HashMap uses LinkedList to store objects

https://javarevisited.blogspot.com/2011/02/how-hashmap-works-in-java.html.
---

Question: How does Java enable high performance?

Answer: In the Just-in-Time compilation, the required code is executed at run time. Typically, it involves translating bytecode into machine code and then executing it directly. For enabling high performance, Java can make use of the Just-In-Time compilation. The JIT compiler is enabled by default in Java and gets activated as soon as a method is called. It then compiles the bytecode of the Java method into native machine code. After that, the JVM calls the compiled code directly instead of interpreting it. This grants a performance boost.
---

Question: Explain different types of typecasting?

Answer:
Different types of typecasting are:

- Implicit: Storing values from a smaller data type to a larger data type. It is automatically done by the compiler.

- Explicit: Storing the value of a larger data type into a smaller data type. This results in information loss:
---
Superclass is the existing class from which the new classes are derived while Subclass is the new class that inherits the properties and methods of the Superclass.
---

Questions: Differentiate between break and continue

Answer:

Break
Continue
Used with both loop and switch statement
Used with only loop statements.
It terminates the loop or switch block.
It does not terminate but skips to the next iteration.

---
Static methods can not be overridden.
---
Constructors can be overloaded.
---



The problem with Hashtable is that synchronizing each method call (which is a not-insignificant operation) is usually the wrong thing. Either you don't need synchronization at all or, from the point of view of the application logic, you need to synchronize over transactions that span multiple method calls. Since it was impossible to simply remove the method-level synchronization from Hashtable without breaking existing code, the Collections framework authors needed to come up with a new class; hence HashMap. It's also a better name since it becomes clear that it's a kind of Map.

---
Typecasting is a way of converting data from one data type to another data type. This process of data conversion is also known as type conversion or type coercion. In Java, we can cast both reference and primitive data types. By using casting, data can not be changed but only the data type is changed
---
Highest Salary
SELECT * FROM employee
WHERE salary= (SELECT DISTINCT(salary)
FROM employee ORDER BY salary DESC LIMIT n-1,1);
---
We can declare a method as final, once you declare a method final it cannot be overridden. 
---
Memory management Unlike some of its competitors (C and C++), Java provides automatic
memory management.
---
Why do we need Method Injection?
Method Injection should be used is when a Singleton bean has a dependency on the Prototype bean.

We know that the Spring beans can be created with a singleton or prototype scope.

Singleton: Instantiate only one object
Prototype: Instantiate a new object every time.
Spring container resolves the dependencies at instantiation time which means if any singleton bean has a dependency of any prototype bean, then a new object of prototype bean will be instantiated and injected into singleton bean at the time of instantiation of Singleton bean.

With this, the same prototype bean will always be supplied from singleton bean.

Confused? Consider a Singleton Bean “A” which has a dependency of non-singleton (prototype) bean “B”.The container will create only one instance of bean “A” thus will have only one opportunity to inject the prototype bean “B” in it and every time you make a call to get bean B from bean A, always the same bean will be returned.

link: http://www.wideskills.com/spring/method-injection-in-spring#:~:text=Why%20do%20we,will%20be%20returned.
---
LOCS => overLOading - Compile time - Static binding
---
A virtual function or virtual method in an OOP language is a function or method used to override the behaviour of the function in an inherited class with the same signature to achieve polymorphism.
---
There are 8 types of primitive data types- int, char, boolean, byte, long, float, short, double
---
Range of byte data in java is -128 to 127. But the byte data type in java is cyclic in nature
---
When an array is passed to a method, a reference of the array is received by the method
---
The object created with new keyword during run-time
---
String class has 13 constructors
---
System class is defined in java.lang package
---
>>>> is Zero fill right shift
---
Java Debugger (JDB) is used to find and fix bugs in the java program.
---
Keywords are specially reserved words that can not be used for naming a user-defined variable, for example: class, int, for, etc
---

Explicit import : Classes are available inside the package, Explicit means direct or when we give the proper path of the java class it will call as explicit import.

e.g

import java.util.ArrayList;
Explicit import

Implicit import *: Implicit means indirect, When we load all the classes of the package in our java code by using (*) it will call as implicit import.
---
this helps to distinguish between local variables and variables passed in the method as parameters.
---
Continue and break are jump statements, and for is a looping statement. if is select statement
---
i.byteValue() method returns the value of wrapper i as a byte value. i is 257, range of byte is 256 therefore i value exceeds byte range by 1 hence 1 is returned and stored in x
---
toExternalForm() is used to know the full URL of an URL object
---
All arrays in Java are considered objects. 
The type int[] is a subclass of Object that has all the methods from Object. Although syntactically it looks different from other object types (e.g. the name has a primitive type listed in it and there's no class definition), the Java language does consider them objects
---
Difference between system.gc() and runtime.gc()
Both are the same. System.gc() is effectively equivalent to Runtime.gc(). System.gc()internally calls Runtime.gc()
The only difference is System.gc() is a class method where as Runtime.gc() is an instance method. So, System.gc() is more convenient
---

Does Spring Bean provide thread safety?

The default scope of Spring bean is singleton, so there will be only one instance per context. That means that all the having a class level variable that any thread can update will lead to inconsistent data. Hence in default mode spring beans are not thread-safe.

However, we can change spring bean scope to request, prototype or session to achieve thread-safety at the cost of performance. It’s a design decision and based on the project requirements.

---

The RetentionPolicy.RUNTIME policy


Annotations marked with RetentionPolicy.RUNTIME are kept around until runtime, meaning they’ll be accessible in the runtime, source code, and class files.

---
Reactive types are particularly useful in scenarios where you need to handle multiple concurrent streams of data, implement backpressure to control the flow, or leverage non-blocking I/O and reactive frameworks like Spring WebFlux.CompletableFuture is suitable for orchestrating asynchronous operations, waiting for multiple tasks to complete, or performing operations that don't require handling continuous streams of data.
---






How JVM Works:

1. Loading: When a Java application starts, the JVM loads the necessary .class files (bytecode) into memory using the Classloader subsystem.
2. Linking: The loaded class files are then linked to the core Java class libraries. This step ensures the correctness of the imported classes.
3. Initialization: The static variables are allocated memory and initialized with their default values.
4. Execution: The Execution Engine takes over and starts executing the bytecode. If JIT is used, frequent bytecodes are converted to native machine instructions to improve performance.
5. Runtime: As the application runs, the Garbage Collector intermittently cleans up the memory by removing unused objects, ensuring efficient memory management.
6. Exit: When the application execution completes, the JVM reclaims all the resources and shuts down.
