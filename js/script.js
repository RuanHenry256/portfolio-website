document.addEventListener('mousemove', (e) => {
    // Get the body element
    const body = document.body;

    // Get the current viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Define the intensity of the parallax effect (how much the background moves)
    // 15% means the background will shift up to 5% of its excess size in each direction.
    const moveRangeX = 15;
    const moveRangeY = 15;

    // Calculate mouse position relative to the center of the viewport, normalized from -0.5 to 0.5
    // We multiply by -1 to make the background move in the opposite direction of the mouse,
    // which creates the typical parallax illusion.
    const mouseXRatio = (e.clientX / viewportWidth - 0.5) * -1;
    const mouseYRatio = (e.clientY / viewportHeight - 0.5) * -1;

    // Calculate the new background-position values based on mouse movement
    // 50% is the center. We add/subtract a scaled movement based on mouse position.
    const bgPosX = 50 + (mouseXRatio * moveRangeX);
    const bgPosY = 50 + (mouseYRatio * moveRangeY);

    // Apply the new background position to the body's style
    body.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});