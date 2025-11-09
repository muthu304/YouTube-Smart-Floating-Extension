let isFloating = false;
let placeholder = null;
let triggerPoint = null;
let offset = { x: 0, y: 0 };
let isDragging = false;

function enableFloating(player) {
    triggerPoint = player.getBoundingClientRect().top + window.scrollY;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (scrollY > triggerPoint + 100 && !isFloating) {
            placeholder = document.createElement("div");
            placeholder.style.height = player.offsetHeight + "px";
            player.parentNode.insertBefore(placeholder, player);

            // Float but keep original ratio
            player.style.position = "fixed";
            player.style.transform = "scale(0.4)";
            player.style.transformOrigin = "bottom right";
            player.style.bottom = "20px";
            player.style.right = "20px";
            player.style.left = "";
            player.style.top = "";
            player.style.zIndex = "9999";
            player.style.cursor = "move";

            makeDraggable(player);

            isFloating = true;
        } 
        else if (scrollY <= triggerPoint + 100 && isFloating) {
            player.style.position = "";
            player.style.transform = "";
            player.style.transformOrigin = "";
            player.style.bottom = "";
            player.style.right = "";
            player.style.left = "";
            player.style.top = "";
            player.style.zIndex = "";
            player.style.cursor = "";

            if (placeholder) {
                placeholder.remove();
                placeholder = null;
            }

            removeDraggable(player);

            isFloating = false;
        }
    });
}

// Make the player draggable
function makeDraggable(player) {
    player.addEventListener("mousedown", onMouseDown);

    function onMouseDown(e) {
        isDragging = true;
        // Get mouse position relative to the player
        const rect = player.getBoundingClientRect();
        offset.x = e.clientX - rect.left;
        offset.y = e.clientY - rect.top;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(e) {
        if (!isDragging) return;
        player.style.left = (e.clientX - offset.x) + "px";
        player.style.top = (e.clientY - offset.y) + "px";
        player.style.right = "";
        player.style.bottom = "";
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }

    // Store references for cleanup
    player._onMouseDown = onMouseDown;
}

function removeDraggable(player) {
    if (player._onMouseDown) {
        player.removeEventListener("mousedown", player._onMouseDown);
        delete player._onMouseDown;
    }
}

// Wait until the YouTube player is available
function waitForPlayer() {
    const player = document.querySelector("#player-theater-container, #player-container");
    if (player) {
        enableFloating(player);
    } else {
        setTimeout(waitForPlayer, 500); // Retry every 0.5s
    }
}

waitForPlayer();
