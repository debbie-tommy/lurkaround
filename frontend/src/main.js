import { renderPage, useGo } from './route.js';
import { Header } from './components/header.js';

const initApp = () => {
  new Header();
  if (!localStorage.getItem('token')) {
    useGo('#login');
  } else {
    renderPage();
  }
};
initApp();

const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

// If either token or userId is missing, remove the Add feed link
if (!token || !userId) {
  const addFeedLink = document.querySelector('a[href="#addFeed"]');
  const loguot = document.querySelector('a[href="#login"]');
  if (addFeedLink) {
    addFeedLink.remove();
    loguot.remove();
  }
}

// Run the check on page load
document.addEventListener('DOMContentLoaded', checkLocalStorage);
