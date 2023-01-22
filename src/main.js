import './css/style.css';
import viteLogoUrl from './img/vite.svg';

document.querySelector('#app').innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogoUrl}" class="logo" alt="Vite logo" />
  </a>
  <h1>Hello Vite !</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
