// @ts-nocheck
document
    .querySelector("#mobile-menu-open")
    .addEventListener("click", () => {
    const menuElem = document.querySelector("#mobile-menu");
    menuElem.classList.remove("hide-menu");
    menuElem.classList.add("show-menu");
    document.body.style.overflow = "hidden";
    });

document
    .querySelector("#mobile-menu-close")
    .addEventListener("click", () => {
    const menuElem = document.querySelector("#mobile-menu");
    menuElem.classList.remove("show-menu");
    menuElem.classList.add("hide-menu");
    document.body.style.overflow = "auto";
    });