import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <section class="logo">
                    <img src = "./assets/pokemonlogo.png">
                </section>
                <nav>
                    <a href = "https://www.pokemon.com">Home</a>
                </nav>
            </header>
        `;
    }
}
export default Header;