const menuBtn = document.querySelector('.menu-btn')
    menuBtn.addEventListener('click', e => {
        menuBtn.classList.toggle('active');

        const isActive = menuBtn.classList.contains('active');

        gsap.to("#menu-bar", {
          top: isActive ? "0%" : "-100%",
          duration: 1,
          ease: "power4"
        })
    });



  
const magneticEffect = () => {
  document.querySelectorAll(".menu-btn").forEach(function (e) {

    e.addEventListener("mousemove", function (dets) {
      var xStart = e.getBoundingClientRect().x;
      var xEnd = e.getBoundingClientRect().x + e.getBoundingClientRect().width;
      var valx = gsap.utils.mapRange(xStart, xEnd, -10, 10, dets.x);
      var yStart = e.getBoundingClientRect().y;
      var yEnd = e.getBoundingClientRect().y + e.getBoundingClientRect().height;
      var valy = gsap.utils.mapRange(yStart, yEnd, -10, 10, dets.y);

      gsap.to(e.children[0], {
        x: valx,
        y: valy,
        duration: 0.5,
      });
    });

    e.addEventListener("mouseleave", function (dets) {
      gsap.to(e.children[0], {
        x: 0,
        y: 0,
        duration: 0.5,
      });
    });
  });
};
magneticEffect();  