const patientForm =
    document.getElementById("patientForm");


patientForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const patient = {

            id:
                "P" +
                Date.now(),

            name:
                document.getElementById("name")
                    .value.trim(),

            age:
                document.getElementById("age")
                    .value,

            gender:
                document.getElementById("gender")
                    .value,

            phone:
                document.getElementById("phone")
                    .value.trim(),

            location:
                document.getElementById("location")
                    .value.trim(),

            createdAt:
                new Date().toLocaleString()
        };


        if (!patient.name) {

            alert("Please enter patient name.");

            return;
        }


        if (!patient.age) {

            alert("Please enter patient age.");

            return;
        }


        if (!patient.gender) {

            alert("Please select gender.");

            return;
        }


        localStorage.setItem(
            "currentPatient",
            JSON.stringify(patient)
        );


        window.location.href =
            "triage.html";

    }
);