export default class LinkedListNode {
  constructor(value, next = null) { // next 默认指向null
    this.value = value;
    this.next = next; // new 构造时则完成next的指向
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
