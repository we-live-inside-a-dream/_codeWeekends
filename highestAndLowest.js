//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// JavaScript Solution
function highAndLow(numbers){
    let newArray = numbers.split(' ')
    let intArray = newArray.map((item) => {
        return parseInt(item)
    })
    let highestNum = intArray[0]
    let lowestNum = intArray[0]
    for(let i = 0; i < intArray.length; i++){

        if(intArray[i] > highestNum){
            highestNum = intArray[i]
        }
        if(intArray[i] < lowestNum){
            lowestNum = intArray[i]
        }
    }
    return highestNum + " " + lowestNum
    console.log(highestNum, lowestNum)
}
