/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

// JavaScript Solution
function getCount(str) {
    var vowelsCount = 0;
    str = str.toLowerCase().split('')
    const vowels = ["a", "e", "i", "o", "u"]

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            vowelsCount++
        }
    }
    return vowelsCount

}

// JavaScript Solution 2
function getCount(str) {
    let shit = str.match(/[aeiou]/gi)
    console.log(shit)

    return shit?.length || 0;
}
