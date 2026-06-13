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