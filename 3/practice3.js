const squareSumReturn = (numbers) => {
    const arrayLength = numbers.length
    let sumOfSquare = 0;
    for (const number of numbers) {
        let squareOfNumber = number * number
        sumOfSquare += squareOfNumber
    }
    const avarageOfSum = sumOfSquare / arrayLength
    return avarageOfSum
}

const numbersArray = squareSumReturn([3, 4, 5])
// console.log (numbersArray)
// console.log(Array.isArray(numbersArray))
