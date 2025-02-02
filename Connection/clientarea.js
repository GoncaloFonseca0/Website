document.addEventListener("DOMContentLoaded", function () {
    fetch("./Connection/checkSession.php")
        .then(response => response.json())
        .then(data => {
            if (data.loggedIn) {
                document.getElementById("clientName").textContent = data.user_name;
                document.getElementById("clientEmail").textContent = data.email;
                document.getElementById("clientPhone").textContent = data.phone || "Not available";
                document.getElementById("clientAddress").textContent = data.address || "Not available";
            } else {
                window.location.href = "login.html"; // Redireciona se não estiver logado
            }
        })
        .catch(error => console.error("Error fetching client data:", error));

    // ✅ Corrigindo o botão de logout
    document.getElementById("logoutBtn").addEventListener("click", function (e) {
        e.preventDefault(); // Impede que o botão recarregue a página

        fetch("./Connection/logout.php", { method: "GET", credentials: "same-origin" })
            .then(response => response.json())
            .then(data => {
                console.log(data.message); // Exibe a mensagem no console
                window.location.href = "login.html"; // Redireciona para login
            })
            .catch(error => console.error("Logout error:", error));
    });
});
