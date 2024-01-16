let xValue = 0, yValue = 0;

function updateParallaxElements(event) {
  xValue = event.clientX - window.innerWidth / 2;
  yValue = event.clientY - window.innerHeight / 2;

  let parallax_el = document.querySelectorAll(".parallax");

  parallax_el.forEach((el) => {
    let speedX = el.dataset.speedx;
    let speedY = el.dataset.speedy;
    let speedZ = el.dataset.speedz;

    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (event.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `translateX(calc(-50% + ${xValue * speedX}px))
      translateY(calc(-50% + ${yValue * speedY}px))
      perspective(2300px) translateZ(${zValue * speedZ}px)`;
  });
}

window.addEventListener("mousemove", updateParallaxElements);

window.addEventListener("load", () => {
  updateParallaxElements({ clientX: 0, clientY: 0 });

});





