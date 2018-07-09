const assert = require('assert');
const sinon = require('sinon');
const PriorityQueue = require('../src/priority-queue');

describe('PriorityQueue', () => {
  it('should queue correctly', () => {
    let spy = sinon.spy(console, 'log');

    const queue = new PriorityQueue();
    queue.enqueue(1, 50);
    queue.enqueue(10, 1);
    queue.enqueue(55, 100);

    console.log('Front: ', queue.front())
    assert(queue.front() === 10);

    queue.printQueue();

    assert(spy.calledWith(1));
    assert(spy.calledWith(10));
    assert(spy.calledWith(55));

    spy.restore();
  });

});