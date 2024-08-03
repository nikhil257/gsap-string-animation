var path = `M 10 100 Q 750 100 1390 100`;

const finalPath = `M 10 100 Q 750 100 1390 100`;

var string = document.querySelector(".string");

string.addEventListener("mousemove", function(dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1390 100`

  gsap.to("svg path", {
    attr: { d: path },
    duration : 0.2,
    ease : 'power4.out',
  });
});

string.addEventListener("mouseleave", function(dets){
    path = 'M 10 100 Q 750 100 1390 100'

    gsap.to('svg path',{
        attr: {d:path},
        duration:1,
        ease : 'elastic.out(2,0.1)',
    })
})