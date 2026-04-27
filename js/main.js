
//MENU TOGGLE

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });



// TESTIMONIALS SLIDER

const track = document.getElementById("testimonialTrack");
const cards = document.querySelectorAll("#testimonialTrack > div");
let currentIndex = 0;

function getVisibleCards() {
  return window.innerWidth >= 768 ? 2 : 1;
}

function slideTestimonials() {
  const visibleCards = getVisibleCards();
  currentIndex++;

  if (currentIndex > cards.length - visibleCards) {
    currentIndex = 0;
  }

  const moveAmount = 100 / visibleCards;
  track.style.transform = `translateX(-${currentIndex * moveAmount}%)`;
}

setInterval(slideTestimonials, 4000);

// FAQ TOGGLE

function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("span");

  content.classList.toggle("hidden");
  icon.textContent = content.classList.contains("hidden") ? "+" : "−";
}


// DESKTOP NAV
const navLinks = document.querySelectorAll("#desktopNav a");

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    navLinks.forEach(item => {
      item.classList.remove(
        "text-[#1D4ED8]",
        "border-b-2",
        "border-[#1D4ED8]",
        "pb-1"
      );
    });

    this.classList.add(
      "text-[#1D4ED8]",
      "border-b-2",
      "border-[#1D4ED8]",
      "pb-1"
    );

    const targetId = this.getAttribute("href");

    if (targetId !== "#") {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

// MOBILE NAV
const mobileLinks = document.querySelectorAll("#mobileMenu a");

mobileLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      mobileMenu.classList.add("hidden");

      if (targetId !== "#") {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  });
});
