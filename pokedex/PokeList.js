import Component from '../Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {

    onRender(dom) {
        const pokeData = this.props.pokeData;
        pokeData.forEach(pokeData => {
            const props = { pokeData: pokeData };
            const pokeItem = new PokeItem(props);
            
            const pokeItemDom = pokeItem.renderDOM();
            if (pokeData.type_1 === 'fire') {
                pokeItemDom.classList = 'fire';
            } else if (pokeData.type_1 === 'grass') {
                pokeItemDom.classList = 'grass';
            } else if (pokeData.type_1 === 'water') {
                pokeItemDom.classList = 'water';
            } else if (pokeData.type_1 === 'bug') {
                pokeItemDom.classList = 'bug';
            } else if (pokeData.type_1 === 'normal') {
                pokeItemDom.classList = 'normal';
            } else pokeItemDom.classList = 'flying';
            
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