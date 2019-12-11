'use strict';

//Complete this algo
const isLoop = (linkedlist, tortoise=linkedlist.head, hare=linkedlist.head.next.next) => {
  if(hare.next.next.next===null || hare.next.next===null|| hare.next===null || hare===null){
    return false;}
  if(tortoise.value === hare.value  ){
    return true;}
  return isLoop(linkedlist, tortoise.next, hare.next.next)
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
