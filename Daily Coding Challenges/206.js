function arrayPermutation(array, perm) {
    let newArray = [];
    for (let i = 0; i < perm.length; i++) {
        newArray.push(array[perm[i]]);
    } 
    return newArray;
}

arrayPermutation(["a", "b", "c"], [2, 1, 0]);