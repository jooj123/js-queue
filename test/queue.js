const assert = require('assert');
const sinon = require('sinon');
const Queue = require('../src/queue');

describe('Queue', () => {
  it('should queue correctly', () => {
    let spy = sinon.spy(console, 'log');

    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(10);
    queue.enqueue(55);

    assert(queue.front() === 1);

    queue.printQueue();

    assert(spy.calledWith(1));
    assert(spy.calledWith(10));
    assert(spy.calledWith(55));

    spy.restore();
  });

});