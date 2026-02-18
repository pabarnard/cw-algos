/**
 * Count IP addresses challenge: https://www.codewars.com/kata/526989a41034285187000de4/train/javascript
 * You're given two IPv4 (XXX.XXX.XXX.XXX) addresses as strings.  The starting address is before the ending address.  Your goal is to the count the number of addresses between them and return that number.  Do NOT including the ending address.
 * Examples:
 * "1.0.0.0" and "1.0.0.5" returns 5
 * "1.0.1.0" and "1.0.2.0" returns 256
 * "1.0.0.35" and "1.0.1.0" returns 221
 * "1.0.0.0" and "2.0.0.0" returns 16777216
 * @param {string} start Starting IP address
 * @param {string} end Ending IP address
 * @returns The number of IP addresses between the two, excluding the ending address
 */
function ipsBetween(start, end) {
    // DISCLAIMER: This works for IPv4 addresses, so this might not work so well for IPv6 due to integer overflow.  You might need to use something like BigInt
    const ipStartingAddressNumbersArr = start.split(".");
    const ipEndingAddressNumbersArr = end.split(".");
    let startingNumber = 0;
    let endingNumber = 0;
    let numberBetween = 256 ** (ipStartingAddressNumbersArr.length - 1);
    // Find base-10 equivalent for each IP address
    for (let ind = 0; ind < ipEndingAddressNumbersArr.length; ind++) {
        startingNumber += ipStartingAddressNumbersArr[ind] * numberBetween;
        endingNumber += ipEndingAddressNumbersArr[ind] * numberBetween;
        numberBetween /= 256;
    }
    return endingNumber - startingNumber;
}