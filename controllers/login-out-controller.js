const button = document.querySelector("[data-login-out]");
button.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("autenticado", "false");
    window.location.href = "/index/login.html";
})


