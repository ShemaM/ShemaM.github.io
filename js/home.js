document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown items
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'block'; // Show dropdown menu
        });

        dropdown.addEventListener('mouseleave', function () {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'none'; // Hide dropdown menu when mouse leaves
        });

        // For content display when hovering over the dropdown items
        const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                // Display new content here, depending on the hovered item
                displayContent(item);
            });
        });
    });

    // Function to display new content based on hovered dropdown item
    function displayContent(item) {
        const contentArea = document.querySelector('#content-area'); // Make sure this exists in your HTML
        if (!contentArea) return; // Exit if there's no content area to display

        const itemText = item.textContent.trim();
        switch (itemText) {
            case 'Team':
                contentArea.innerHTML = '<h2>About Our Team</h2><p>Details about our team...</p>';
                break;
            case 'Reframe':
                contentArea.innerHTML = '<h2>Reframe Section</h2><p>Details about Reframe...</p>';
                break;
            case 'Careers':
                contentArea.innerHTML = '<h2>Careers</h2><p>Find career opportunities here...</p>';
                break;
            case 'News & Blogs':
                contentArea.innerHTML = '<h2>News & Blogs</h2><p>Latest news and blog posts...</p>';
                break;
            case 'Reports':
                contentArea.innerHTML = '<h2>Reports</h2><p>Reports section content...</p>';
                break;
            case 'JOIN OUR COMMUNITY':
                contentArea.innerHTML = '<h2>Join Our Community</h2><p>Details on how to join our community...</p>';
                break;
            case 'OUR PARTNERSHIPS':
                contentArea.innerHTML = '<h2>Our Partnerships</h2><p>Information on our partnerships...</p>';
                break;
            default:
                contentArea.innerHTML = '';
                break;
        }
    }
});
