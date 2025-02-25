window.onload = function () {
  // 01.gnb 애니메이션

  const menuOpen = document.querySelector(".gnb .menuOpen");
  const menuBox = document.querySelector(".gnb .menuBox");

  menuOpen.addEventListener("click", () => {
    menuBox.classList.toggle("on"); // on 이 이미 있으면 떼고 , 없으면 붙어라
  });

  // 01.visual
  gsap.registerPlugin(ScrollTrigger); // GSAP라이브러리의 ScrollTrigger등록

  gsap
    .timeline({
      // start d와 scrollstart가 만날떄 애니메이션 시작 , end와 scrollend가 만날떄 애니메이션 끝
      scrollTrigger: {
        trigger: ".visual",
        start: "100% 100%", // visual요소의 맨 아래(100%) 가 뷰포트의 맨아래 (100%) 에 도달하는 순간 애니메이션 시작
        end: "100% 0%", // visaul 요소의 맨 아래(100%) 가 뷰포트의 맨 위(0%) 에 도달하는 순간 애니메이션 종료
        scrub: 1, //스크롤 할때만 애니메이션 진행 , 숫자 높아질 수록 애니메이션 부드러워짐
        // markers: true,
      },
    })
    .to(
      ".logoWrap #j",
      { x: -150, y: 250, rotate: 20, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #y",
      { x: -30, y: 150, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #o",
      { x: 0, y: 400, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #u",
      { x: 50, y: 300, rotate: 10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #n",
      { x: 100, y: 100, rotate: 10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #g",
      { x: 50, y: 450, rotate: 20, ease: "none", duration: 5 },
      0
    );

  gsap.utils.toArray(".mainTextBox .title i").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
          // markers: true,
        },
      })
      .fromTo(
        selector,
        { overflow: "hidden", y: 150 },
        { y: 0, ease: "none", duration: 5 },
        0
      );
  });

  // .subText p animation
  gsap.utils.toArray(".subText p").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
          markers: true,
        },
      })
      .fromTo(
        selector,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "none", duration: 5 },
        0
      );
  });
};
