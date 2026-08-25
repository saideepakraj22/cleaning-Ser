/* ==============================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ==============================
   CLOSE MENU AFTER CLICK
================================ */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==============================
   WHATSAPP BOOKING FORM
================================ */

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const location =
        document.getElementById("location").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =

`Hello SparkClean Services!

I would like to book a cleaning service.

Name: ${name}

Phone: ${phone}

Service: ${service}

Preferred Date: ${date}

Preferred Time: ${time}

Location: ${location}

Additional Message:
${message || "None"}

Please let me know the availability and final price.

Thank you!`;


    const whatsappNumber = "919999999999";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* ==============================
   SET MINIMUM DATE
================================ */

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;
