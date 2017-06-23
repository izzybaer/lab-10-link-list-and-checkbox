'use strict';



class SLL {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.head = null;
  }

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
  // when we are removing nodes from a LL we want to make sure to reconnect the one before the one that was removed, with the one after the one that was removed.
  removeNode(node){
      var current = this.head;
      if(current.node === node){
        this.head = current.next;
      } else {
        let previous = current;

        while(current.next){
          if(current.node === node) {
            previous.next = current.next;
            return;
          }
          previous = current;
          current = current.next;
        }
        if(current.node === node){
          previous.next = null;
        }
      }
    }


  reverseNode()
  //   if(!this.head) {
  //     console.log('list is empty');
  //     return;
  //   }
  //   if(this.head.data === val) {
  //     this.head = this.head.next;
  //   } else if {
  //     let first = this.head;
  //     let second = first.next;
  //     while(second) {
  //       if(second.data === val) {
  //         first.next = second.next;
  //       }
  //     } else {
  //       first = second;
  //     }
  //   } second = second.next;2
  // }
//
//   reverseNode()
//
//   // bonus
//   findNthNode(n) {
//
//   }
//
//   //bonus
//   findMiddleNode() {
//     let slow, fast;
//     slow = fast = this;
//     while(fast && fast.next && fast.next.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     return slow;
//   }
// }
