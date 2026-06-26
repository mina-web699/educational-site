// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.querySelector("#theme-toggle");
    if (!themeBtn) return; 

    const themeIcon = themeBtn.querySelector("i");
    const savedMode = localStorage.getItem("user-theme");

    if (savedMode === "light-mode") {
        document.body.classList.add("light-mode");
        if (themeIcon) {
            themeIcon.classList.replace("fa-moon", "fa-sun"); 
        }
    }

    themeBtn.addEventListener("click", function (e) {
        e.preventDefault(); 
        const isLight = document.body.classList.toggle("light-mode");
        
        if (isLight) {
            localStorage.setItem("user-theme", "light-mode");
            if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("user-theme", "dark-mode");
            if (themeIcon) themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});

// Custom Dropdown Functionality
const dropdown = document.querySelector('.custom-dropdown');
const selected = document.querySelector('.dropdown-selected');
const options = document.querySelectorAll('.dropdown-options li');
const toast = document.getElementById('custom-toast');

selected.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        const targetUrl = option.getAttribute('data-url');
        
        if (targetUrl && targetUrl !== '#') {
            dropdown.classList.remove('open');
            window.location.href = targetUrl;
        } else {
            dropdown.classList.remove('open');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    });
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});

// Advanced Subject Filter Functionality
const trackButtons = document.querySelectorAll('.track-btn');
const subjectCards = document.querySelectorAll('.subject-card');

trackButtons.forEach(button => {
    button.addEventListener('click', () => {
        trackButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        subjectCards.forEach(card => {
            const cardTrack = card.getAttribute('data-track');
            
            if (
                filterValue === 'all' || 
                cardTrack === filterValue || 
                cardTrack === 'common' || 
                (cardTrack && cardTrack.includes(filterValue))
            ) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';  
            }
        });
    });
});

let current = new Date()

const hour = current.getHours()

if (hour >= 20 || hour < 7) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

//======================================== calculator ==================
let divNums = document.querySelector(".numsOfDays");
let pProg = document.querySelector(".parsentprog");

let startSchool = new Date("2026-08-01"); 
let endSchool = new Date("2027-06-30");

let days = (endSchool - startSchool) / 1000 / 60 / 60 / 24 ;
let nowDay = new Date();

let contuineDay =  Math.floor(( endSchool - nowDay) / 1000 / 60 / 60 / 24)  ;

if(contuineDay > days){
contuineDay = days
}
else if (contuineDay < 0){ 
contuineDay = 0 ;
}

let progDays =  (days  - contuineDay) ;
if (progDays < 0) {
    progDays = 0;
}

let range = progDays / days * 100;

divNums.innerHTML = `المتبقي من السنة الدراسية: <span class="neon-number">${contuineDay}</span> يوم`;

pProg.style.width = `${Math.floor(range)}%`

pProg.innerText = `${Math.floor(range)}%`;
