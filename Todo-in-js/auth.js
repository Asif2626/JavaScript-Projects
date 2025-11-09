// Admin 
const Admin = {
  userName: "Employee_Admin",
  userEmail: "Employee_Admin@gmail.com",
  userPassword: "Employee_Admin"
}

// Get Form
const register_form = document.getElementById("reg_form");
const login_form = document.getElementById("login_form");
const forgot_password_form = document.getElementById("forgot_password_form");

// Registration form
if (register_form) {
  register_form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get value from register form
    const name = document.getElementById("reg_name").value.trim();
    const email = document.getElementById("reg_email").value.trim().toLowerCase();
    const password = document.getElementById("reg_password").value.trim();
    console.log(name);
    console.log(email);
    console.log(password);
    if (!name || !email || !password) {
      alert("Enter input fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    // check email is already available or not
    if (users.some(user => user.email === email)) {
      alert("User already Exists");
      window.location.href = "./login.html";
      return;
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registered successfully!");
      window.location.href = "./login.html";
    }
  })
}

// Login form
if (login_form) {
  login_form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get value from Login
    const email = document.getElementById("login_email").value.trim().toLowerCase();
    const password = document.getElementById("login_password").value.trim();
    console.log(email);
    console.log(password);
    if (!email || !password) {
      alert("Enter input fields");
      return;
    }

    // Admin Login
    if (email === Admin.userEmail.toLowerCase() && password === Admin.userPassword) {
      localStorage.setItem("loggedInUser", JSON.stringify({
        name: Admin.userName,
        email: Admin.userEmail,
        role: "admin"
      }));
      window.location.href = "./admin_dashboard.html";
      return;
    }
    

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      window.location.href = "./user_dashboard.html";
    } else {
      alert("Invalid email and password");
    }
  })
}

// Forgor Password
if (forgot_password_form) {
  forgot_password_form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById("forgot_email").value.trim().toLowerCase();
    const newPassword = document.getElementById("new_password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();

    if (!email || !newPassword || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Password do not Match");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex === -1) {
      alert("No account found with this email address");
      return;
    }

    // Update password
    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password reset successfully! You can now login with your new password.");
    window.location.href = "./login.html";

  });
}

/*
Employee_Admin
Employee_Admin@gmail.com
Employee_Admin
*/ 