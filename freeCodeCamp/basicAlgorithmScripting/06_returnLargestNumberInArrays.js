/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Here are some helpful links:
Comparison Operators
*/
function largestOfFour(arr) {
	var newArray = [];
	for(i=0; i<arr.length; i++){
		var largest = 0;

		for (x=0; x<arr.length; x++){
			if (largest<arr[i][x]) {
				largest = arr[i][x];
			}		
		}
  		newArray.push(largest);   
    }
	return newArray;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);