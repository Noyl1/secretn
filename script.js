document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const content = document.getElementById("content");

    noButton.addEventListener("mouseover", (event) => {
        const containerRect = content.getBoundingClientRect();
        const buttonRect = event.target.getBoundingClientRect();

        const offsetX = Math.random() * (containerRect.width - buttonRect.width);
        const offsetY = Math.random() * (containerRect.height - buttonRect.height);

        event.target.style.position = "absolute";
        event.target.style.left = `${offsetX}px`;
        event.target.style.top = `${offsetY}px`;
    });

    yesButton.addEventListener("click", () => {
        content.innerHTML = "<h1>YAY, HEHE!</h1>";
        content.style.backgroundColor = "#fce4ec"; // Keep the background color
        content.style.padding = "2rem"; // Keep some padding
        content.style.boxShadow = "none"; // Remove the box shadow
        content.style.borderRadius = "10px"; // Keep the border radius
    });
});
