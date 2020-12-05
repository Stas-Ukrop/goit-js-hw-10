import './styles.css';
import './page-items.hbs';
import itemsTemplate from './page-items.hbs';
import recipies from './menu.json';

const body = document.body;
const menu = document.querySelector('ul[class="menu js-menu"]');
const themeSwitchToggle = document.getElementById('theme-switch-toggle');
const markUp = itemsTemplate(recipies).trim();
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menu.insertAdjacentHTML('beforeend', markUp);

if (localStorage.getItem('key')) {
  body.classList.add(localStorage.getItem('key'));
  localStorage.getItem('key') === Theme.DARK
    ? (themeSwitchToggle.checked = true)
    : (themeSwitchToggle.checked = false);
}

themeSwitchToggle.addEventListener('change', ChangeTheme);

function ChangeTheme() {
  console.log(themeSwitchToggle.hasAttribute('checked'));
  if (!themeSwitchToggle.checked) {
    setTheme(Theme.DARK, Theme.LIGHT);
  } else {
    setTheme(Theme.LIGHT, Theme.DARK);
  }
}
function setTheme(oldTheme, newTheme) {
  body.classList.remove(oldTheme);
  body.classList.add(newTheme);
  localStorage.setItem('key', newTheme);
}
