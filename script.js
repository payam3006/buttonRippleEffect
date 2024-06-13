const q = console.log;

const ripple = (ev) => {
  // q(ev);
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style = `top: ${ev.offsetY - 100}px; left: ${ev.offsetX - 100}px;`;
  // q(ev.offsetY, ev.offsetX);
  document.getElementById("btn").appendChild(ripple);
  setTimeout(() => {
    document.getElementById("btn").removeChild(ripple);
  }, 780);
};
