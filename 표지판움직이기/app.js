(() => {
  const 표지판 = document.querySelector(".표지판");

  const mX = document.getElementById("X");
  const mY = document.getElementById("Y");

  const 표지판움직이기 = (X, Y) => {
    표지판.style.translate = `${-X}px ${-Y}px ${X}px`;
  };

  const xy축좌표그리는함수 = (X, Y) => {
    mX.innerHTML = `${X}px`;
    mY.innerHTML = `${Y}px`;
  };

  const resize = () => {
    return { innerWidth, innerHeight };
  };
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    const X = e.clientX - resize().innerWidth / 2;
    const Y = e.clientY - resize().innerHeight / 2;
    console.log(X, Y);

    xy축좌표그리는함수(X, Y);
    표지판움직이기(X, Y);
  });
})();
