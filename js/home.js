const sideNavMenuClose = document.querySelector('.side-nav-hamburger')
const sideNavMenuOpen = document.querySelector('.hamburger')
const sideMenu = document.querySelector('.side-nav')

sideNavMenuClose.addEventListener('click', () => {
    sideMenu.style.transform = 'translateX(100%)';
})

sideNavMenuOpen.addEventListener('click', () => {
    sideMenu.style.transform = 'translateX(0%)';
})