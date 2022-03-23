function createHome() {
    const contentWrapper = document.querySelector('.content-wrapper');

    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    contentWrapper.appendChild(homeContent);

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to John's Sushi";

    const p = document.createElement('p');
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias dolores sed nemo. Suscipit ducimus soluta, itaque ut earum culpa! Quos aut, quidem aspernatur exercitationem veniam blanditiis quae rerum non inventore in dolores, ad assumenda ut debitis natus, deleniti explicabo architecto libero iusto. Repellendus, totam nesciunt? Impedit amet quisquam fuga.";

    homeContent.appendChild(h1);
    homeContent.appendChild(p);  
};

export default createHome;