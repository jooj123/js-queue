const QueueElement = require('./queue-element');
const Queue = require('./queue');

class PriorityQueue extends Queue {
  constructor() {
    super();
    this.items = []
  }

  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let contain = false;

    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index].priority > queueElement.priority) {

        this.items.splice(index, 0, queueElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
        this.items.push(queueElement);
    }
  }

  dequeue() {
    if(this.isEmpty())
        return null;

    let item = this.items.shift();
    return item.element;
  }

  front() {
    if(this.isEmpty())
        return null;

    return this.items[0].element;
  }

  printQueue() {
    if(!this.isEmpty()) {
      this.items.forEach((item) => {
        console.log(item.element);
      });
    }
  }
}

module.exports = PriorityQueue;
