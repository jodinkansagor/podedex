import Component from '../Component.js';
import Header from '../pokedex/Header.js';
import Paging from '../pokedex/Paging.js';
// import PokeItem from '../pokedex/PokeItem.js';
import PokeList from '../pokedex/PokeList.js';
import Search from '../pokedex/Search.js';

const pokeData = [
    {
        pokemon: 'venusaur',
        attack: 82,
        defense: 83,
        speed: 80,
        type1: 'grass',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
    }
];

class PokeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options');
        const searchOptions = new Search();
        optionsSection.appendChild(searchOptions);

        const pokeList = new PokeList({ pokeData: pokeData })
        const pokeListOnPage = dom.querySelector('.pokemon-list');
        pokeListOnPage.appendChild(pokeList);

        const pokemonPages = dom.querySelector('.pages');
        const pokemonPageList = new Paging();
        pokemonPages.appendChild(pokemonPageList);

    }

    renderHTML() {
        return /*html*/ `
        <div>
            <main>
                <section class = "options"></section>
                <section class = "pokemon-list"></section>
                <section class = "pages"></section>
            </main>
        </div>
        `;
    }
}

export default PokeApp;