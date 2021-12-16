function eventos(){
  const d = document;
  const menu = d.querySelector('.menu');
  const menuNav = d.querySelector('.nav-menu');

  menu.addEventListener('click', () => {
    menuNav.classList.toggle("spread")
    console.log("hiciste click")
  })

  window.addEventListener('click', (e) => {
    if (menuNav.classList.contains('spread') && e.target != menuNav && e.target != menu) {
        menuNav.classList.toggle("spread")
    }
  })
}

export{eventos};