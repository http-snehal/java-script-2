console.log("Hello, World!");
alert("Welcome to JavaScript programming!");
// console.warn("This is a warning message.");
// console.error("This is an error message.");
// console.clear();

const button1 = document.querySelector("#click-me");

button1.onclick = function() {
    alert("Button clicked!");
}