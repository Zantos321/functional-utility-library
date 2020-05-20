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

// SORT AN ARRAY ALPHABETICALLY USING THE SORT METHOD\

function sortArray() {
   let userArray = ["l", "g", "a", "c", "d", "b", "f", "z", "h", "l", "a"];
   return userArray.sort(function (a, b) {
      // compares the values with conditional ? if the same it doesnt move it if it is less than then it gets moved forward
      return a === b ? 0 : a < b ? -1 : 1;
   });
}

// SPLIT A STRING INTO AN ARRAY USING THE SLIP METHOD

function splitArray(userString) {
   var stringArray = userString.split(/\W/);
   return stringArray;
}

// COMBINE AN ARRAY INTO A STRING USING THE JOIN METHOD

function joinArray(userString) {
   // Takes the string and turns it into an array then turns it back into a string.
   let newArray = userString.split(/\W/).join(" ");
   return newArray;
}

// APPLY FUNCTIONAL PROGRAMMING TO CONVERT STRINGS INTO A URL SLUG

function slug(userString) {
   return userString
      .split(/\W/)
      .filter((obj) => {
         return obj !== "";
      })
      .join("-")
      .toLowerCase();
}

// USE THE EVERY METHOD TO CHECK THAT EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA

function everyArray(userArray) {
   return userArray.every(function (isPositive) {
      return isPositive > 0;
   });
}

// USE THE SOME METHOD TO CHECK THAT ANY ELEMENTS IN AN ARRYA MEET A CHRITERIA

function someArray(userArray) {
   return userArray.some(function (isPositive) {
      return isPositive > 0;
   });
}
