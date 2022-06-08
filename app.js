// Define global variables
const navList = document.querySelector(".nav-list");

const sections = document.querySelectorAll("section");

// Create the nav links
const makeNav = () => {
  let navUl = "";
  sections.forEach((section) => {
    const sectionData = section.dataset.nav;
    const sectionId = section.id;

    navUl += `<li><a href="#${sectionId}" class="nav-link ${sectionId}" data-nav="${sectionId}">${sectionData}</a></li>`;
  });

  navList.innerHTML = navUl;
};

makeNav();

// Add smooth scroll function
const smoothScroll = (e) => {
  e.preventDefault();
  const scrollSect = document.getElementById(
    e.currentTarget.getAttribute("data-nav")
  );

  scrollSect.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
};

document
  .querySelectorAll(".nav-link")
  .forEach((link) => link.addEventListener("click", smoothScroll));

// Add active class to section when viewing
window.addEventListener("scroll", () => {
  let current = "";
  const navLinks = document.querySelectorAll("a.nav-link");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 70) {
      current = section.getAttribute("id");
    }
  });
  sections.forEach((section) => {
    if (section.classList.contains(current)) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
  navLinks.forEach((navLink) => {
    if (navLink.classList.contains(current)) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});
