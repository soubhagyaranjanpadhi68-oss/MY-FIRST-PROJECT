// ===============================
// COMMON APPLICATION FUNCTIONS
// ===============================

function logout() {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    window.location.href = "index.html";
}


function requireLogin() {

    const loggedIn =
        localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {

        window.location.href = "index.html";

        return false;
    }

    return true;
}


function showUsername() {

    const username =
        localStorage.getItem("username");

    const elements =
        document.querySelectorAll("#welcomeUser");

    elements.forEach(element => {

        element.textContent =
            username
                ? `Hello, ${username}`
                : "";

    });
}


function goBack(page) {

    window.location.href = page;
}


function goToDashboard() {

    window.location.href =
        "dashboard.html";
}


// Run common login check

if (
    !window.location.pathname.endsWith("index.html") &&
    !window.location.pathname.endsWith("/")
) {

    requireLogin();
}

showUsername();