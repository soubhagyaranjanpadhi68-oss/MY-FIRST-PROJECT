function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported in this browser. Try Google Chrome."
        );

        return;
    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;


    const status =
        document.getElementById(
            "voiceStatus"
        );


    status.textContent =
        "🎤 Listening... Please speak.";


    recognition.start();


    recognition.onresult =
        function(event) {

            const speechText =
                event.results[0][0]
                    .transcript;


            const symptoms =
                document.getElementById(
                    "symptoms"
                );


            if (symptoms.value.trim()) {

                symptoms.value +=
                    " " + speechText;

            } else {

                symptoms.value =
                    speechText;
            }


            status.textContent =
                "✓ Voice input added.";

        };


    recognition.onerror =
        function() {

            status.textContent =
                "Voice input failed. Please try again.";

        };


    recognition.onend =
        function() {

            if (
                status.textContent.includes(
                    "Listening"
                )
            ) {

                status.textContent =
                    "Voice recording stopped.";

            }

        };
}