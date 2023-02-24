(function () {
  const $h1 = document.querySelector("h1");
  const bar = document.querySelector(".bar");
  const alert = document.querySelector(".alert");

  //   프로그래스바를 조작하는 함수
  function scrollFunc() {
    const scrollXPer = Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    );
    $h1.innerHTML = scrollXPer;
    bar.style.transform = `translate3d(${scrollXPer}vw, 0px, 0px)`;

    alertFunc(scrollXPer);
  }

  //   꼽사리 로딩바 퍼센트별로 적용되는 함수
  function alertFunc(scrollXPer) {
    if (scrollXPer === 0) return (alert.innerHTML = '"우주선 로딩바 만들기"');
    if (scrollXPer === 60)
      return (alert.innerHTML = '"조심해! 잘못 건드리면 우린 끝장이야!!.."');
    if (scrollXPer > 20 && scrollXPer < 50)
      return (alert.innerHTML = '"어어!! 저거 뭐야!!? 온다아아!!"');
    if (scrollXPer > 80)
      return (alert.innerHTML = '"갔나.. 정말 무시무시하군.."');
  }

  //   스크롤 이벤트를 등록해주는 리스너
  window.addEventListener("scroll", scrollFunc);
})();
