(() => {
  const mouse = document.getElementById("mouse_pointer");
  const modal = document.querySelector(".modal_con");

  //   마우스가 이동할 때 마다 계속 실행한다.
  function mouseFunc(e) {
    const X = e.clientX - mouse.offsetWidth / 2;
    const Y = e.clientY - mouse.offsetHeight / 2;

    mouse.style.translate = `${X}px ${Y}px`;
  }

  window.addEventListener("resize", mouseFunc);

  //   마우스가 모달창에 들어오는 순간 1번 실행한다.
  function yesFunc() {
    mouse.style.scale = "0.5";

    console.log("실행중");
  }

  //   마우스가 모달창에서 나가는 순간 1번 실행한다.
  function noFunc() {
    mouse.style.scale = "1.1";

    console.log("종료");
  }

  window.addEventListener("mousemove", mouseFunc);
  //  mouseenter는 마우스가 대상 영역과 겹치는 순간 1번 콜백함수를 호출한다.
  modal.addEventListener("mouseenter", yesFunc);
  //mouseleave는 마우스가 대상 영역을 나가는 순간 1번 콜백함수를 호출한다.
  modal.addEventListener("mouseleave", noFunc);
})();
