(() => {
  let [x, y, mx, my] = [0, 0, 0, 0];
  const speed = 0.001; // 가속도 조절
  let imageList;

  window.onload = function () {
    imageList = document.querySelectorAll("img");

    function mouseFunc(e) {
      // 브라우저의 중간지점 좌표값 구하기
      x = e.clientX - window.innerWidth / 2;
      y = e.clientY - window.innerHeight / 2;
    }

    window.addEventListener("mousemove", mouseFunc);

    loop();
  };

  function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    imageList[0].style.translate = `${mx}px ${my}px `;
    imageList[1].style.translate = `${-mx}px ${-my}px `;
    imageList[2].style.translate = `${mx}px ${-my}px `;
    imageList[3].style.translate = `${-mx}px ${my}px `;

    window.requestAnimationFrame(loop);
  }
})();
