document.addEventListener("DOMContentLoaded", function () {
    // Load the header dynamically
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            generateBreadcrumb();
        })
        .catch(error => console.error("Error loading header:", error));
});

function generateBreadcrumb() {
    console.log("generateBreadcrumb function called");

    let path = window.location.pathname.split("/").pop(); // Get the current page file name
    console.log("Current path:", path);

    let breadcrumbContainer = document.createElement("nav");
    breadcrumbContainer.setAttribute("aria-label", "breadcrumb");
    breadcrumbContainer.innerHTML = '<ol class="breadcrumb mt-3 ms-3"></ol>';

    let breadcrumbList = breadcrumbContainer.querySelector(".breadcrumb");
    let homeCrumb = '<li class="breadcrumb-item"><a href="index.html">Home</a></li>';
    
    breadcrumbList.innerHTML = homeCrumb;
   

    if (path && path !== "index.html") {
        let formattedPath = path.replace(/-/g, " ").replace(".html", "");
        formattedPath = formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1); // Capitalize first letter
        console.log("Formatted path:", formattedPath);
        breadcrumbList.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${formattedPath}</li>`;
       
    }

    let headerElement = document.querySelector("header");
    if (headerElement) {
        console.log("Header element found, appending breadcrumb");
        headerElement.appendChild(breadcrumbContainer);
    } else {
        console.error("Header element not found");
    }
}