// Q.1 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function)

// class node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class linkedlist {
//   constructor() {
//     this.head = null;
//   }

//   push(data) {
//     let newnode = new node(data);
//     if (!this.head) {
//       this.head = newnode;
//       return;
//     }
//     let crr = this.head;
//     while (crr.next) {
//       crr = crr.next;
//     }
//     crr.next = newnode;
//   }

//   pop() {
//     let crr = this.head;
//     let prev;

//     while (crr.next) {
//       prev = crr;
//       crr = crr.next;
//     }
//     prev.next = null;
//   }

//   display() {
//     let crr = this.head;
//     let result = [];

//     while (crr) {
//       result = result + crr.data + " -> ";
//       crr = crr.next;
//     }

//     console.log(result + "null");
//   }
// }

// let linklist = new linkedlist();
// linklist.push(100);
// linklist.push(200);
// linklist.push(300);
// linklist.push(400);
// linklist.display();


// linklist.pop()
// linklist.display();

/*
Output :-

100 -> 200 -> 300 -> 400 -> null
100 -> 200 -> 300 -> null

*/

// =============================================================================================

// Q.2 WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.

// function SelectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let c = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = c;
//             }
//         }
//     }
//     return arr;
// }

// let arr = [2, 5, 6, 8, 9, 5, 2, 1, 4, 6, 8, 4];
// console.log(SelectionSort(arr));

// output :- [1, 2, 2, 4, 4, 5, 5, 6, 6, 8, 8, 9]

// =============================================================================================

// Q.3 WAP to implements Stack using JavaScript without any functions?

// class Stack{
//     constructor(){
//         this.data=[]
//     }

//     Push(val){
//         this.data[this.data.length] = val;
//     }

//     Pop(){
//        this.data[this.data.length = this.data.length - 1]
//     }

//     PeakElement(){
//        return this.data[this.data.length-1]
//     }

//     isEmpty(){
//         return this.data.length == 0
//     }

//     Display(){
//         console.log(this.data);
//     }
// }

// let stake = new Stack();

// console.log("Your Stacke Element is :- ");
// stake.Push(100);
// stake.Push(200);
// stake.Push(300);
// stake.Push(400);
// stake.Push(500);
// stake.Display();

// console.log("After Applying Pop Method Your Element is :- ",);
// stake.Pop();
// stake.Display()

// console.log("Your PeakElement is :- ");
// console.log(stake.PeakElement());

// console.log(stake.isEmpty());


/*
output :- 

Your Stacke Element is :- 
[100, 200, 300, 400, 500]
After Applying Pop Method Your Element is :- 
[100, 200, 300, 400]
Your PeakElement is :- 
400
false

*/

// =============================================================================================

// Q.4 WAP to implement binary Search using JavaScript with DSA?

// function BinarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// const arr = [1, 3, 5, 7, 9, 11, 13];
// const result = BinarySearch(arr, 5);
// console.log(result);

// output :- 2

// =============================================================================================

// Q.5 WAP to implement Merge sort using JavaScript without any function?

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let leftside = arr.slice(0, mid);
//     let rightside = arr.slice(mid);

//     let Left = mergeSort(leftside);
//     let Right = mergeSort(rightside);

//     return merge(Left, Right);
// }

// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     result = result.concat(left.slice(i));
//     result = result.concat(right.slice(j));

//     return result;
// }
// let arr = [4,2,4,6,7,4,3,7,8,3,7]
// let sortedArr = mergeSort(arr);
// console.log(sortedArr);


// Output :- [2, 3, 3, 4, 4, 4, 6, 7, 7, 7, 8]
