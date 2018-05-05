// vanilla JS palindrome checker

// pseudo code 
// allow user to type any words, symbols or numbers and check if it is a palindrome
// user clicks button to test if it is a palindrome
// alert user if they are successful or unsuccessful in creating a palindrome


let checkButton = document.getElementById("checkPalindrome");

function isPalindrome(string) {
    // regex matches a to z, 0 to 9 matches any digit, i in regex indicates case insensitivity 
    string = string.replace(/[^a-z0-9]+/gi, "").toLowerCase();
    // split string into array, reverse array and join 
    let reversedString = string.split("").reverse().join("");
    // triple equal sign, strict equality operator 
    // return boolean
    return string === reversedString;
}

// on click run function to check if user input is palindrome and notify user if successful or unsuccessful
checkButton.addEventListener("click", function () {
    let value = document.getElementById("inputPalindrome").value;
    let notification = document.getElementById("notification");

    // if user input is palindrome, alert them 
    if (isPalindrome(value)) {
        notification.innerHTML = "👍";
        notification.className = "alert alertSuccess";

    // user input is not a palindrome , alert them 
    } else {
        notification.innerHTML = "👎";
        notification.className = "alert alertNoSuccess";
    }
});