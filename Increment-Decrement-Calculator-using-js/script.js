// Initialize count
let count = 0;
// Get DOM elements
let counterDisplay = document.getElementById("counter");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
// Add event listener to button
incrementBtn.addEventListener("click", () => {
  count++;   // Increment the counter
  counterDisplay.textContent = count;  // Update display
});
// Add event listener to button
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;  // Decrement the counter
    counterDisplay.textContent = count;  // Update display
  } else {
    alert("number is zero")
  }
});