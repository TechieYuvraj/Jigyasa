// =============================
//       EVENT DATA
// =============================
const events = [
    {
        id: "Ideathon",
        title: "Ideathon",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/ideathon.png",
        ruleBook: "https://drive.google.com/file/d/1NOCBTRhAKqEsiHU9Cs3HK3oYjENzPinU/view?usp=sharing",
        register: "registration.html",
        description: "A platform for innovative thinkers to present groundbreaking ideas that solve real-world problems. Participants pitch their concepts to a panel of judges.",
        note: "The rules of Ideathon may vary based on the situations.",
        coordinators: [
            { name: "Gavesh Jain", contact: "+91 7742908700" },
            { name: "Anurag Kumar", contact: "+91 8824898063" },
            { name: "Aditi Agrawal", contact: "+91 7665225720" }
        ]
    },
    {
        id: "Word War",
        title: "Word War",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/debate.png",
        ruleBook: "https://drive.google.com/file/d/1vTXOWecKXBB1MkbEHJfDci2lqfqOsmp8/view?usp=drive_link",
        register: "registration.html",
        description: "A battle of intellect and arguments where participants defend or oppose a given topic with logic, evidence, and persuasion.",
        note: "The rules of Word War may vary based on the situations.",
        coordinators: [
            { name: "Satyam Tiwari", contact: "+91 6307074481" },
            { name: "Mudit Paliwal", contact: "+91 7877065009" },
            { name: "Mayank Ghiya", contact: "+91 7980996825"}
        ]
    },
    {
        id: "Minutes to Pitch",
        title: "Minutes to Pitch",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/minute-to-pitch.png",
        ruleBook: "https://drive.google.com/file/d/1Lr1cuxAjfG2d1SCLNY8aK1vL_JBnU8Eb/view?usp=drive_link",
        register: "registration.html",
        description: "A fast-paced competition where participants have just one minute to deliver a compelling pitch on a given topic or idea.",
        note: "The rules of Minutes to Pitch may vary based on the situations.",
        coordinators: [
            { name: "Tej Prakash Singh", contact: "+91 7230956167" },
            { name: "Vansh Patel", contact: "+91 9737879397" },
            { name: "Tejendar Kaur", contact: "+91 7878511071" }
        ]
    },
    {
        id: "Minutes to Code",
        title: "Minutes to Code",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/MinuteToCode.png",
        ruleBook: "https://drive.google.com/file/d/1YIk_UkV_EnRNk1kI49N86xvxzW8jVy_d/view?usp=drive_link",
        register: "registration.html",
        description: "A coding challenge that tests speed, logic, and problem-solving skills within a limited time frame.",
        note: "The rules of Minutes to Code may vary based on the situations.",
        coordinators: [
            { name: "Gavesh Jain", contact: "+91 7742908700" },
            { name: "Anirudh sharma", contact: "+91 6378865401" },
            { name: "Vineet Kumar", contact: "+91 9928422189" }
        ]
    },
    {
        id: "Poster Making",
        title: "Creativita",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/posterdesign.png",
        ruleBook: "https://drive.google.com/file/d/1sBkDYJ7PPizCJ72JI-7s4XHlzt-CY9Fe/view?usp=drive_link",
        register: "registration.html",
        description: "A creative event where participants visually express ideas and themes through artistic poster designs.",
        note: "The rules of Creativita may vary based on the situations.",
        coordinators: [
            { name: "Vedika Sharda", contact: "+91 7339980017" },
            { name: "Aditi Shrivastav", contact: "+91 6261174228" },
            { name: "Ayushi Maheshwari", contact: "+91 9828192980" },
        ]
    },
    {
        id: "Bridge Mania",
        title: "Bridge Mania",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/bridge-mania.png",
        ruleBook: "https://drive.google.com/file/d/1TJTmbu9R7FeoNItORQRZjotuaF-urDdN/view?usp=sharing",
        register: "registration.html",
        description: "Design and construct a sturdy bridge using limited resources. Test your creativity, engineering skills, and structural strength to see if your bridge can withstand the ultimate challenge!",
        note: "The rules of Bridge Maniya may vary based on the situations.",
        coordinators: [
            { name: "Saksham Garg", contact: "+91 6378322020" },
            { name: "Sakshi Saxena", contact: "+91 6378168972" }
        ]
    },
    {
        id: "BGMI",
        title: "BGMI",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/bgmi.jpg",
        ruleBook: "https://drive.google.com/file/d/1l5xuENoh2CGaM5UHdVeWjw-M7Ivgkxzv/view?usp=drive_link",
        note: "The rules of BGMI may vary based on the situations.",
        register: "registration.html",
        description: "Survival battle royale, where only the best can claim victory.",
        coordinators: [
            { name: "Yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Aamir Khan", contact: "+91 8299328515" },
            { name: "Rohan Verma", contact: "+91 7665001073" }
        ]
    },
    {
        id: "Free Fire",
        title: "Free Fire",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/free-fire.webp",
        ruleBook: "https://drive.google.com/file/d/1bGPqD6nFqUZXVd3c_bW2aLfBV8IGJquv/view?usp=drive_link",
        register: "registration.html",
        description: "A test of reflexes and survival instincts in an action-packed battle royale.",
        note: "The rules of Free Fire may vary based on the situations.",
        coordinators: [
            { name: "Bhavesh Singhal", contact: "+91 9509173908" },
            { name: "Raj Birla", contact: "+91 9829903411" },
            { name: "Mayank Aitan", contact: "+91 6375836562" }
        ]
    },
    {
        id: "Valorant",
        title: "Valorant",
        date: "April 17, 2025",
        time: "Waiting for time",
        venue: "To be announced",
        image: "images/events/valorant.png",
        ruleBook: "https://drive.google.com/file/d/1DUulO4VMndWwwLRoQcHhqGp7O5eKo7rz/view?usp=drive_link",
        register: "registration.html",
        description: "Tactical 5v5 shooter where precision and strategy decide the winner.",
        note: "The rules of Valorant may vary based on the situations.",
        coordinators: [
            { name: "Gavesh Jain", contact: "+91 7742908700" },
            { name: "Satyam Tiwari", contact: "+91 6307074481" },
            { name: "Nikhil Lakhara", contact: "+91 7415940360" }
        ]
    }
];

// =============================
//      LOAD EVENTS ON PAGE
// =============================
function loadEvents() {
    const eventContainer = document.getElementById("event-container");
    if (!eventContainer) return; // Prevent errors if element is missing
    eventContainer.innerHTML = ""; // Clear existing content

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("card");
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.time}</p>
            <button onclick="viewEvent('${event.id}')">View Details</button>
        `;
        eventContainer.appendChild(eventCard);
    });
}

// =============================
//      REDIRECT TO EVENT PAGE
// =============================
function viewEvent(eventId) {
    window.location.href = `event.html?event=${encodeURIComponent(eventId)}`;
}

// =============================
//     LOAD EVENT DETAILS
// =============================
function loadEventFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("event");

    if (!eventId) {
        console.error("No event ID found in URL.");
        return;
    }

    loadEvent(eventId);
}

// =============================
//     DISPLAY EVENT DETAILS
// =============================
function loadEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) {
        console.error("Event not found:", eventId);
        return;
    }

    // Update HTML elements dynamically
    document.getElementById("event-title").innerText = event.title;
    document.getElementById("event-date").innerText = event.date;
    document.getElementById("event-time").innerText = event.time;
    document.getElementById("event-venue").innerText = event.venue;
    document.getElementById("event-image").src = event.image;
    document.getElementById("rule-book").href = event.ruleBook;
    document.getElementById("register").href = event.register; 
    document.getElementById("event-description").innerText = event.description;
    document.getElementById("event-note").innerText = event.note;

    // Update Coordinator Section
    const coordinatorContainer = document.getElementById("coordinator-section");
    if (coordinatorContainer) {
        coordinatorContainer.innerHTML = ""; // Clear previous content

        event.coordinators.forEach(coordinator => {
            const coordinatorCard = document.createElement("div");
            coordinatorCard.classList.add("coordinator");

            coordinatorCard.innerHTML = `
                <h4>${coordinator.name}</h4>
                <p>Contact: ${coordinator.contact}</p>
            `;
            coordinatorContainer.appendChild(coordinatorCard);
        });
    }
}

// =============================
//   LOAD EVENTS ON PAGE LOAD
// =============================
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("event-container")) {
        loadEvents(); // Load events on the homepage
    }
    if (document.getElementById("event-title")) {
        loadEventFromURL(); // Load event details on the event page
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");

    mobileMenu.addEventListener("click", function() {
        menu.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});

// Function to get the event ID from the URL (?event= format)
function getEventIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("event"); // Extracts the event ID correctly
}

// Function to display coordinators for the selected event
function displayCoordinators(eventId) {
    const coordinatorsList = document.getElementById("coordinators-list");
    coordinatorsList.innerHTML = ""; // Clear previous coordinators

    // Find the event matching the eventId
    const selectedEvent = events.find(event => event.id === eventId);
    if (!selectedEvent) {
        coordinatorsList.innerHTML = "<p>No coordinators found for this event.</p>";
        return;
    }

    // Loop through the coordinators of the selected event and add them dynamically
    selectedEvent.coordinators.forEach((coordinator) => {
        const coordinatorCard = document.createElement("div");
        coordinatorCard.classList.add("team-card");

        // Name
        const nameElement = document.createElement("h3");
        nameElement.textContent = coordinator.name;

        // Contact Number
        const contactElement = document.createElement("p");
        contactElement.textContent = `📞 ${coordinator.contact}`;

        // WhatsApp Button
        const whatsappLink = document.createElement("a");
        whatsappLink.href = `https://wa.me/${coordinator.contact.replace(/\s+/g, '')}`;
        whatsappLink.target = "_blank";
        whatsappLink.classList.add("whatsapp-button");
        whatsappLink.innerHTML = "Chat on WhatsApp 💬";

        // Append elements
        coordinatorCard.appendChild(nameElement);
        coordinatorCard.appendChild(contactElement);
        coordinatorCard.appendChild(whatsappLink);
        coordinatorsList.appendChild(coordinatorCard);
    });
}

// Execute when page loads
document.addEventListener("DOMContentLoaded", () => {
    const eventId = getEventIdFromURL(); // Get event ID from URL
    if (eventId) {
        displayCoordinators(eventId); // Display coordinators for that event
    }
});

// Hide preloader after the page loads
document.addEventListener("DOMContentLoaded", function () {
    let letters = document.querySelectorAll(".letter");

    // Animate each letter with a delay
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animationDelay = `${index * 0.2}s`;
            letter.classList.add("animate");
        }, index * 300);
    });

    // Hide preloader after animation completes
    setTimeout(() => {
        document.getElementById("preloader").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("content").style.display = "block"; // Show main content
        }, 1000);
    }, 3900);
});

const music = document.getElementById("bgm");
music.volume = 0.4; // Set volume to 30%    