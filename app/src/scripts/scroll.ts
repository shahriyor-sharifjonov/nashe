const sticky = document.querySelectorAll('.sticky');
const stickylg = document.querySelectorAll('.stickylg');
const stickymd = document.querySelectorAll('.stickymd');


document.addEventListener("scroll", function (e) {
  let sc = document.documentElement.scrollTop;
  if (sc > 129) {
    sticky.forEach(el => {
        el.classList.add('fixed')
    });
  }
  else if (sc < 130){
    sticky.forEach(el => {
        el.classList.remove('fixed')
    });
  }
  if (sc > 99) {
    stickylg.forEach(el => {
        el.classList.add('fixed')
    });
  }
  else if (sc < 100){
    stickylg.forEach(el => {
        el.classList.remove('fixed')
    });
  }
  if (sc > 39) {
    stickymd.forEach(el => {
        el.classList.add('fixed')
    });
  }
  else if (sc < 40){
    stickymd.forEach(el => {
        el.classList.remove('fixed')
    });
  }
});