// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const table = document.getElementById('employees');
const empCountOutput = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
const employeeCountOutput = document.getElementById('employeeCount');

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const employeeID = document.getElementById('id').value;
    const fullName = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = table.insertRow(-1); //Inserts at the end of the table
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = row.insertCell();
    const cellName = row.insertCell();
    const cellExt = row.insertCell();
    const cellEmail = row.insertCell();
    const cellDepartment = row.insertCell();
    const cellAction = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.textContent = employeeID;
    cellName.textContent = fullName;
    cellExt.textContent = extension;
    cellEmail.textContent = email;
    cellDepartment.textContent = department;
  
    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.addEventListener('click', () => {
        // DELETE EMPLOYEE
      if (confirm('Are you sure you want to delete this employee?')) {
        table.deleteRow(row.rowIndex);
        employeeCount--;
        employeeCountOutput.value = employeeCount;
      }
    });
    cellAction.appendChild(deleteButton);
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    employeeCountOutput.value = employeeCount;
})

