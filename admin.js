document.addEventListener("DOMContentLoaded", function () {
    function showModal() {
        let addModal = document.getElementById("addModal");
        addModal.style.display = "block";
    }

    let btn = document.getElementById("addButton");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = showModal;

    span.onclick = function () {
        let addModal = document.getElementById("addModal");
        addModal.style.display = "none";
    };

    window.onclick = function (event) {
        let addModal = document.getElementById("addModal");
        if (event.target == modal) {
            addModal.style.display = "none";
        }
    };

    const studentData = [];
    const addModal = document.getElementById("addModal");
    const saveButton = addModal.querySelector(".save");

    saveButton.addEventListener("click", function () {
        let name = addModal.querySelector("#name").value;
        let age = addModal.querySelector("#age").value;
        let address = addModal.querySelector("#address").value;
        let phone = addModal.querySelector("#phone").value;
        let email = addModal.querySelector("#email").value;
        let classRoom = addModal.querySelector("#classRoom").value;

        const newStudent = {
            name: name,
            age: age,
            address: address,
            phone: phone,
            email: email,
            class: classRoom,
        };

        studentData.push(newStudent);
        addModal.style.display = "none";

        renderStudentTable();
    });

    

    const studentTable = document.getElementById("studentTable");

    function renderStudentTable() {
        studentData.forEach((student, index) => {
            const row = document.createElement("tr");

            const td1 = document.createElement("td");
            td1.textContent = index + 1;
            row.appendChild(td1);

            const td2 = document.createElement("td");
            td2.textContent = student.name;
            row.appendChild(td2);

            const td3 = document.createElement("td");
            td3.textContent = student.age;
            row.appendChild(td3);

            const td4 = document.createElement("td");
            td4.textContent = student.address;
            row.appendChild(td4);

            const td5 = document.createElement("td");
            td5.textContent = student.phone;
            row.appendChild(td5);

            const td6 = document.createElement("td");
            td6.textContent = student.email;
            row.appendChild(td6);

            const td7 = document.createElement("td");
            td7.textContent = student.class;
            row.appendChild(td7);

            const td8 = document.createElement("td");
            const editIcon = document.createElement("span");
            const deleteIcon = document.createElement("span");
            editIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                </svg>`;
            deleteIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>`;
            editIcon.classList.add("bi", "bi-pencil", "editStudent");
            deleteIcon.classList.add("bi", "bi-trash", "deleteStudent");
            td8.appendChild(editIcon);
            td8.appendChild(deleteIcon);
            row.appendChild(td8);

            studentTable.appendChild(row);
        });
    }

    renderStudentTable();
});
