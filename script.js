// Get all tab links and tab contents
let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-content");

// Add event listeners to each tab link
tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener("click", () => {
    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });

    // Remove "active-links" class from all tab links
    tabLinks.forEach((link) => {
      link.classList.remove("active-links");
    });

    // Show the clicked tab content
    tabContents[index].style.display = "block";

    // Add "active-links" class to the clicked tab link
    tabLink.classList.add("active-links");
  });
});

let sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
}

function closeMenu() {
  sidemenu.style.right = "-200px";
}
