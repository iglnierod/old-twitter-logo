// content_script.js

// Verificar si estamos en el dominio de Twitter
const isTwitterDomain = /twitter\.com$|\.twitter\.com$/.test(window.location.hostname);

// URL de la imagen personalizada (logo.png) en GitHub
const customLogoUrl = "https://pbs.twimg.com/media/F2C2gcKWYAAaaOS?format=png&name=small";

// Cambiar el favicon si estamos en el dominio de Twitter
if (isTwitterDomain) {
  // Obtener el elemento link del favicon
  const faviconLink = document.querySelector('link[rel="shortcut icon"]');
  faviconLink ? faviconLink?.setAttribute('href', customLogoUrl) : null;

}
