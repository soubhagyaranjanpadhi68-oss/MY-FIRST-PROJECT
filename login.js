document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username")
                .value.trim();

        const password =
            document.getElementById("password")
                .value.trim();

        const role =
            document.getElementById("role")
                .value;

        const message =
            document.getElementById("loginMessage");


        if (username.length < 3) {

            message.textContent =
                "Username must contain at least 3 characters.";

            return;
        }


        if (password.length < 4) {

            message.textContent =
                "Password must contain at least 4 characters.";

            return;
        }


        // Demo authentication

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "username",
            username
        );

        localStorage.setItem(
            "role",
            role
        );


        if (role === "healthworker") {

            window.location.href =
                "dashboard.html";

        } else {

            window.location.href =
                "patient.html";
        }

    });