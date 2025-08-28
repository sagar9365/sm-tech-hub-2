// ===================== Mobile Menu Toggle =====================
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // Hamburger
document.querySelector('header').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
  document.querySelector('header nav').classList.toggle('active');
});

// ===================== Newsletter / Comment Form using EmailJS =====================
function sendEmail(event){
  event.preventDefault();
  
  // Collect form data
  const form = event.target;
  const formData = new FormData(form);
  let emailContent = '';
  formData.forEach((value, key) => {
    emailContent += `${key}: ${value}\n`;
  });

  // Replace with your EmailJS integration
  alert('Form submitted!\nCheck console for data (replace with EmailJS)');
  console.log('Form Data:\n', emailContent);

  form.reset();
}
