let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-content");


function openTab(event, tabName) {
    for(let tabLink of tabLinks) {
        tabLink.classList.remove("active-links");
    }
    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    const clickedTab = document.getElementById(tabName);
    if (!clickedTab.classList.contains("active-tab")) {
        event.currentTarget.classList.add("active-links");
        clickedTab.classList.add("active-tab");
    } else {
        event.currentTarget.classList.remove("active-links");
    }
    // event.currentTarget.classList.add("active-links");
    // document.getElementById(tabName).classList.add("active-tab");

}