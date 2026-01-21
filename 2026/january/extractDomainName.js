// 
/**
 * Extract the Domain Name from a URL: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 * You're given a string representing a URL as input.  Your goal is to find and return the domain name.
 * Examples:
 * https://www.google.com returns "google"
 * www.jeopardy.com returns "jeopardy"
 * http://en.wikipedia.org returns "wikipedia"
 * @param {string} url A string representing a URL
 * @returns A string with only the domain name
 */
function domainName(url) {
    // Find first index of "://" to start, then move to the first index after finding the "http://" or "https://"
    let startingIndex = url.indexOf("://") + 3;
    if (startingIndex === 2) { // We don't find "http://" or "https://"
        startingIndex = 0;
    }
    // Search for "www.", if applicable.  The starting index is the first index after "www.", or if it's not there, the first index after "http://" or "https://",
    // and if neither are there, index 0;
    let domainStartingIndex = url.indexOf("www.");
    if (domainStartingIndex === -1) {
        domainStartingIndex = startingIndex; // Start at index after http[s]://, or index 0 if not found
    } else {
        domainStartingIndex = startingIndex + 4; // Start at index after http[s]://www.
    }
    let domainEndingIndex = url.indexOf(".", domainStartingIndex);
    if (domainEndingIndex === -1) {
        domainEndingIndex = url.length;
    }
    return url.substring(domainStartingIndex, domainEndingIndex);
}
// Regex I'm sure is much faster!

// Other approaches:
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};

function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}