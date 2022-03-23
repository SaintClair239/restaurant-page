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

    menuList1.innerHTML = `
    <img src="../src/img/MENU9.png" alt="">
    <p>Smashed Avo</p>`
    menuList2.innerHTML = `
    <img src="../src/img/MENU10.png" alt="">
    <p>Yin & Yang</p>`
    menuList3.innerHTML = `
    <img src="../src/img/MENU11.png" alt="">
    <p>Pancakes</p>`
    menuList4.innerHTML = `
    <img src="../src/img/MENU12.png" alt="">
    <p>Huevos Rancheros</p>`
    menuList5.innerHTML = `
    <img src="../src/img/MENU13.png" alt="">
    <p>Breakkie Roll</p>`
    menuList6.innerHTML = `
    <img src="../src/img/MENU14.png" alt="">
    <p>Burrito</p>`
    
    menuContent.appendChild(menuList1);
    menuContent.appendChild(menuList2);
    menuContent.appendChild(menuList3);
    menuContent.appendChild(menuList4);
    menuContent.appendChild(menuList5);
    menuContent.appendChild(menuList6);  
};

export default createMenu;