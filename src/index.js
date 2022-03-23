import createContact from './contact';
import createHome from './home';
import createMenu from './menu';

function createHeader() {
    const content = document.querySelector('#content');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    content.appendChild(wrapper);
    

    const header = document.createElement('div');
    header.classList.add('header');

    wrapper.appendChild(header);
    wrapper.appendChild(contentWrapper);

    const p = document.createElement('p');
    p.textContent = "John's Sushi";

    const nav = document.createElement('div');
    nav.innerHTML = `<p class="home">HOME</p>
    <p class="menu">MENU</p>
    <p class="contact">CONTACT</p>`

    header.appendChild(p);
    header.appendChild(nav);
};

createHeader();
createHome();

const menu = document.querySelector('.menu');
menu.addEventListener('click', ()=> {
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.innerHTML = "";
    createMenu();
});

const home = document.querySelector('.home');
home.addEventListener('click', ()=> {
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.innerHTML = "";
    createHome();
});

const contact = document.querySelector('.contact');
contact.addEventListener('click', ()=> {
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.innerHTML = "";
    createContact();
});
