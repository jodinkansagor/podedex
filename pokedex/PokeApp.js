
import Header from '../pokedex/Header.js';
import Paging from '../pokedex/Paging.js';
import PokeList from '../pokedex/PokeList.js';
import Search from '../pokedex/Search.js';
import Component from '../Component.js';
import { getPokemon } from '../services/pokemon-api.js';



class PokeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options');
        const searchOptions = new Search();
        optionsSection.appendChild(searchOptions.renderDOM());

        const pokeList = new PokeList({ pokeData: [] });
        const pokeListOnPage = dom.querySelector('.pokemon-list');
        pokeListOnPage.appendChild(pokeList.renderDOM());

        const pokemonPages = dom.querySelector('.pages');
        const pokemonPaging = new Paging({ count: 0 });
        pokemonPages.appendChild(pokemonPaging.renderDOM());
        
        async function loadPokemon() {
            const response = await getPokemon();
            const pokeData = response.results;
            const count = response.count;
            console.log(count);
            pokeList.update({ pokeData });
            pokemonPaging.update({ count });
            console.log({ count });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();  
        });        
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