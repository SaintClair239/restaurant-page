import Menu9 from "./img/MENU9.png";
import Menu10 from "./img/MENU10.png";
import Menu11 from "./img/MENU11.png";
import Menu12 from "./img/MENU12.png";
import Menu13 from "./img/MENU13.png";
import Menu14 from "./img/MENU14.png";

function createMenu() {
    const contentWrapper = document.querySelector('.content-wrapper');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    contentWrapper.appendChild(menuContent);

    const h1 = document.createElement('h1');
    h1.textContent = 'MENU'
    menuContent.appendChild(h1);

    const menuList1 = document.createElement('div');
    menuList1.classList.add('menu-list');
    const menuList2 = document.createElement('div');
    menuList2.classList.add('menu-list');
    const menuList3 = document.createElement('div');
    menuList3.classList.add('menu-list');
    const menuList4 = document.createElement('div');
    menuList4.classList.add('menu-list');
    const menuList5 = document.createElement('div');
    menuList5.classList.add('menu-list');
    const menuList6 = document.createElement('div');
    menuList6.classList.add('menu-list');

    const MENU9 = new Image();
    MENU9.src = Menu9;
    const p9 = document.createElement('p');
    p9.textContent = 'Smashed Avo';
    menuList1.appendChild(MENU9);
    menuList1.appendChild(p9);

    const MENU10 = new Image();
    MENU10.src = Menu10;
    const p10 = document.createElement('p');
    p10.textContent = 'Yin & Yang';
    menuList2.appendChild(MENU10);
    menuList2.appendChild(p10);

    const MENU11 = new Image();
    MENU11.src = Menu11;
    const p11 = document.createElement('p');
    p11.textContent = 'Pancakes';
    menuList3.appendChild(MENU11);
    menuList3.appendChild(p11);

    const MENU12 = new Image();
    MENU12.src = Menu12;
    const p12 = document.createElement('p');
    p12.textContent = 'Huevos Rancheros';
    menuList4.appendChild(MENU12);
    menuList4.appendChild(p12);

    const MENU13 = new Image();
    MENU13.src = Menu13;
    const p13 = document.createElement('p');
    p13.textContent = 'Breakkie Roll';
    menuList5.appendChild(MENU13);
    menuList5.appendChild(p13);

    const MENU14 = new Image();
    MENU14.src = Menu14;
    const p14 = document.createElement('p');
    p14.textContent = 'Burritoo';
    menuList6.appendChild(MENU14);
    menuList6.appendChild(p14);
    
    menuContent.appendChild(menuList1);
    menuContent.appendChild(menuList2);
    menuContent.appendChild(menuList3);
    menuContent.appendChild(menuList4);
    menuContent.appendChild(menuList5);
    menuContent.appendChild(menuList6);  
};

export default createMenu;