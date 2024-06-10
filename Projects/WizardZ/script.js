function page1Animation() {
  var t1 = gsap.timeline();

  t1.from("nav h1, nav h4, nav button", {
    y: -40,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });
  t1.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });
  t1.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.2,
  });
  t1.from(".center-part1 button", {
    opacity: 0,
    duration: 0.05,
  });
  t1.from(
    ".center-part2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.7,
    },
    "-=0.1"
  );
}

function page2Animation() {
  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2 .images, #section2",
      scroller: "body",
      start: "top 70%",
      end: "top -20%",
      scrub: 2,
    },
  });
  t2.from(".images img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.5,
  });
  t2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  t2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
  t2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1.5,
    },
    "anim1"
  );
  t2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
  t2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1.5,
    },
    "anim2"
  );
}

function page3Animation() {
    var t3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#proposal, #section3",
          scroller: "body",
          start: "top 70%",
          end: "top 10%",
          scrub: 2,
        },
      });
    t3.from("#proposal", {
        y: 100,
        opacity: 0,
        duration: 1.5,
    });
    t3.from(".case-study", {
        x: 50,
        opacity: 0,
        duration: 0.5,
    });
    t3.from(".case-details", {
        y: 50,
        opacity: 0,
        duration: 0.5,
    });
    t3.from(".case-details .part", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 1
    });
    
  }
page1Animation()
page2Animation()
page3Animation()