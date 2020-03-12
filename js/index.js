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


const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const imageCodeSnippet = document.getElementById("cta-img");
imageCodeSnippet.setAttribute('src', siteContent.cta["img-src"]);

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const h4s = document.querySelectorAll('h4');
const h4Features = h4s[0].textContent = siteContent['main-content']['features-h4'];
const h4About = h4s[1].textContent = siteContent['main-content']['about-h4'];
const h4Services = h4s[2].textContent = siteContent['main-content']['services-h4'];
const h4Product = h4s[3].textContent = siteContent['main-content']['product-h4'];
const h4Vision = h4s[4].textContent = siteContent['main-content']['vision-h4'];

const allP = document.querySelectorAll('p');
const featuresP = allP[0].textContent = siteContent['main-content']['features-content'];
const aboutP = allP[1].textContent = siteContent['main-content']['about-content'];
const servicesP = allP[2].textContent = siteContent['main-content']['services-content'];
const productP = allP[3].textContent = siteContent['main-content']['product-content'];
const visionP = allP[4].textContent = siteContent['main-content']['vision-content'];


