const mergeTwoArray = (array1, array2) => {
    const newArray = [ ...array1, ...array2]
  return Math.max(...newArray)
};

const firstArray = [1, 2, 3, 100];
const secondArray = [4, 5, 6];
const maxNumOfNewArray = mergeTwoArray(firstArray, secondArray);
console.log(maxNumOfNewArray);
