import Component from '../Component.js';

class Search extends Component {

    renderHTML() {
        return /*html*/ `
            <form class = "search-form">
                <label>Search: <input type="text" name ="search"></label>
                <label>Pick a type:<select class="type">
                    <option value="">All Types!</option>
                    <option value="water">Water</option>
                    <option value="bug">Bug</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="grass">Grass</option>
                    <option value="flying">Flying</option>
                </select></label>
                <label>Minimum Speed: <input type="text" name="speed"></label>
                <label>Attack: <input type="text" name="attack"></label>
                <label>Defense: <input type="text" name="defense"></label>
                <button>Get My Pokemon!</button>
            </form>
        `;
    }
}

export default Search;