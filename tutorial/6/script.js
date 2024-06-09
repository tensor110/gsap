function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splitText = h1Text.split("");
  var halfValue = splitText.length/2

  var clutter = "";

  splitText.forEach(function (elem, idx) {
    if(idx<halfValue){
        clutter += `<span class = "a">${elem}</span>`;
    }
    else{
        clutter += `<span class = "b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
breakText()

gsap.from("h1 .a",{
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
})
gsap.from("h1 .b",{
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
})