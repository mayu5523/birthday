// Form Validation
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");

emailForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailValue.match(emailPattern)) {
    window.location.href = "thankyou.html";
  } else {
    document.getElementById("formMessage").innerHTML =
      "<span class='text-danger fw-bold'>❌ Please enter a valid email address.</span>";
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
