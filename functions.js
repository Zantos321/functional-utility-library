// ARRAY PROTOTYPE FILTER

function arrayPrototypeFilter(arrUser = [23, 44, 5, 16, 24, 37, 39, 22]) {
   var filteredArray = arrUser.arrayFilter(function (item) {
      return item % 2 === 1;
   });
   return filteredArray;
}

Array.prototype.arrayFilter = function (filterObj) {
   var newArray = [];
   for (var x = 0; x <= this.length; x++) {
      if (filterObj(this[x]) === true) {
         newArray.push(this[x]);
      }
   }
   return newArray;
};

// RETURN PART OF AN ARRAY USING SLICE METHOD

function sliceArray(beginSlice, endSlice) {
   var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var newArray = numArray.slice(beginSlice, endSlice);
   return newArray;
}

// REMOVE ELEMENTS WITH SLICE INSTEAD OF SPLICE

function spliceBad(begin, end) {
   var spliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var newSpliceArray = spliceArray.splice(begin, end);
   var newSliceArray = sliceArray.slice(begin, end);
   return (
      "The Array splice pulled from after splice: " +
      spliceArray +
      " . " +
      "The Array Splice made: " +
      newSpliceArray +
      " . " +
      "The Array slice pulled from after slice: " +
      sliceArray +
      " . " +
      "The Array slice made: " +
      newSliceArray
   );
}

// COMBINE TWO ARRAYS USING THE CONCAT METHOD

function arrayConcat(arr1, arr2) {
   return arr1.concat(arr2);
}

// ADD ELEMENTS TO THE END OF AN ARRAY USING CONAT INSTEAD OF PUSH

function pushVSconcat(userArr) {
   let pushArray = [1, 2, 3, 4, 5];
   let concatArray = [1, 2, 3, 4, 5];
   pushArray.push(userArr);
   let newConcatArray = concatArray.concat(userArr);
   return (
      "Push changed it's original array to :" +
      pushArray +
      " . " +
      "While concat didn't change its orginal array, it just made a new one: " +
      "   Original Array: " +
      concatArray +
      "   New Array: " +
      newConcatArray
   );
}

// USE THE REDUCE METHOD TO ANALYZE DATA

function reduceArray(startArray) {
   let addArray = startArray
      // filters out negative numbers
      .filter((num) => num > 0)
      // adds the numbers together to produce a sum
      .reduce((arrSum, num) => arrSum + num);
   return addArray;
}

// USE HIGHER-ORDER FUNCTIONS MAP, FILTER, OR REDUCE TO SOLVE AN COMPLEX PROBLEM

function complexProblem(userArray, userPow) {
   let powArray = userArray
      // filters out the negative numbers, decimals, and odd numbers.
      .filter((num) => num > 0 && num % parseFloat(num) === 0 && num % 2 === 0)
      // take the remaining numbers and raises them to the power a user has given
      .map((num) => Math.pow(num, userPow));
   return powArray;
}
