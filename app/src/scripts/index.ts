const introSlider = new Swiper(".intro", {
  loop: true,
  navigation: {
    nextEl: ".intro__slide-next",
    prevEl: ".intro__slide-prev",
  },
  pagination: {
    el: ".intro__slide-navigation",
    clickable: true,
  }
});

[].map.call(document.querySelectorAll('[anim="ripple"]'), el=> {
    el.addEventListener('click',e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
    })
})

const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

function addActive(el){
  el.classList.toggle('active')
}

var swiper = new Swiper(".products__item-slider", {
  navigation: {
    nextEl: ".products__item-slider-button-right",
    prevEl: ".products__item-slider-button-left",
  },
});