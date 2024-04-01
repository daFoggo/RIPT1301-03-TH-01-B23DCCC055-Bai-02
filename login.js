function checkSubmit() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");

    let inputForm = document.getElementsByClassName("inputform")[0];

    if (username === "admin" && password === "admin") {
        window.location.href = "admin.html";
        return true;
    } else if (username === "" || password === "") {
        errorMessage.innerHTML = "Vui lòng nhập đầy đủ thông tin";
    } else {
        errorMessage.innerHTML = "Tài khoản hoặc mật khẩu không chính xác";
    }

    if (inputForm.getElementsByClassName("error-message").length === 0) {
        inputForm.appendChild(errorMessage);
    } else {
        inputForm.getElementsByClassName("error-message")[0].innerHTML =
            errorMessage.innerHTML;
    }

    return false;
}
