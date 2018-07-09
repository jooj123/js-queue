# JS Queue
Simple queue pattern in JS

### Usage

*Standard Queue:*

```javascript
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(10);
queue.enqueue(55);

queue.printQueue();
```

*Priority Queue:*

```javascript
const queue = new PriorityQueue();
queue.enqueue(1, 50);
queue.enqueue(10, 1);
queue.enqueue(55, 100);

console.log('Front: ', queue.front())
```
