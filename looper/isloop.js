'use strict';

//Complete this algo
const isLoop = (linkedlist, tortoise=linkedlist.head, hare=linkedlist.head.next, i=0) => {

  console.log("TORTOISE", tortoise)
  console.log("HARE", hare)
  if(i===4)
    return true
  if(hare.next.next.next===null|| hare.next.next===null|| hare.next===null || hare===null){

    console.log("TORTOISE", tortoise)
    console.log("HARE", hare)
    return false;}
  if(tortoise.value === hare.value  ){
    // console.log("TORTOISE", tortoise)
    // console.log("HARE", hare)
    return true;}
  return isLoop(linkedlist, tortoise.next, hare.next.next.next, i++)
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
