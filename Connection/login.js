document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("./Connection/login.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            if (data.email === "admin@google.com") { 
                window.location.href = "admin.html";
            } else {
                window.location.href = "index.html";
            }
        } else {
            document.getElementById("error-message").innerText = data.message;
        }
    })
    .catch(error => console.error("Login error:", error));
});
