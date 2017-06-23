'use strict';

class SLL {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.head = null;
  }

  // big O n
  appendNode(node) {
    if(!(node instanceof SLL))
    return null;
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback) {
    let current = this;
    while(current) {
      callback(current, this);
      current = current.next;
    }
  }

  // big O n
  removeNode(node){
    if(!(node instanceof SLL))
      return null;
    this.node = node;

    return;

  }

  // big 0 is 2n
  reverseNode(head) {
    let current = head;
    let prevent = null;

    while(current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous;
  }


module.exports = SLL;
