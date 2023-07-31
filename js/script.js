

/*=asda==*/
let navbar = document.querySelector("nav");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav ul[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/*SCROLL */
window.onscroll = function() {
  scroll();
};

function scroll() {
  if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
  ) {
     document.getElementById("nav").style.top = "-80px";
  } else {
     document.getElementById("nav").style.top = "0";
  }
}

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
