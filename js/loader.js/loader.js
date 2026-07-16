/* ===========================================
   SABILU TAUBAH ESPORT
   LOADER V1.0
=========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const logo = document.querySelector(".loader-logo");

    const title = document.querySelector("#loader h1");

    const subtitle = document.querySelector("#loader p");

    const progress = document.querySelector(".loader-bar");

    // Progress selesai
    setTimeout(() => {

        // Logo mengecil
        logo.style.transition = "1s ease";
        logo.style.transform = "scale(.45) translateY(-220px)";

        // Judul menghilang
        title.style.transition = ".5s";
        title.style.opacity = "0";

        subtitle.style.transition = ".5s";
        subtitle.style.opacity = "0";

        progress.style.transition = ".5s";
        progress.style.opacity = "0";

    },2800);


    // Loader menghilang
    setTimeout(() => {
        
        document
.getElementById("navbarLogo")
.classList.add("show");

        loader.classList.add("loader-hide");

    },3700);

});