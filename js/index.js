const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//navigation
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navLinks = document.querySelectorAll('a');

navLinks[0].append(siteContent.nav['nav-item-1']);
navLinks[1].append(siteContent.nav['nav-item-2']);
navLinks[2].append(siteContent.nav['nav-item-3']);
navLinks[3].append(siteContent.nav['nav-item-4']);
navLinks[4].append(siteContent.nav['nav-item-5']);
navLinks[5].append(siteContent.nav['nav-item-6']);

//? figure this out...can I do this with a for loop? Or forEach?.

//cta
const topImg = document.getElementById('cta-img');
topImg.setAttribute('src', siteContent['cta']['img-src']);

let ctaText = document.querySelector('h1');
ctaText.append(siteContent.cta['h1']);

let ctaButton = document.querySelector('button');
ctaButton.append(siteContent.cta['button']);
//main content


let headers = document.querySelectorAll('h4');

headers[0].textContent = siteContent['main-content']['features-h4'];
headers[1].textContent = siteContent['main-content']['features-h4'];
headers[2].textContent = siteContent['main-content']['features-h4'];
headers[3].textContent = siteContent['main-content']['features-h4'];
headers[4].textContent = siteContent['main-content']['features-h4'];
headers[5].textContent = siteContent['main-content']['features-h4'];

//TODO Keep adding elements change individual header titles

const textContent = document.getElementsByClassName('.text-content');

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//contact
let contactHead = document.querySelector('contact h4');

// contactHead.textContent = siteContent['contact']['contact-h4'];

const contactParas = document.querySelectorAll('.contact p');


//footer

const footerText = document.querySelector('footer p');

footerText.setAttribute('p', siteContent['footer']['copyright']);

