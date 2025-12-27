
const menuButton = document.getDatElementById('toggle');

const isExpanded = menuButton.getAttribute('aria-expanded');
function toggleMenu() {
    if(isExpanded === 'false') {
        menuButton.setAttribute('aria-expanded', 'true');
    }else{
        menuButton.setAttribute('aria-expanded', 'false');
    }
}
menuButton.addEventListener('click', toggleMenu);