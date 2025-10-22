/**
 * The Hashtag Generator: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
 * You're given a string as input.  Your goal is to create a hashtag of the form "#Word1Word2Word3" with no spaces at all and a hash symbol at the beginning.  Each word from the original string is to be capitalized and then put into the hashtag.  If the original string is empty, the hashtag result is only "#" or the hashtag is 140 or more characters long - including the hash -  return the boolean false instead.
 * @param {string} str 
 * @returns String consisting of the hash character and words afterwards with no spaces - or the boolean false
 */
function generateHashtag(str) {
    if (str.length === 0) { // In retrospect, could have trimmed the string here
        return false;
    }
    let hashedResultArr = ["#"];
    str.split(" ").filter(item => item !== "").forEach(word => {
        hashedResultArr.push(word[0].toUpperCase() + word.substring(1)); // Should have converted to lower case in retrospect for second part of word
    })
    let hashString = hashedResultArr.reduce((acc, item) => acc + item);
    return hashString.length == 1 || hashString.length > 140 ? false : hashString;
}