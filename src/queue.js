class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element);
  }

  isEmpty() {
    if (!this.items || this.items.length === 0) {
      return true;
    }

    return false;
  }

  dequeue() {
    if(this.isEmpty())
        return null;

    return this.items.shift();
  }

  front() {
    if(this.isEmpty())
        return null;

    return this.items[0];
  }

  printQueue() {
    if(!this.isEmpty()) {
      this.items.forEach((item) => {
        console.log(item);
      });
    }
  }
}

module.exports = Queue;
