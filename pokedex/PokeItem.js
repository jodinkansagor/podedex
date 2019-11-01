import Component from '../Component.js';

class PokeItem extends Component {
    
    renderHTML() {
        const pokeData = this.props.pokeData;
        
        return /*html*/ `
            <li class = "poke-item">
                <img src = ${pokeData.url_image} alt=${pokeData.pokemon} />
                <h2>${pokeData}</h2>
                <section class = "qualities">
                    <h3>Type: ${pokeData.type1}</h3>
                    <h3>Speed: ${pokeData.speed}</h3>
                </section>
                <section class = "qualities">
                    <h3>Attack: ${pokeData.attack}</h3>
                    <h3>Defense: ${pokeData.defense}</h3>
                </section>
            </li>
        `;
    }
}

export default PokeItem;