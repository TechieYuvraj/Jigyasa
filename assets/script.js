// =============================
//       EVENT DATA
// =============================
const events = [
    {
        id: "beat-drop",
        title: "Beat-Drop",
        date: "February 19, 2025",
        time: "08:00 PM - 10:00 PM",
        venue: "OAT",
        image: "images/events/BeatDrop.jpg",
        ruleBook: "files/rawaz-rules.pdf",
        description: "Beat-Drop is a dazzling fashion show that showcases talent and style.",
        coordinators: [
            { name: "Harshvardhan Singh", contact: "+91 81122 80766" },
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" }
        ]
    },
    {
        id: "Singing",
        title: "Singing",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/Singing.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "xFactor",
        title: "xFactor",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/xFactor.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Drama",
        title: "Drama",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/Drama.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "BeatBoxing",
        title: "Beat Boxing",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/BeatBox.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "DJwar",
        title: "DJ war",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/DJwar.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Band",
        title: "Band",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/Band.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Case Investigation",
        title: "Case Investigation",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/CaseInvest.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
        coordinators: [
            { name: "yuvraj Pratap Singh", contact: "+91 739826246" },
            { name: "Bob Williams", contact: "+91 8877665544" }
        ]
    },
    {
        id: "Fashion Show",
        title: "Fashion Show",
        date: "March 15, 2025",
        time: "10:00 AM - 05:00 PM",
        venue: "Main Auditorium",
        image: "images/events/FashionShow.jpg",
        ruleBook: "files/techfest-rules.pdf",
        description: "Tech Fest is a showcase of innovation, technology, and competition.",
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

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake"); // No inner HTML needed
    document.body.appendChild(snowflake);

    // Random properties
    let size = Math.random() * 20 + 10 + "px"; // Vary size
    let left = Math.random() * window.innerWidth + "px";
    let duration = Math.random() * 5 + 3 + "s"; // Random fall speed
    let rotation = Math.random() * 360 + "deg"; // Random rotation start

    // Apply styles
    snowflake.style.left = left;
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.animationDuration = duration;

    // Remove snowflake after animation ends
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000);
}

// Create snowflakes at intervals
setInterval(createSnowflake, 200);
