// =============================
//       EVENT DATA
// =============================
const events = [
    {
        id: "Ideathon",
        title: "Ideathon",
        date: "April 16, 2025",
        time: "10:00 AM - 01:00 PM",
        venue: "To be announced",
        image: "images/events/BeatDrop.jpg",
        ruleBook: "files/rawaz-rules.pdf",
        description: "A platform for innovative thinkers to present groundbreaking ideas that solve real-world problems. Participants pitch their concepts to a panel of judges.",
        coordinators: [
            { name: "Harshvardhan Singh", contact: "+91 81122 80766" },
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" }
        ]
    },
    {
        id: "Debate",
        title: "Debate",
        date: "April 16, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/Singing.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "A battle of intellect and arguments where participants defend or oppose a given topic with logic, evidence, and persuasion.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Minute to Code",
        title: "Minute to Code",
        date: "April 16, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/xFactor.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "A coding challenge that tests speed, logic, and problem-solving skills within a limited time frame.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Minute to Pitch",
        title: "Minute to Pitch",
        date: "April 16, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/Drama.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "A fast-paced competition where participants have just one minute to deliver a compelling pitch on a given topic or idea.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Poster Making",
        title: "Poster Making",
        date: "April 16, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/BeatBox.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "A creative event where participants visually express ideas and themes through artistic poster designs.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "BGMI",
        title: "BGMI",
        date: "April 16, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/DJwar.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Survival battle royale, where only the best can claim victory.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Free Fire",
        title: "Free Fire",
        date: "April 16, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/Band.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "A test of reflexes and survival instincts in an action-packed battle royale.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Valorant",
        title: "Valorant",
        date: "April 16, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/CaseInvest.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tactical 5v5 shooter where precision and strategy decide the winner.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Domain Tech Fair",
        title: "Domain Tech Fair",
        date: "April 17, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "To be announced",
        image: "images/events/CaseInvest.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "A showcase of emerging technologies, projects, and innovations in various technical domains, offering a platform for networking and learning.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
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
    document.getElementById("event-description").innerText = event.description;

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

// function createSnowflake() {
//     const snowflake = document.createElement("div");
//     snowflake.classList.add("snowflake"); // No inner HTML needed
//     document.body.appendChild(snowflake);

//     // Random properties
//     let size = Math.random() * 20 + 10 + "px"; // Vary size
//     let left = Math.random() * window.innerWidth + "px";
//     let duration = Math.random() * 5 + 3 + "s"; // Random fall speed
//     let rotation = Math.random() * 360 + "deg"; // Random rotation start

//     // Apply styles
//     snowflake.style.left = left;
//     snowflake.style.width = size;
//     snowflake.style.height = size;
//     snowflake.style.animationDuration = duration;

//     // Remove snowflake after animation ends
//     setTimeout(() => {
//         snowflake.remove();
//     }, parseFloat(duration) * 1000);
// }

// // Create snowflakes at intervals
// setInterval(createSnowflake, 200);
