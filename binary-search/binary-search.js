'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	const middle = Math.floor(array.length/2);
	if (array[middle] === target) {
		return true;
	} if (array.legnth <= 1) {
		return array[0] === target;
	} if (target > array[middle]) binarySearch(array.slice(middle + 1), target);
	else {
		binarySearch(array.slice (0, middle), target);
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
