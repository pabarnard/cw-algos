/**
 * Remove Anchor from URL challenge: https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
 * You're given a URL as a string as input.  Your goal is to remove everything after the anchor, which starts with the "#" symbol.  Return the URL as a new string with everything after and including the anchor removed.
 * For example, if you have "https://www.mysite.com#contact", return "https://www.mysite.com".  If you have "https://www.google.com?q=blue", return "https://www.google.com?q=blue", as the "?" is NOT an anchor.
 * @param {string} url The site url
 * @returns The url with everything after the anchor "#" - including the anchor - removed
 */
function removeUrlAnchor(url) {
    // Approach I
    let charArr = []; // Hold each character in the string
    for (const char of url) { // Go through the string in order
        if (char === "#") { // If we have an anchor, stop immediately
            break;
        }
        charArr.push(char);
    }
    return charArr.join(""); // Now merge the characters into a single string
    //   // Approach II: One-line approach
    //   return url.split("#")[0];
}