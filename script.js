/* =========================
   QUTE FITNESS CENTER JS
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent = new Date().getFullYear();


/* =========================
   OPENING HOURS
========================= */

function updateOpeningStatus() {

    const now = new Date();

    const day = now.getDay();

    const currentMinutes =
        now.getHours() * 60 + now.getMinutes();

    const openStatus = document.getElementById("openStatus");
    const liveStatus = document.getElementById("liveStatus");
    const todayHours = document.getElementById("todayHours");

    /*
        JavaScript:
        Sunday = 0
        Monday = 1
        Tuesday = 2
        ...
        Saturday = 6
    */

    if (day === 0) {

        todayHours.textContent = "Closed";
        openStatus.textContent = "Closed Today";
        liveStatus.textContent = "Closed Today";

        return;
    }


    const morningOpen = 5 * 60 + 30;   // 5:30 AM
    const morningClose = 11 * 60;      // 11:00 AM

    const eveningOpen = 16 * 60 + 30;  // 4:30 PM
    const eveningClose = 21 * 60 + 30; // 9:30 PM


    const isMorningOpen =
        currentMinutes >= morningOpen &&
        currentMinutes < morningClose;

    const isEveningOpen =
        currentMinutes >= eveningOpen &&
        currentMinutes < eveningClose;


    const isOpen = isMorningOpen || isEveningOpen;


    if (isOpen) {

        todayHours.textContent =
            "5:30 AM – 11 AM • 4:30 PM – 9:30 PM";

        openStatus.textContent = "OPEN NOW";
        liveStatus.textContent = "OPEN NOW";

    } else {

        todayHours.textContent =
            "5:30 AM – 11 AM • 4:30 PM – 9:30 PM";

        openStatus.textContent = "CLOSED NOW";
        liveStatus.textContent = "CLOSED NOW";

    }

}


updateOpeningStatus();

/* Update every minute */

setInterval(updateOpeningStatus, 60000);


/* =========================
   WHATSAPP ENQUIRY FORM
========================= */

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const goal =
        document.getElementById("goal").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !goal) {

        alert("Please fill in your name, phone number and fitness goal.");

        return;

    }


    /*
        Qute Fitness Center WhatsApp number
        98455 68669
    */

    const whatsappNumber = "919845568669";


    const whatsappMessage =
`Hi Qute Fitness Center,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Fitness Goal: ${goal}

Message:
${message || "I would like to know more about joining Qute Fitness Center."}

Thank you.`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5,5,5,0.98)";

    } else {

        header.style.background =
            "rgba(8,8,8,0.92)";

    }

});


/* =========================
   PHONE NUMBER VALIDATION
========================= */

const phoneInput =
    document.getElementById("phone");


phoneInput.addEventListener("input", function() {

    this.value =
        this.value.replace(/[^0-9+ ]/g, "");

});