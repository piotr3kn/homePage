console.log("Cześć!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let buttonDeletePhoto = document.querySelector(".js-buttonDeletePhoto");
let themeName = document.querySelector(".js-themeName");
let img = document.querySelector(".js-image");



buttonDeletePhoto.addEventListener("click", () => {
    img.remove();
});


button.addEventListener("click", () => {
    body.classList.toggle("lightTheme");
    body.classList.toggle("darkTheme");
    button.classList.toggle("darkTheme");
    buttonDeletePhoto.classList.toggle("darkTheme");

    themeName.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
});





