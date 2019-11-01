import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <section class="logo">
                    <img src = "./assets/pokemonlogo.png">
                </section>
                <nav>
                    <a href = "index.html">Home</a>
                    <a href = "../pokedex.html">Pokemon</a>
                </nav>
            </header>
        `;
    }
}
export default Header;