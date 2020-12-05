import './styles.css';
import './page-items.hbs';
import itemsTemplate from './page-items.hbs';
import recipies from './menu.json';

const body = document.body;
const menu = document.querySelector('ul[class="menu js-menu"]');
const themeSwitchToggle = document.getElementById('theme-switch-toggle');
const markUp = itemsTemplate(recipies).trim();

menu.insertAdjacentHTML('beforeend', markUp);

if (localStorage.getItem('key')) {
  body.classList.add(localStorage.getItem('key'));
  themeSwitchToggle.checked = true;
}

themeSwitchToggle.addEventListener('change', () => {
  ChangeTheme();
});

function ChangeTheme() {
  console.log(themeSwitchToggle.hasAttribute('checked'));
  if (!themeSwitchToggle.checked) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('key', 'light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('key', 'dark-theme');
  }
}
