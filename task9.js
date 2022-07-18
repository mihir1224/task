class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor(prev = null) {
    this.prev = prev;
  }
}
let node1 = new listNode(5);
let node2 = new listNode(10);
let node3 = new listNode(15);
node1.next = node2;
let list1 = new linkedList(node1);
let list2 = new linkedList(node2);
let list3 = new linkedList(node3);
console.log(list1, list2, list3);
