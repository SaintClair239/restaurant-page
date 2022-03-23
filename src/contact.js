function createContact() {
    const contentWrapper = document.querySelector('.content-wrapper');

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contentWrapper.appendChild(contactContent);

    const h1 = document.createElement('h1');
    h1.textContent = "CONTACTS";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = 'Contact Number: 0987321412';
    p2.textContent = 'Address: Lorem ipsum dolor sit amet consectetur adipisicing.';
    p3.textContent = 'Look for Mary Gianna Viliran';

    contactContent.appendChild(h1);
    contactContent.appendChild(p1);
    contactContent.appendChild(p2);
    contactContent.appendChild(p3); 
};

export default createContact;