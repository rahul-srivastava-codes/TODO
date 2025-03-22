const counterElement = document.getElementById("counter");
let count = 0;
const target = 100;
const duration = 10;
const interval = 1;
const step = target / (duration / interval);

const updateCounter = () => {
  if (count < target) {
    count++;
    counterElement.textContent = Math.ceil(count);
    setTimeout(updateCounter, interval);
  } else {
    counterElement.textContent = target;
  }
};

updateCounter();

gsap.from(".line h1,.line h2, now", {
  duration: 3,
  y: 150,
  opacity: 0,
  ease: "Power.out",
  stagger: 2,
  delay: 1,
});

gsap.to(".line", {
  z: -999,
  duration: 5,
  delay: 0,
  opacity: 0,
  ease: "Power.in",

  onComplete: () => {
    document.getElementsByClassName("line").style.backgroundColor = "none"; // Hide loader
    // document.getElementById("main").style.backgroundColor = "black";
  },
});
gsap.to("#loader", {
  opacity: 0,
  y: -1300,
  x: -999,
  duration: 10,
  delay: 1,
  ease: "Power.in",
});

function mousemove() {
  const circle = document.getElementById("cursor");

  // Function to update the position of the circle based on mouse movement
  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move the circle to the mouse position
    circle.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15}px)`;
    // Subtract half of the circle's width/height (50px / 2) to center it on the cursor
  });
}
mousemove();

Shery.makeMagnet("#magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet("#menu" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

const descriptions = document.querySelectorAll("#page1_title #description");

gsap.from(descriptions, {
  y: 100,
  stagger: 0.5,
});
gsap.from("#nav", {
  opacity: 0,
});
