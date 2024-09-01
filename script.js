// MENU DROPDOWN
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const menuDropDown = document.querySelector('.menu_dropdown');

toggleBtn.onclick = function () {
    menuDropDown.classList.toggle('open');

    const isOpen = menuDropDown.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
window.onresize = function () {
    if (window.innerWidth > 1240) {
        menuDropDown.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
};

document.addEventListener('DOMContentLoaded', function() {

    const linkFooter = document.querySelector('.footer-link-page');
    
    linkFooter.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const secao1 = document.querySelector('#secao1');
        const secao2 = document.querySelector('#secao2');
        const secao3 = document.querySelector('#secao3');
        
        secao1.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    });
    
});