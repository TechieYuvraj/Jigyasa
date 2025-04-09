const upiBaseLink = "upi://pay?pa=8290162932@ybl&tn=Click%20to%20pay&am=";

// Pricing table based on event and team size
const eventPricing = {
    "Ideathon": { squad: 399 },
    "Word War": { solo: 199 },
    "Bridge Mania": { squad: 299 },
    "Minutes to Pitch": { solo: 199, duo: 299 },
    "Minutes to Code": { solo: 199 },
    "Valorant": { group: 500 },
    "BGMI": { squad: 400 },
    "Free Fire": { squad: 400 },
    "Poster Making": { solo: 199 }
};

// Allowed team sizes based on event type
const eventTeamSizes = {
    "Ideathon": { squad: [4, 4] },
    "Word War": { solo: [1, 1] },
    "Bridge Mania": { squad: [4, 4] },
    "Minutes to Pitch": { solo: [1, 1], duo: [2, 2] },
    "Minutes to Code": { solo: [1, 1] },
    "Valorant": { group: [5, 5] },
    "BGMI": { squad: [4, 4] },
    "Free Fire": { squad: [4, 4] },
    "Poster Making": { solo: [1, 1] }
};

// Form elements
const eventSelect = document.getElementById("eventSelect");
const teamTypeSelect = document.getElementById("teamType");
const teamSizeSelect = document.getElementById("teamSize");
const memberDetails = document.getElementById("memberDetails");
const paymentLink = document.getElementById("paymentLink");
const teamSizeLabel = document.getElementById("teamSizeLabel");

// Handle event selection
eventSelect.addEventListener("change", function () {
    const selectedEvent = this.value;
    updateTeamTypeOptions(selectedEvent);
});

// Ensure team size selection is always visible
teamSizeSelect.classList.remove("hidden");
teamSizeLabel.classList.remove("hidden");

// Update team type options based on selected event
function updateTeamTypeOptions(event) {
    teamTypeSelect.innerHTML = `<option value="" disabled selected>Select Team Type</option>`;

    if (eventPricing[event]) {
        Object.keys(eventPricing[event]).forEach(type => {
            let option = document.createElement("option");
            option.value = type;
            option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            teamTypeSelect.appendChild(option);
        });
    }

    teamSizeSelect.value = "";
    teamSizeSelect.disabled = true; // Default: disable team size until selection
    memberDetails.innerHTML = "";
    updatePaymentLink(); // Reset payment link
}

// Handle team type selection
teamTypeSelect.addEventListener("change", function () {
    const selectedEvent = eventSelect.value;
    const selectedType = this.value;

    if (!eventTeamSizes[selectedEvent] || !eventTeamSizes[selectedEvent][selectedType]) return;

    if (selectedType === "solo") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].solo;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event

    } else if (selectedType === "duo") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].duo;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event

    } else if (selectedType === "trio") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].trio;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event

    } else if (selectedType === "squad") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].squad;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event

    } else if (selectedType === "group") {
        teamSizeSelect.innerHTML = "";
        let [min, max] = eventTeamSizes[selectedEvent].group;
        for (let i = min; i <= max; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            teamSizeSelect.appendChild(option);
        }
        teamSizeSelect.disabled = false; // Enable selection for group
        teamSizeSelect.dispatchEvent(new Event("change")); // Trigger event
    }
});

// Handle team size selection
teamSizeSelect.addEventListener("change", function () {
    const selectedEvent = eventSelect.value;
    const selectedType = teamTypeSelect.value;
    const selectedSize = parseInt(this.value);

    updateMemberFields(selectedSize);
    updatePaymentLink(selectedEvent, selectedType, selectedSize);
});

// Function to dynamically update member input fields
function updateMemberFields(teamSize) {
    memberDetails.innerHTML = "";
    if (teamSize > 1) {
        memberDetails.classList.remove("hidden");
        for (let i = 1; i < teamSize; i++) {  // Start from 1 (Leader is already there)
            let div = document.createElement("div");
            div.innerHTML = `
                <label>Member ${i} Name:</label>
                <input type="text" name="memberName${i}" class="memberName" required><br><br>
                <label>Member ${i} Email:</label>
                <input type="email" name="memberEmail${i}" class="memberEmail" required><br><br>
                <label>Member ${i} Phone No.:</label>
                <input type="tel" name="memberPhone${i}" class="memberPhone" required pattern="[0-9]{10}" title="Enter 10-digit phone number"><br><br>
                <label>Member ${i} Roll No.:</label>
                <input type="text" name="memberRollNo${i}" class="memberRollNo"><br><br>
            `;
            memberDetails.appendChild(div);
        }
    } else {
        memberDetails.classList.add("hidden");
    }
}

// Update the UPI payment link
function updatePaymentLink(event = "", type = "", size = 1) {
    if (!event || !type) {
        paymentLink.href = "#"; // Reset if no selection
        return;
    }

    let amount = eventPricing[event][type] || 0;
    paymentLink.href = `${upiBaseLink}${amount}&cu=INR`;
}

document.getElementById("leaderMobile").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (this.value.length > 10) this.value = this.value.slice(0, 10); // Limit to 10 digits
});

document.getElementById("leaderEmail").addEventListener("input", function () {
    this.value = this.value.replace(/\s/g, ""); // Remove spaces
});

document.getElementById("generateQR").addEventListener("click", function () {
    let upiLink = paymentLink.href;

    if (upiLink === "#") {
        alert("Please select an event and team type to generate the payment link.");
        return;
    }

    let qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.innerHTML = ""; // Clear any previous QR codes

    let qrCode = new QRCode(qrCodeContainer, {
        text: upiLink,
        width: 250,
        height: 250,
        colorDark: "#000", // Black QR code
        colorLight: "#fff", // White background
        correctLevel: QRCode.CorrectLevel.H // High error correction
    });
});

import { validRollNumbers } from "./rollNumbers.js?v=1.3"; // Adjust the path if needed

document.addEventListener("DOMContentLoaded", function () {
    const gitCheckbox = document.getElementById("gitStudent");
    const rollNoField = document.getElementById("rollNoField");
    const utrField = document.getElementById("utrNumber");
    const payButton = document.getElementById("paymentLink");
    const scanToPayButton = document.getElementById("generateQR");
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    const gitpayment = document.getElementById("gitpayment");
    const gitUTR = document.getElementById("gitUTR");

    // Toggle visibility based on GIT checkbox
    gitCheckbox.addEventListener("change", function () {
        if (this.checked) {
            rollNoField.style.display = "block"; // Show Roll No field
            utrField.style.display = "none"; // Hide UTR field
            payButton.style.display = "none"; // Hide Pay Now button
            scanToPayButton.style.display = "none"; // Hide Scan to Pay button
            qrCodeContainer.style.display = "none"; // Hide QR Code container
            gitpayment.style.display = "none"; // Hide GIT label
            gitUTR.style.display = "none"; // Hide UTR label
            utrField.removeAttribute("required");
        } else {
            rollNoField.style.display = "none";
            utrField.style.display = "block";
            payButton.style.display = "inline-block";
            scanToPayButton.style.display = "inline-block";
            qrCodeContainer.style.display = "block";
            gitpayment.style.display = "block"; // Show GIT label
            gitUTR.style.display = "block"; // Show UTR label
            utrField.setAttribute("required", "true");
        }
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const submitButton = this.querySelector('button[type="submit"]');
    if (submitButton.disabled) return; // Prevent multiple submissions
    submitButton.disabled = true;

    // Show loading spinner
    document.getElementById("loadingOverlay").style.display = "flex";

    const gitCheckbox = document.getElementById("gitStudent");
    const rollNoInput = document.getElementById("rollNo").value.trim();

    // Validate Roll No if GIT checkbox is checked
    if (gitCheckbox.checked) {
        if (!validRollNumbers.includes(rollNoInput)) {
            alert("Invalid Roll Number! Please enter a valid GIT Roll Number.");
            submitButton.disabled = false;
            document.getElementById("loadingOverlay").style.display = "none";
            return;
        }
    }

    // Validate Member Roll Numbers
    let invalidRollNumbers = [];
    document.querySelectorAll(".memberRollNo").forEach(input => {
        let rollNo = input.value.trim();
        if (rollNo && !validRollNumbers.includes(rollNo)) {
            invalidRollNumbers.push(rollNo);
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
        }
    });

    if (invalidRollNumbers.length > 0) {
        alert("Invalid Member Roll Numbers: " + invalidRollNumbers.join(", "));
        submitButton.disabled = false;
        document.getElementById("loadingOverlay").style.display = "none";
        return;
    }

    // Proceed with form submission to the server
    fetch("https://script.google.com/macros/s/AKfycby4Nmu_iLGDScR8MNf_aEWA6t9Zfhs1SEH9cAK56poubgNR6RGQqLD2kDQlrtxFDQ0U/exec", {
        method: "POST",
        body: new FormData(this)
    })
        .then(response => response.text())
        .then(data => {
            alert("Registration Successful!");
            window.location.href = "index.html";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
            submitButton.disabled = false;
        })
        .finally(() => {
            document.getElementById("loadingOverlay").style.display = "none";
        });
});

