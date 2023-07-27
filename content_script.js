// content_script.js

// Verificar si estamos en el dominio de Twitter
const isTwitterDomain = /twitter\.com$|\.twitter\.com$/.test(window.location.hostname);

// Cambiar el favicon si estamos en el dominio de Twitter
if (isTwitterDomain) {
  // Obtener el elemento link del favicon
  const faviconLink = document.querySelector('link[rel="shortcut icon"]');

  // Comprobar si se encontró el favicon
  if (faviconLink) {
    // Eliminar el favicon actual
    faviconLink.remove();
  }

  // Crear un nuevo elemento link para el favicon personalizado (logo.png)
  const customFaviconLink = document.createElement('link');
  customFaviconLink.setAttribute('rel', 'shortcut icon');
  customFaviconLink.setAttribute('href', chrome.runtime.getURL('logo.png'));

  // Agregar el nuevo favicon al head del documento
  document.head.appendChild(customFaviconLink);
}
