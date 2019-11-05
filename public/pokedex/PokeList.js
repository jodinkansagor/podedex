import Component from '../Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {


    onRender(dom) {

        const pokeData = this.props.pokeData.sort((a, b) => a.id - b.id);
        
        pokeData.forEach(pokeData => {
            const props = { pokeData: pokeData };
            const pokeItem = new PokeItem(props);
            const pokeItemDom = pokeItem.renderDOM();
            
            dom.appendChild(pokeItemDom);
        });


    }

    renderHTML() {
        return /*html*/ `
            <ul id="pokemon-list"></ul>
        `;
    }

}
export default PokeList;

// const pokeData = this.props.pokeData.sort((a, b) => a.id - b.id);
