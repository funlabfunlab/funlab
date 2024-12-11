document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn"); // All navigation buttons
    const contentBoxes = document.querySelectorAll(".listbox"); // All content boxes

    // Set the default active tab and content on page load
    const defaultButton = document.querySelector(".tab-btn.active"); // Find the button with the 'active' class
    const defaultTargetId = defaultButton.getAttribute("data-target"); // Get its data-target
    const defaultContent = document.getElementById(defaultTargetId); // Find the corresponding content box

    // Ensure the default content is visible
    if (defaultContent) {
        defaultContent.classList.add("active");
    } else {
        console.warn(`Content box with ID "${defaultTargetId}" not found.`);
    }

    // Add click events to buttons
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove active state from all buttons and content boxes
            buttons.forEach(btn => btn.classList.remove("active"));
            contentBoxes.forEach(box => box.classList.remove("active"));

            // Add active state to the clicked button
            button.classList.add("active");

            // Get the target ID from the data-target attribute
            const targetId = button.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            // Activate the corresponding content box if it exists
            if (targetContent) {
                targetContent.classList.add("active");
            } else {
                console.warn(`Content box with ID "${targetId}" not found.`);
            }
        });
    });
});
