document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const clientId = params.get("id_client");
    const btUpdate = document.getElementById("btUpdate");
    
    if (clientId) {
        fetchClientData(clientId);
    }
    
    btUpdate.addEventListener("click", function (e) {
        e.preventDefault();
        updateClient(clientId);
    });
});

function fetchClientData(clientId) {
    fetch(`./Connection/getClients.php?id_client=${clientId}`)
        .then(response => response.json())
        .then(data => {
            const client = data.find(c => Number(c.id_client) === Number(clientId));
            if (client) {
                document.getElementById("id_client").value = client.id_client;
                document.getElementById("full_name").value = client.full_name;
                document.getElementById("email").value = client.email;
                document.getElementById("phone").value = client.phone;
                document.getElementById("address").value = client.address;
            } else {
                alert("Error: Client not found.");
            }
        })
        .catch(error => console.error("Error fetching client data:", error));
}

function updateClient(clientId) {
    const formData = new FormData(document.getElementById("editForm"));
    fetch("./Connection/updateClients.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Client updated successfully!");
            window.location.href = "admin.html";
        } else {
            alert("Error updating client: " + data.message);
        }
    })
    .catch(error => console.error("Error updating client:", error));
}