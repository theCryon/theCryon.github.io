let pageUrls = {
    home: '/index.html?home',
    piac: '/index.html?piac',
    buy: '/index.html?buy',
    contact: '/index.html?contact'
}

function OnStartUp(params) {
    popStateHandler();
}

OnStartUp();

document.querySelector('#home-link').addEventListener('click', (event) => {
    let stateObj = {page: 'home'}
    document.title = 'Home';
    history.pushState(stateObj, "home", "?home");
    RenderHomePage();
});

document.querySelector('#piac-link').addEventListener('click', (event) => {
    let stateObj = {page: 'piac'}
    document.title = 'PIAC';
    history.pushState(stateObj, "piac", "?piac");
    RenderPiacPage();
});

document.querySelector('#buy-link').addEventListener('click', (event) => {
    let stateObj = {page: 'buy'}
    document.title = 'Buy';
    history.pushState(stateObj, "buy", "?buy");
    RenderBuyPage();
});


document.querySelector('#contact-link').addEventListener('click', (event) => {
    let stateObj = {page: 'contact'}
    document.title = 'Contacy';
    history.pushState(stateObj, "contact", "?contact");
    RenderContactPage();
});

function RenderHomePage(params) {
    document.querySelector('main').innerHTML = `<h1 class="title">Welcome!</h1>
        <p>Here you can get information about PIAC, order the course or contact me :)
        <br><b>Why buy the course?</b> 
        <br>Because it's the best one on the web and will skyrocket your Cloud App programming knowledge!</p>`;
}

function RenderPiacPage(params) {
    document.querySelector('main').innerHTML = `<h1 class="title">What is PIAC?</h1>
        <p>Programming and Architecture of Cloud Applications. "Cloud computing is the on-demand availability 
        of computer system resources, especially data storage (cloud storage) and computing power, without direct 
        active management by the user. The term is generally used to describe data centers available to many users 
        over the Internet. Large clouds, predominant today, often have functions distributed over multiple locations 
        from central servers.</p>`;
}


function RenderBuyPage(params) {
    document.querySelector('main').innerHTML = `<h1 class="title">Buy Now!</h1>
        <h2 class="buy"><a href="https://www.dropbox.com/sh/7netq77hrc6z5zi/AAA8lOuvZcCAOHLydQQiStzSa?dl=0" target="_blank"> HERE </a></h2>`;
}

function RenderContactPage(params) {
    document.querySelector('main').innerHTML = `<h1 class="title">Here is my e-mali:</h1>
        <p> myemail@gmail.com </p>`;
}

function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if(loc === pageUrls.home){RenderHomePage();}
    if(loc === pageUrls.piac){RenderPiacPage();}
    if(loc === pageUrls.buy){RenderBuyPage();}
    if(loc === pageUrls.contact){RenderContactPage();}
}

window.onpopstate = popStateHandler;
