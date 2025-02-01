document.addEventListener("DOMContentLoaded", function () {
    // Simulating session storage (use actual authentication system)
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        // If no user is logged in, redirect to login page
        window.location.href = "login.html";
    } else {
        // Populate user details
        document.getElementById("clientName").innerText = user.full_name;
        document.getElementById("clientEmail").innerText = user.email;
        document.getElementById("clientPhone").innerText = user.phone;
        document.getElementById("clientAddress").innerText = user.address;
    }

    // Logout function
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("user"); // Clear user session
        window.location.href = "index.html";
    });
});
