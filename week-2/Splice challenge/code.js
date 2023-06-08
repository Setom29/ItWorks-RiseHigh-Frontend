// overriding the native splice method
Array.prototype.splice = function (start, deleteCount, ...args) {
    let arr = [];

    function copy(source, self) {
        for (let index = 0; index < source.length; index++) {
            self[index] = source[index]
        }
        self.length = source.length
    }

    if (start < 0) {
        // Negative index counts back from the end of the array — if start < 0, start + array.length is used.
        start = start + this.length
    } else if (start < -this.length) {
        // If start < -array.length, 0 is used.
        start = 0
    } else if (arguments.length === 0 || start >= this.length) {
        // If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
        // If start is omitted (and splice() is called with no arguments), nothing is deleted. This is different from passing undefined, which is converted to 0.
        start = this.length
    }

    if (deleteCount === undefined || deleteCount >= this.length - start) {
        // If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.
        deleteCount = this.length - start
    } else if (deleteCount <= 0) {
        // If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
        deleteCount = 0
    }
    for (let i = 0; i < start; i++) {
        arr.push(this[i])
    }
    for (el of args) {
        arr.push(el)
    }
    for (let i = start + deleteCount; i < this.length; i++) {
        arr.push(this[i])
    }

    let deletedArr = []

    for (let i = start; i < start + deleteCount; i++) {
        deletedArr.push(this[i])
    }
    copy(arr, this)
    return deletedArr

}

// remove 1 element
let arr = [1, 2, 3]
arr.splice(0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3]
arr.splice(0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1, 2, 3]
arr.splice(1, 1, 55);
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1, 2, 3, 4, 5]
arr.splice(1);
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1, 2, 3]
let deleted = arr.splice(1);
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1, 2, 3]
deleted = arr.splice(1, 1);
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1, 2, 3]
deleted = arr.splice(1, 0, 5);
console.log(deleted); //should be [] 