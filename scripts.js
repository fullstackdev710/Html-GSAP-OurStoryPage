(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".passion-journey-img",
        start: "top 10%",
        end: "bottom top",
        // toggleActions: "restart pause reverse pause",
        scrub: true,
      },
    })
    .to(".passion-journey-img", { yPercent: -60, xPercent: 60 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".moe-photo-section .col-d-2:first-child",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(
      ".moe-photo-section .col-d-2:first-child",
      { yPercent: -80, xPercent: -40, opacity: 0.3 },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".moe-photo-section .col-d-2:last-child",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(
      ".moe-photo-section .col-d-2:last-child",
      { yPercent: -80, xPercent: 15, opacity: 0.3 },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".founding-img",
        start: "center bottom",
        end: "center center",
        scrub: true,
      },
    })
    .to(".founding-img", { xPercent: -50 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sharing-img",
        start: "center bottom",
        end: "bottom center",
        scrub: true,
      },
    })
    .to(".sharing-img", { xPercent: -100 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".experience-smoke-red-bar",
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
      },
    })
    .to(".experience-smoke-red-bar", { xPercent: -100 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".experience-image-1",
        start: "center bottom",
        end: "center center",
        scrub: true,
      },
    })
    .to(".experience-image-1", { y: -100 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".experience-image-2",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    })
    .to(".experience-image-2", { y: 100 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".youssef-cigar-div",
        start: "30% bottom",
        end: "top 30%",
        scrub: true,
      },
    })
    .to(".youssef-cigar-div", { opacity: 0.1, duration: 1 }, 0)
    .to(
      ".youssef-cigar-div",
      { opacity: 1, xPercent: 10, duration: 1, delay: 1 },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".mustaph-cigar-div",
        start: "30% bottom",
        end: "top 30%",
        scrub: true,
      },
    })
    .to(".mustaph-cigar-div", { opacity: 0.1, duration: 1 }, 0)
    .to(
      ".mustaph-cigar-div",
      { opacity: 1, xPercent: 10, duration: 1, delay: 1 },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".ahmad-cigar-div",
        start: "30% bottom",
        end: "top 30%",
        scrub: true,
      },
    })
    .to(".ahmad-cigar-div", { opacity: 0.1, duration: 1 }, 0)
    .to(
      ".ahmad-cigar-div",
      { opacity: 1, xPercent: 10, duration: 1, delay: 1 },
      0
    );
})();
