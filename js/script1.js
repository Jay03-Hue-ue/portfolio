// Toggle navbar items on small screens
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-solid-bg");

navbarToggle.addEventListener("click", () => {
    const expanded = navbarToggle.getAttribute("aria-expanded") === "true" || false;
    navbarToggle.setAttribute("aria-expanded", !expanded);
    navbarMenu.classList.toggle("hidden", expanded);
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.remove('bg-transparent', 'opacity-85');
        navbar.classList.add('bg-neutral-950', 'opacity-100'); // Solid black when scrolling
    } else {
        navbar.classList.remove('bg-neutral-950', 'opacity-100');
        navbar.classList.add('bg-transparent', 'opacity-85'); // Transparent when at top
    }
});

let counterElement = document.getElementById('counter');
let count = 0;
let counting = false;
//'!!', '@@', '##', '$$', '%%', '^^',
// Custom array with numbers and symbols
const customArray = [ '01', '02', '03', '04', '05'];

// Function to start the counter
// Function to start the counter
function startCounter() {
    if (count < customArray.length) {
        counterElement.textContent = customArray[count];
        count++;

        // Calculate the delay based on the count (faster at the end)
        let delay = 500 + (count * 70); // Decrease delay as count increases

        // Ensure the delay doesn't go below a minimum value (e.g., 100ms)
        if (delay < 100) {
            delay = 100;
        }

        setTimeout(startCounter, delay);  // Adjust delay for faster count at the end
    }
}

// Function to reset the counter
function resetCounter() {
    count = 0;
    counterElement.textContent = customArray[count];
}

// Observer callback
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start counting when the section is focused
            if (!counting) {
                counting = true;
                startCounter();
            }
        }
    });
}

// Create an IntersectionObserver to track the visibility of the section
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger when 50% of the section is in the viewport
});

observer.observe(document.getElementById('about'));

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const animateProgressBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.getAttribute("data-percentage");

                progressBar.style.transition = "width 2s ease-out";
                progressBar.style.width = `${percentage}%`;

                // Unobserve the progress bar after animation
                observer.unobserve(progressBar);
            }
        });
    };

    const observer = new IntersectionObserver(animateProgressBars, {
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});
