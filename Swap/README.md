# Date: 31-03-2023
# 💻 Author:  Asif Ali
# Swap

🔄 Number Swapper (jQuery Project)
A simple and interactive web application built using HTML, CSS, and jQuery, designed to demonstrate the concept of value swapping among multiple input fields.
When you click the Swap button, the numbers entered in the input fields rotate — showing how data can be dynamically manipulated using jQuery.

✨ Features
🧮 Takes four numeric inputs (N1, N2, N3, N4)

🔁 On clicking the Swap button, values shift as follows:
N1 → N2
N2 → N3
N3 → N4
N4 → N1

💡 Demonstrates DOM manipulation and value swapping using jQuery
🎨 Styled with a modern CSS layout featuring a centered form and a background image
⚙️ Input fields have specific numeric ranges (min and max values) for validation

🧱 Project Structure
swap-jquery/
│
├── index.html        # Main HTML file (form structure and script links)
├── swapq3.css        # CSS styling for layout and appearance
├── swapq3.js         # jQuery script handling the swap logic
└── beauty.jpg        # Background image (used in CSS)

🎨 Design Overview
The form is centered both vertically and horizontally using CSS Flexbox.
Each input field (n1, n2, n3, n4) has transparent styling with a colored border.
The Swap button is styled for visibility with a distinct blue background.
Background image (beauty.jpg) gives a visually appealing effect.

⚙️ How It Works
The user enters four numbers into the input fields (within their allowed ranges).
When the Swap button is clicked:
The script stores the value of n1 in a temporary variable.
Then moves:
n2 → n1
n3 → n2
n4 → n3
Stored n1 value → n4
The updated values are displayed instantly in the input fields.

🔍 jQuery Logic (Simplified)
$(document).ready(function(){
  $("#b1").click(function(){
    var x = $("#n1").val();
    $("#n1").val($("#n2").val());
    $("#n2").val($("#n3").val());
    $("#n3").val($("#n4").val());
    $("#n4").val(x); 
  });
});

🚀 Usage Instructions
Clone or download the project folder.
Make sure all files (index.html, swapq3.css, swapq3.js, and beauty.jpg) are in the same directory.
Open the index.html file in your web browser.
Enter four numbers and click the Swap button to see the values rotate.

🧑‍💻 Technologies Used
HTML5 – For structure
CSS3 – For styling and layout
jQuery 3.6.3 – For easy DOM manipulation and event handling

🧠 Learning Outcomes
This project helps you understand:
DOM selection and manipulation with jQuery
Handling user input and updating form fields dynamically
Using CSS Flexbox for centered layouts
Implementing interactive web forms

🧑‍💻 Author
# Asif Ali
Simple yet effective demonstration of jQuery’s power for dynamic user interfaces.