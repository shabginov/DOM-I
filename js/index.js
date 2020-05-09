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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav elements
const links = document.querySelectorAll("a");
// console.log(links.length);
// console.log(links[0].textContent = 'hi');
// for (prop in siteContent.nav) {
//   links[prop].textContent = siteContent.nav[prop];
// }
// for (prop in siteContent.nav) {
//   console.log(prop);
//   // links[prop].textContent = siteContent.nav[prop];
//   // console.log(siteContent.nav[prop]);
// }
// console.log(siteContent.nav[`nav-item-${1}`]);

for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}
// links[0].textContent = siteContent.nav["nav-item-1"];
// links[1].textContent = siteContent.nav["nav-item-2"];
// links[2].textContent = siteContent.nav["nav-item-3"];
// links[3].textContent = siteContent.nav["nav-item-4"];
// links[4].textContent = siteContent.nav["nav-item-5"];
// links[5].textContent = siteContent.nav["nav-item-6"];
// siteContent.forEach(item) => nav.textContent = nav.item;

// cta elements
const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent.cta.h1;

const button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent.cta["img-src"];

// main content
const h4 = document.querySelectorAll('.text-content h4');
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

const p = document.querySelectorAll('.text-content p');
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// contact elements
const h4Contact = document.querySelector('section.contact h4')
h4Contact.textContent = siteContent.contact["contact-h4"];

const pContact = document.querySelectorAll('section.contact p');
pContact[0].textContent = siteContent.contact.address;
pContact[1].textContent = siteContent.contact.phone;
pContact[2].textContent = siteContent.contact.email;

// footer
const footerP = document.querySelector('footer p');
// console.log(footerP);
footerP.textContent = siteContent.footer.copyright;

// changing nav items to green
links.forEach(element => element.style.color = 'green');

// creating and adding elements to DOM

const prependedElement = document.createElement('a');
prependedElement.textContent = 'Prepended';

const appendedElement = document.createElement('a');
appendedElement.textContent = 'Appended';

const nav = document.querySelector('nav');
nav.prepend(prependedElement);
nav.append(appendedElement)

// stretch
const changeButton = document.createElement('button');
changeButton.textContent = 'Change background';
const divCta = document.querySelector('div.cta-text');
// console.log(divCta);
divCta.append(changeButton);
const body = document.querySelector('body');
// console.log(body);

changeButton.addEventListener('click', () => body.style.backgroundColor = 'blue');