import PokeApp from './PokeApp.js';

const app = new PokeApp();
const dom = app.renderDOM();
document.body.prepend(dom);