
import Header from '../pokedex/Header.js';
import Paging from '../pokedex/Paging.js';
import PokeList from '../pokedex/PokeList.js';
import Search from '../pokedex/Search.js';
import Component from '../Component.js';
import { getPokemon } from '../services/pokemon-api.js';



class PokeApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options');
        const searchOptions = new Search();
        optionsSection.appendChild(searchOptions.renderDOM());

        const pokeList = new PokeList({ pokeData: [] });
        const pokeListOnPage = dom.querySelector('.pokemon-list');
        pokeListOnPage.appendChild(pokeList.renderDOM());

        const response = await getPokemon();
        const pokeData = response.results;
        pokeList.update({ pokeData });
      
        const pokemonPages = dom.querySelector('.pages');
        const pokemonPageList = new Paging();
        pokemonPages.appendChild(pokemonPageList.renderDOM());
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