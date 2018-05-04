// vanilla JS palindrome checker

// pseudo code 
// allow user to type any words, symbols or numbers and check if it is a palindrome
// user clicks button to test if it is a palindrome
// alert user if they are successful or unsuccessful in creating a palindrome


let checkButton = document.getElementById("checkPalindrome");

function isPalindrome(string) {
    // regex matches a to z, 0 to 9 matches any digit, i in regex indicates case insensitivity 
    string = string.replace(/[^a-z0-9]+/gi, "").toLowerCase();
    let reversedString = string.split("").reverse().join("");
    // triple equal sign, strict equality operator 
    // return boolean
    return string === reversedString;
}

// on click run function to check if user input is palindrome
checkButton.addEventListener("click", function () {
    let value = document.getElementById("inputPalindrome").value;
    let notification = document.getElementById("notification");

    if (isPalindrome(value)) {
        notification.innerHTML = "👍 It's a palindrome! Great job! 👍";
        notification.className = "alert alertSuccess";
    } else {
        notification.innerHTML = "👎 That's not a palindrome! Try again! 👎";
        notification.className = "alert alertDanger";
    }
});