//Array: Push Front
function pushFront(array, value) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i-1];
    }
    array[0] = value;
    return array;
}

//Array: Pop Front
function popFront(array) {
    let temp = array[0];
    for (let i = 0; i < array.length-1; i++) {
        array[i] = array[i+1];
    }
    array[array.length-1] = temp;
    return array.pop();
}

//Array: Insert At
function insertAt(array, index, value) {
    array.push(array[array.length-1]);
    for (let i = array.length-2; i > index; i--) {
        array[i] = array[i-1];
    }
    array[index] = value;
    return array;
}

//Array: Remove At
function removeAt(array, index) {
    let temp = array[index];
    for (let i = index; i < array.length-1; i++) {
        array[i] = array[i+1];
    }
    array[array.length-1] = temp;
    return array.pop();
}

//Array: Swap pairs
function swapPairs(array) {
    for (let i = 0; i < array.length; i = i + 2) {
        if (i + 1 < array.length) {
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
    return array;
}

//Array: Remove Duplicates
function removeDuplicates(array) {
    let dict = {};
    for (let i = 0; i < array.length; i++) {
        console.log("Array[i] is " + array[i] + " and dict is " + dict[array[i]]);
        if (dict[array[i]] != true) {
            dict[array[i]] = true;
        } else {
            for (let j = i; j < array.length-1; j++) {
                array[j] = array[j+1];
            }
            array.pop();
        }
    }
    return array;
}