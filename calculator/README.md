# Date: 02-04-2023 
# 💻 Author:  Asif Ali
# Calculator 

💡 Simple Web Calculator
A basic calculator web application built using HTML, CSS, and JavaScript.
It allows users to perform simple arithmetic operations such as addition, subtraction, multiplication, and division — all in the browser.

🧮 Features
🔢 Perform basic arithmetic operations (+, -, *, /)
🧼 Clear the display instantly with a C button
💠 Support for decimals (.)
⏩ Quick input buttons for 00 and 000
⚡ Instant calculation using JavaScript
🎨 Simple, clean, and responsive design

🧱 Project Structure
calculator/
│
├── index.html        # Main HTML file containing structure, styles, and JavaScript
└── README.md         # Project documentation

🎨 Design Overview
Styled using CSS for a bright, background-color (#0ff)
Buttons are evenly sized, clearly visible, and easy to click
The display field (input) shows all user inputs and results clearly

⚙️ How It Works
Each calculator button calls a small JavaScript function when clicked.
appendToResult(value) — adds the clicked number or operator to the display
clearResult() — clears the calculator screen
calculateResult() — computes the entered expression using eval() and shows the result

🚀 Usage
Clone or download the repository.
Open the index.html file in any modern web browser.
Use the on-screen buttons to perform calculations:
Click numbers and operators to build an expression.
Press = to get the result.
Press C to clear the screen.

⚠️ Note
The calculator uses JavaScript’s eval() function to evaluate expressions.
While this works fine for personal use, avoid using untrusted input or deploying this version publicly.
For more secure or complex applications, consider writing a custom math parser.
