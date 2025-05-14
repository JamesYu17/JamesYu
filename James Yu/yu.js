function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function contactEmail() {
  alert("Email: iamjamesyu17@gmail.com\nFeel free to reach out!");
}

function contactFacebook() {
  alert("Facebook: James Carl Yu\nFeel free to reach out!");
}


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
