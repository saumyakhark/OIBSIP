function openNavbar(){
    document .getElementById("sideNavigationBar")
    .style.width = "50%";
}

function closeNavbar(){
    document .getElementById("sideNavigationBar")
    .style.width = "0%";
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
 if (this.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'true');
 } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'false');
 }
});

// Check for saved dark mode preference on load
if (localStorage.getItem('dark-mode') === 'true') {
 darkModeToggle.checked = true;
 body.classList.add('dark-mode');
}

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

$( ".closeSubmit" ).click(function(e) {
    var linkClose = $(this).closest('.modalDialog').find('.close');
    window.location = linkClose.attr('href');  
  });