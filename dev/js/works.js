const section = document.querySelector(".c-grid");

let currentPixel = window.pageXOffset;

const looper = function() {
  const newPixel = window.pageXOffset;
  const diff = newPixel - currentPixel;
  const speed = diff * 0.05;
  
  section.style.transform = "skewX(" + speed + "deg)";
        
  currentPixel = newPixel;
  
  requestAnimationFrame(looper);
}

looper();