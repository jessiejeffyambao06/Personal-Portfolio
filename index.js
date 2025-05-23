function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
  }

  // Close menu on link click
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("nav-menu");
    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});




// SwiperJS Initialization (HIWALAY na sa `DOMContentLoaded`)
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".brand-swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 50,
        loop: true,
        centeredSlides: true,
        speed: 2000,
        autoplay: { delay: 0, disableOnInteraction: false },
        allowTouchMove: false,
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".head, .prime, .contact-container, .contactinfo");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    animatedElements.forEach((el) => observer.observe(el));
});



 // Contact Form Submission Handling
 const contactForm = document.getElementById("contactForm");
 if (contactForm) {
     contactForm.addEventListener("submit", async function(event) {
         event.preventDefault();
         const formData = new FormData(this);

         try {
             const response = await fetch(this.action, {
                 method: this.method,
                 body: formData,
                 headers: { "Accept": "application/json" }
             });

             if (response.ok) {
                 document.getElementById("successMessage").style.display = "block";
                 this.reset();
             } else {
                 alert("❌ Failed to send message. Try again later.");
             }
         } catch (error) {
             alert("❌ Error: " + error.message);
         }
     });
 }
