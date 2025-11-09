// Global variable 
let currentEditId = null;
let employeeIdCounter = 0;

// Get form elements
const userDisplay = document.getElementById("user_name");
const emp_form = document.getElementById("employee_form");
const emp_table = document.getElementById("employee_table");

// Show logged-in user's name
const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (currentUser && userDisplay) {
  userDisplay.textContent = currentUser.name;
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "./index.html";
}

// Initialize employee ID counter
function initializeEmployeeIdCounter() {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  if (employees.length > 0) {
    // Find the highest existing ID
    const maxId = employees.reduce((max, emp) => {
      const empIdNum = parseInt(emp.id.split('-')[1]);
      return empIdNum > max ? empIdNum : max;
    }, 0);
    employeeIdCounter = maxId;
  }
}

// Employee form handler - SINGLE VERSION
if (emp_form) {
  emp_form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("employee_name").value.trim();
    const email = document.getElementById("employee_email").value.trim();
    const address = document.getElementById("employee_address").value.trim();
    const age = document.getElementById("employee_age").value.trim();

    // Print values that take from input
    console.log(name);
    console.log(email);
    console.log(address);
    console.log(age);

    if (!name || !email || !address || !age) {
      alert("Please fill in all Fields");
      return;
    }

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    const submitButton = emp_form.querySelector("button[type='submit']");
    const isEditMode = submitButton.textContent === "Update Employee";

    // Check if email already exists in employees array 
    const emailExists = employees.some(emp => emp.email === email && (!isEditMode || emp.id !== currentEditId));

    if (emailExists) {
      alert("This email address has already been entered.");
      console.log("This email address has already been entered.");
      return; // Stop execution if email exists
    }

    if (isEditMode && currentEditId) {
      // Update existing employee
      const employeeIndex = employees.findIndex(emp => emp.id === currentEditId);
      if (employeeIndex !== -1) {
        employees[employeeIndex] = {
          id: currentEditId,
          name: name,
          email: email,
          address: address,
          age: age
        };

        localStorage.setItem("employees", JSON.stringify(employees));

        // Update the table row
        updateEmployeeInTable(currentEditId, employees[employeeIndex]);

        // Reset form and button text
        resetForm();
      }
    } else {
      // Create new employee
      console.log("This is a new email address.");

      const id = generateEmployeeId();

      // Create employee object
      const employee = {
        id: id,
        name: name,
        email: email,
        address: address,
        age: age
      };

      employees.push(employee);
      localStorage.setItem("employees", JSON.stringify(employees));

      // Print values of object
      console.log("emp id: ", employee.id);
      console.log("emp name: ", employee.name);
      console.log("emp email: ", employee.email);
      console.log("emp address: ", employee.address);
      console.log("emp age: ", employee.age);

      // Get the table body
      const emp_table_body = document.querySelector("#employee_table tbody");

      if (emp_table_body) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${id}</td>
          <td>${name}</td>
          <td>${email}</td>
          <td>${address}</td>
          <td>${age}</td>
          <td><button class="btn editBtn">Edit/View</button></td>
          <td><button class="btn deleteBtn">Remove</button></td>
        `;

        emp_table_body.appendChild(tr);

        // Add event listeners for the new buttons
        addButtonEventListeners(tr, id);
      }

      // Clear form inputs
      resetForm();
    }
  });
}

// Generate Id
function generateEmployeeId() {
  employeeIdCounter++;
  return `EMP-${String(employeeIdCounter).padStart(4, '0')}`;
}

// Function to handle button events
function addButtonEventListeners(row, employeeId) {
  const editBtn = row.querySelector('.editBtn');
  const deleteBtn = row.querySelector('.deleteBtn');

  if (editBtn) {
    editBtn.addEventListener('click', function () {
      editEmployee(employeeId);
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', function () {
      deleteEmployee(row, employeeId);
    });
  }
}

// Edit employee function
function editEmployee(employeeId) {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = employees.find(emp => emp.id === employeeId);

  if (employee) {
    // Set current edit ID
    currentEditId = employeeId;

    // Populate form with employee data for editing
    document.getElementById("employee_name").value = employee.name;
    document.getElementById("employee_email").value = employee.email;
    document.getElementById("employee_address").value = employee.address;
    document.getElementById("employee_age").value = employee.age;

    // Change button text to Update
    emp_form.querySelector("button[type='submit']").textContent = "Update Employee";
  }
}

// Update employee in table
function updateEmployeeInTable(employeeId, employeeData) {
  const rows = document.querySelectorAll("#employee_table tbody tr");
  rows.forEach(row => {
    const idCell = row.cells[0];
    if (idCell.textContent === employeeId) {
      row.cells[1].textContent = employeeData.name;
      row.cells[2].textContent = employeeData.email;
      row.cells[3].textContent = employeeData.address;
      row.cells[4].textContent = employeeData.age;
    }
  });
}

// Delete employee function
function deleteEmployee(row, employeeId) {
  if (confirm("Are you sure you want to delete this employee?")) {
    row.remove();
    deleteEmployeeFromStorage(employeeId);

    // If we're deleting the currently edited employee, reset the form
    if (currentEditId === employeeId) {
      resetForm();
    }
  }
}

// function to delete from localStorage
function deleteEmployeeFromStorage(employeeId) {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees = employees.filter(emp => emp.id !== employeeId);
  localStorage.setItem("employees", JSON.stringify(employees));
}

// Reset form function
function resetForm() {
  document.getElementById("employee_name").value = "";
  document.getElementById("employee_email").value = "";
  document.getElementById("employee_address").value = "";
  document.getElementById("employee_age").value = "";

  emp_form.querySelector("button[type='submit']").textContent = "Add Employee";
  currentEditId = null;
}

// Function to load employees when page loads
function loadEmployees() {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  // Get the table body
  const emp_table_body = document.querySelector("#employee_table tbody");

  if (emp_table_body && employees.length > 0) {
    employees.forEach(employee => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.address}</td>
        <td>${employee.age}</td>
        <td><button class="btn editBtn">Edit/View</button></td>
        <td><button class="btn deleteBtn">Remove</button></td>
      `;

      emp_table_body.appendChild(tr);
      addButtonEventListeners(tr, employee.id);
    });
  }
}

// Load employees when the page loads
document.addEventListener('DOMContentLoaded', function () {
  initializeEmployeeIdCounter();
  loadEmployees();
});