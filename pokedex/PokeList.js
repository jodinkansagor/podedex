import Component from '../Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {

    onRender(dom) {
        const pokeData = this.props.pokeData;

        pokeData.forEach(pokeData => {
            const props = { pokeData: pokeData};
            const pokeItem = new PokeItem(props);
            const pokeItemDom = pokeItem.renderDOM();
            dom.appendChild(pokeItemDom);
        });
    }

    renderHTML() {
        return /*html*/ `
            <ul class="pokemon-list"></ul>
        `;
    }

}
export default PokeList;