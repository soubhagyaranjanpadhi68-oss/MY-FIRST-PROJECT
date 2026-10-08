function performTriage() {

    const symptoms =
        document.getElementById(
            "symptoms"
        ).value
        .trim()
        .toLowerCase();


    const severity =
        document.getElementById(
            "severity"
        ).value;


    const duration =
        document.getElementById(
            "duration"
        ).value;


    const imageInput =
        document.getElementById(
            "medicalImage"
        );


    if (!symptoms) {

        alert(
            "Please enter or speak your symptoms before assessment."
        );

        return;
    }


    // ---------------------------------
    // DEMO RULE-BASED TRIAGE
    // ---------------------------------

    const emergencyKeywords = [

        "unconscious",
        "heavy bleeding",
        "severe chest pain",
        "not breathing",
        "difficulty breathing",
        "breathing problem"

    ];


    const urgentKeywords = [

        "high fever",
        "severe pain",
        "persistent vomiting",
        "dehydration",
        "dizziness",
        "fainting"

    ];


    let priority =
        "ROUTINE";


    let recommendation =
        "Routine healthcare assessment is recommended.";


    let reason =
        "No high-priority demo indicator detected.";


    const hasEmergency =
        emergencyKeywords.some(
            word => symptoms.includes(word)
        );


    const hasUrgent =
        urgentKeywords.some(
            word => symptoms.includes(word)
        );


    if (
        severity === "severe" ||
        hasEmergency
    ) {

        priority =
            "EMERGENCY";

        recommendation =
            "Seek immediate professional medical assessment.";

        reason =
            "Severe symptoms or a high-priority keyword was entered.";

    }

    else if (
        severity === "moderate" ||
        hasUrgent
    ) {

        priority =
            "URGENT";

        recommendation =
            "Professional healthcare assessment is recommended soon.";

        reason =
            "Moderate severity or an urgent demo keyword was entered.";

    }


    const patient =
        JSON.parse(
            localStorage.getItem(
                "currentPatient"
            )
        );


    if (!patient) {

        alert(
            "Patient information not found. Please start again."
        );

        window.location.href =
            "patient.html";

        return;
    }


    const result = {

        id:
            "TR-" + Date.now(),

        patientId:
            patient.id,

        patientName:
            patient.name,

        age:
            patient.age,

        gender:
            patient.gender,

        symptoms:
            symptoms,

        severity:
            severity,

        duration:
            duration,

        imageUploaded:
            imageInput.files.length > 0,

        priority:
            priority,

        recommendation:
            recommendation,

        reason:
            reason,

        time:
            new Date().toLocaleString()

    };


    // Save current result

    localStorage.setItem(
        "currentResult",
        JSON.stringify(result)
    );


    // Add to dashboard

    let patients =
        JSON.parse(
            localStorage.getItem(
                "patients"
            )
        ) || [];


    patients.unshift(result);


    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );


    // Move to result page

    window.location.href =
        "result.html";
}