
let arr1, arr2;

// isArray is a JS function which gives back  a bollean if the value is an array or not. Here i am check if the values passed
// to an argument is an array or not
// if(!Array.isArray(arr1) || !Array.isArray(arr2)) throw new typeError('type of argument is not an array');

// this is a main intersection function which will check if the values in both the arrays are same
function intersection(arr1, arr2) {
	var result = [];


	for (var i=0; i<arr1.length; i++) {
		for(var j=0; j<arr2.length; j++) {
			// this if statement if there is an array inside of an array. We will use typeof because typeof array returns an object.
			// for more details check typeof documentation
			if(typeof(arr1[i] === 'object')) {
				//do something with the result
			}
			// checking if the function is return true or false in an if statement
			if(typeof (arr2[j] === 'object')) {
				if(isArraySame(arr1[i], arr2[j])) {
					result.push(arr1[i]);
				}
			}

			// looping through both th arrays and seeing if their value is same, assumtions for this is that the arrays passed only have
			// one array, there is no aray inside of an array
			else if (arr1[i] === arr2[j]) {
				result.push(arr1[i])
			}
		}
	}

	return console.log(result);
}


function isArraySame(a, b) {
	for(var i=0; i<a.length; i++) {
		if(a.length !== b.length) {
			return false
		}
		if(a[i] === b[j]) {
			return true;
		}
	}
	return false;
}


// case1
// intersection([4,2,3], [3,2,1]) //==> 2,3
// case 2
intersection([4,[2,3]], [3,[2,1]]) //==> [2,3]