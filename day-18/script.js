    const randomColor = function () {
      let hex = "0123456789ABCDEF";
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color =color + hex[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    let start = document.querySelector("#start");
    let stop = document.querySelector("#stop");
let change
    let changeColor = function () {
if(change ==null || !change){
         change = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
      }, 1000);
  }
    };
    let stopColor = function () {
      clearInterval(change);
      change=null
    };

    start.addEventListener("click", changeColor);
    stop.addEventListener("click", stopColor);
