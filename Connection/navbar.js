document.addEventListener("DOMContentLoaded", function () {
    fetch("./Connection/checkSession.php", {
        method: "GET",
        credentials: "include" // Garante que os cookies são enviados
    })
    .then(response => response.json())
    .then(data => {
        console.log("Session Data:", data); // 🔍 Depuração no Console

        if (data.loggedIn) {
            const navbar = document.getElementById("navbarLinks");

            // Verifica se a aba já existe para evitar duplicação
            if (!document.getElementById("myAreaTab")) {
                const myAreaTab = document.createElement("li");
                myAreaTab.classList.add("nav-item");
                myAreaTab.setAttribute("id", "myAreaTab");
                myAreaTab.innerHTML = '<a class="nav-link" href="clientarea.html">My Area</a>';
                navbar.appendChild(myAreaTab);
            }

            // Exibe o botão de logout
            document.getElementById("logoutBtn").classList.remove("d-none");
        } else {
            console.warn("User not logged in");
        }
    })
    .catch(error => console.error("Session check error:", error));

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault();

        fetch("./Connection/logout.php", { method: "GET", credentials: "include" })
            .then(response => response.json())
            .then(() => {
                window.location.href = "login.html"; // Redireciona após logout
            })
            .catch(error => console.error("Logout error:", error));
    });
});
