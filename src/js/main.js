import iconsUrl from '../assets/icons/icons.svg?url';
import '../css/reset.css';
import '../css/index.css';
import './header.js';

import header from '../partials/header.html?raw';
import hero from '../partials/hero.html?raw';
import books from '../partials/books.html?raw';
import feedbacks from '../partials/feedbacks.html?raw';
import events from '../partials/events.html?raw';
import article from '../partials/article.html?raw';
import location from '../partials/location.html?raw';
import footer from '../partials/footer.html?raw';
import bookModal from '../partials/book-modal.html?raw';
import contactModal from '../partials/contact-modal.html?raw';

const headerWithIcons = header.replaceAll('/icons.svg', iconsUrl);

const booksWithIcons = books.replaceAll('/icons.svg', iconsUrl);
const bookModalWithIcons = bookModal.replaceAll('/icons.svg', iconsUrl);

document.querySelector('#app').innerHTML = `
  ${headerWithIcons}
  ${hero}
  ${booksWithIcons}
  ${feedbacks}
  ${events}
  ${article}
  ${location}
  ${footer}
  ${bookModalWithIcons}
  ${contactModal}
`;
