/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
 */


// JavaScript Solution

function accum(s) {
    let array = s.split('');
    let resultArray = array.map((character, index) => {
        let result = ''
        for(let i = 0; i < index +1; i++){
            if(i == 0){
                result += character.toUpperCase()
            }else {
                result += character.toLowerCase()
            }
        }
        return result
    })
    return resultArray.join("-")
    console.log(resultArray)
}
