

const form = document.getElementById("form-istbian");
// Grab input elements once to reuse them
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const salaryInput = document.getElementById("salary");

let employees = [];
let editIndex = null;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (editIndex === null) {
        // Create mode
        const NewEmployee = {
            id: employees.length + 1,
            name: nameInput.value,
            job: jobInput.value,
            salary: salaryInput.value
        };
        employees.push(NewEmployee);
    } else {
       
        employees[editIndex].name = nameInput.value;
        employees[editIndex].job = jobInput.value;
        employees[editIndex].salary = salaryInput.value;
        editIndex = null; // Reset edit mode
    }

    renderEmployees();
});

function renderEmployees() {
    const tbodyx = document.getElementById("employee");
    tbodyx.innerHTML = "";
    
    for (let i = 0; i < employees.length; i++) {
        const emp = employees[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.job}</td>
            <td>${emp.salary}</td>
            <td>
                <button onclick="editEmployee(${i})">Edit</button>
            </td>
        `;
        tbodyx.appendChild(row);
    }
    form.reset(); // Clear the form after adding/editing
}

function editEmployee(index) {
    const emp = employees[index];
    // Fill the form with existing data
    nameInput.value = emp.name;
    jobInput.value = emp.job;
    salaryInput.value = emp.salary;

    editIndex = index;

}

