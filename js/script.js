/* =========================
   SM Tech Hub Scripts
========================= */

// Newsletter form
function sendEmail(event){
  event.preventDefault();
  const form = event.target;
  const email = form.user_email.value.trim();

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    alert("Please enter a valid email address");
    return;
  }

  console.log("Subscribed:", email);
  alert("✅ Thanks for subscribing!");
  form.reset();
}

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector("header nav");

  if(menuBtn && nav){
    menuBtn.addEventListener("click", e => {
      e.stopPropagation();
      menuBtn.classList.toggle("active");
      nav.classList.toggle("show");
    });

    // Close on nav link click
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
        menuBtn.classList.remove("active");
      });
    });

    // Close on outside click
    document.addEventListener("click", e => {
      if(nav.classList.contains("show") &&
         !nav.contains(e.target) && !menuBtn.contains(e.target)){
        nav.classList.remove("show");
        menuBtn.classList.remove("active");
      }
    });
  }

  // Highlight active link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("header nav a").forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add("active");
    }
  });

  // Smooth scroll for # links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if(target){target.scrollIntoView({behavior:"smooth"});}
    });
  });
});
