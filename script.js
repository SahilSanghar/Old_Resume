let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-content");


function openTab(event, tabName) {
    for(let tabLink of tabLinks) {
        tabLink.classList.remove("active-links");
    }
    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabName).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}