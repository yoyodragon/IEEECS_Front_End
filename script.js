            //circle of words
            const text = document.querySelector('.text p');
            text.innerHTML = text.innerText.split('').map(
                (char, i) =>
                `<span style = "transform:rotate(${i * 8.3}deg)">${char}</span>`
        ).join('');



        var ball = document.getElementById('ball');
var circle = document.getElementById('circle-text');
var ball2 = document.getElementById('ball-2');
var isMouseInside = false;


function centerfollower() {
    const rect = circle.getBoundingClientRect();
    const x = circle.offsetWidth / 2; 
    const y = circle.offsetHeight / 2; 
    ball.style.left = `${x - ball.offsetWidth / 2}px`; 
    ball.style.top = `${y - ball.offsetHeight / 2}px`; 
}

centerfollower();

circle.addEventListener('mouseover', () => {
    isMouseInside = true;
    ball2.style.opacity = 0;
    ball.style.background = "#DBFF00";
    ball.transition = "opacity 0s ";
    ball.style.opacity = 1; 
});

circle.addEventListener('mouseleave', () => {
    isMouseInside = false;
    ball.style.opacity = 0; 
    ball.transition = "opacity 0s ";
    ball2.style.opacity = 1;
    moveBallToCenter();
});

circle.addEventListener('mousemove', (e) => {
    if (!isMouseInside) return; 

    const rect = circle.getBoundingClientRect();
    const targetX = e.clientX - rect.left;
    const targetY = e.clientY - rect.top;

  
    function moveBall() {
        const ballX = parseFloat(ball.style.left || 0);
        const ballY = parseFloat(ball.style.top || 0);
        const speed = 0.1; 
        const dx = targetX - ballX;
        const dy = targetY - ballY;

        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;

        ball.style.left = `${ballX + dx * speed}px`;
        ball.style.top = `${ballY + dy * speed}px`;

        requestAnimationFrame(moveBall); 
    }

    moveBall();
});


function moveBallToCenter() {
    const rect = circle.getBoundingClientRect();
    $(ball-1) = $("#ball");
    $(ball-2) = $("#ball-2");
    $(ball-1).css({
    "position" : "absolute",
    "left"     : $(ball-2).position().left,
    "top"      : $(ball-2).position().top
});
    
    const centerX = rect.left + rect.width / 2 - ball.offsetWidth / 2;
    const centerY = rect.top + rect.height / 2 - ball.offsetHeight / 2;

    
    function animateReturn() {
        const ballX = parseFloat(ball.style.left || 0);
        const ballY = parseFloat(ball.style.top || 0);
        const speed = 0.1;

        const dx = centerX - ballX;
        const dy = centerY - ballY;

        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
            ball.style.left = `${centerX}px`;
            ball.style.top = `${centerY}px`;
            return; // Stop once we're at the center
        }
        

        ball.style.left = `${ballX + dx * speed}px`;
        ball.style.top = `${ballY + dy * speed}px`;

        requestAnimationFrame(animateReturn); 
    }

    animateReturn();
}



// Ensure the script runs after the DOM is fully loaded
let lastScrollTop = 0;  // Track the last scroll position
const navbar = document.getElementById("container-nav");  // Get the navbar element

if (navbar) {
    window.addEventListener("scroll", function() {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;  // Get current scroll position

        // Scrolling down
        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-80px";  // Hide the navbar by setting top to -80px (adjust based on your navbar height)
        } 
        // Scrolling up
        else {
            navbar.style.top = "0";  // Show the navbar by setting top to 0
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;  // Prevent negative scroll values
    });
} 
else {
    console.error('Navbar with id="container-nav" not found.');
}


// Select the hover area and custom cursor
const hoverArea = document.querySelector('#myVideo');
const customCursor = document.createElement('div');
customCursor.classList.add('circularcursor');
document.body.appendChild(customCursor);
customCursor.innerHTML = "Push";
// Update the custom cursor position
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

// Show custom cursor when hovering over the specific element
hoverArea.addEventListener('mouseenter', () => {
  customCursor.style.visibility = 'visible'; // Show cursor
});

hoverArea.addEventListener('mouseleave', () => {
  customCursor.style.visibility = 'hidden'; // Hide cursor
});




// Get the elements
const openOverlayButton = document.getElementById('open-overlay');
const closeOverlayButton = document.getElementById('close-overlay');
const overlay = document.getElementById('overlay');

// Open the overlay when the button is clicked
openOverlayButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

// Close the overlay when the close button is clicked
closeOverlayButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Optionally, close the overlay when clicking outside of the content area
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});



const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".page-1").style.opacity = opacity;
});

function playVideo()
{
    document.getElementById("myVideo").play();
}