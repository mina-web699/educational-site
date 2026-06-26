

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

const dropdown = document.querySelector('.custom-dropdown');
const selected = document.querySelector('.dropdown-selected');
const options = document.querySelectorAll('.dropdown-options li');
const toast = document.getElementById('custom-toast');

// 1. تكة الفتح والقفل عند الضغط
selected.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

// 2. التنقل الذكي بين المراحل الدراسية
options.forEach(option => {
  option.addEventListener('click', () => {
    const targetUrl = option.getAttribute('data-url');
    
    if (targetUrl && targetUrl !== '#') {
      // قفل القائمة والانتقال فوراً للمسار المكتوب في الـ HTML
      dropdown.classList.remove('open');
      window.location.href = targetUrl;
    } else {
      // إظهار التوست النيون الشيك لو المرحلة قريباً
      dropdown.classList.remove('open');
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  });
});

// 3. قفل القائمة التلقائي عند الضغط في الخارج
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

let current = new Date()

const hour = current.getHours()

if (hour >= 20 || hour < 7) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}



window.onload;
let end = new Date()
