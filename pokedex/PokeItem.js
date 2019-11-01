import Component from '../Component.js';

class PokeItem extends Component {

    renderHTML() {
        const pokeData = this.props.pokeData;
 
        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        
        let capPoke = capitalize(`${pokeData.pokemon}`);
        let capType = capitalize(`${pokeData.type_1}`)

        return /*html*/ `
            <li class = "poke-item">
                <img src = ${pokeData.url_image} alt=${pokeData.pokemon} />
                <h2>${capPoke}</h2>
                <section class = "qualities">
                    <h3>Type: ${capType}</h3>
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