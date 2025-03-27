document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const eventSelect = document.getElementById("event");
    const teamSizeSelect = document.getElementById("teamSize");
    const memberDetailsDiv = document.getElementById("memberDetails");

    // Mapping team size text to a numeric value
    const teamSizeMapping = {
        "Solo": 1,
        "Duo": 2,
        "Trio": 3,
        "Squad": 4,
        "Five": 5
    };

    function updateTeamSizeOptions() {
        const event = eventSelect.value;
        teamSizeSelect.innerHTML = ""; // Clear previous options

        let teamSizes = [];

        switch (event) {
            case "Ideathon":
                teamSizes = ["Solo", "Duo", "Trio", "Squad"];
                break;
            case "Debate":
            case "Minute to Code":
            case "Poster Making":
                teamSizes = ["Solo"];
                break;
            case "Minute to Pitch":
                teamSizes = ["Solo", "Duo"];
                break;
            case "BGMI":
            case "Free Fire":
                teamSizes = ["Squad"];
                break;
            case "Valorant":
                teamSizes = ["Five"];
                break;
            case "Domain Tech Fair":
                teamSizes = ["Solo", "Duo", "Three", "Four", "Five"];
                break;
            default:
                teamSizes = ["Solo"];
        }

        // Populate dropdown
        teamSizes.forEach(size => {
            let option = document.createElement("option");
            option.value = size;
            option.textContent = size;
            teamSizeSelect.appendChild(option);
        });

        // Disable dropdown if only one option is available
        teamSizeSelect.disabled = teamSizes.length === 1;

        updateMemberFields();
    }

    function updateMemberFields() {
        const teamSizeText = teamSizeSelect.value;
        const teamSize = teamSizeMapping[teamSizeText] || 1; // Default to 1 if undefined
        memberDetailsDiv.innerHTML = ""; // Clear previous fields

        for (let i = 1; i < teamSize; i++) { // Start from 1 since leader is included
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member-field");
            memberDiv.innerHTML = `
                <label>Member ${i} Name:</label>
                <input type="text" class="memberName" required><br><br>
                <label>Member ${i} Email:</label>
                <input type="email" class="memberEmail" required><br><br>
                <label>Member ${i} Phone No.:</label>
                <input type="tel" class="memberPhone" required><br><br>
            `;
            memberDetailsDiv.appendChild(memberDiv);
        }
    }

    eventSelect.addEventListener("change", updateTeamSizeOptions);
    teamSizeSelect.addEventListener("change", updateMemberFields);

    // Initialize defaults on page load
    updateTeamSizeOptions();

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        let memberNames = Array.from(document.querySelectorAll(".memberName")).map(input => input.value);
        let memberPhones = Array.from(document.querySelectorAll(".memberPhone")).map(input => input.value);
        let memberEmails = Array.from(document.querySelectorAll(".memberEmail")).map(input => input.value);

        const formData = {
            event: eventSelect.value,
            leaderName: document.getElementById("leaderName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            teamName: document.getElementById("teamName").value,
            teamSize: teamSizeSelect.value,
            memberNames: memberNames,
            memberPhones: memberPhones,
            memberEmails: memberEmails,
            // utr: document.getElementById("utr").value
        };

        let amount = 100 * 100; // Amount in paise (100 INR)

        var options = {
            key: "rzp_test_r1RvWzed4H1SDO", // Replace with your Razorpay Key ID
            amount: amount,
            currency: "INR",
            name: "Rudrika Fest",
            description: "Event Registration Payment",
            image: "../images/logo/favicon.png",
            handler: function (response) {
                formData.razorpay_payment_id = response.razorpay_payment_id;
                
                fetch("https://script.google.com/macros/s/AKfycbzSKdKXokKT5pHWvDAaeqYCu9ZQ8KASUedzlOBPGa1tHM91z9UFNKy1Xy0r3lDqbUA/exec", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                    mode: 'no-cors'
                });

                // Show success message and redirect
                document.getElementById("successMessage").classList.remove("hidden");
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 3000);
            },
            prefill: {
                name: formData.leaderName,
                email: formData.email,
                contact: formData.phone
            },
            notes: {
                event: formData.event
            },
            theme: {
                color: "#F37254"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    });
});