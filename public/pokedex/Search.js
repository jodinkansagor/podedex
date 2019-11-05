import Component from '../Component.js';

class Search extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        const typeOptions = form.querySelectorAll('select[name=type]');
        const speedInput = form.querySelector('input[name=speed]');
        const attackInput = form.querySelector('input[name=attack]');
        const defenseInput = form.querySelector('input[name=defense]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || '';
            const type = searchParams.get('type');
            if (type) {
                typeOptions.forEach(typeOption => {
                    typeOption.selected === typeOption.value;
                });
            }

            speedInput.value = searchParams.get('speed') || '';
            attackInput.value = searchParams.get('attack') || '';
            defenseInput.value = searchParams.get('defense') || '';
        }
    
        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('pokemon', formData.get('search'));
            searchParams.set('type_1', formData.get('type')); 

            if (formData.get('speed') === '') {
                searchParams.set('speed', 0);
            } else {
                searchParams.set('speed', formData.get('speed')); 
            }
            
            searchParams.set('attack', formData.get('attack') === '' ? 0 : formData.get('attack'));

            if (formData.get('defense') === '') {
                searchParams.set('defense', 0);       
            } else {
                searchParams.set('defense', formData.get('defense'));       
            }

            
            searchParams.set('page', 1);
            
            
            window.location.hash = searchParams.toString();
            
        });
    }

    renderHTML() {
        return /*html*/ `
            <form class = "search-form">
                <label>Search: <input type="text" name ="search"></label>
                <label>Pick a type:<select class="type" name = "type">
                    <option value="">All Types!</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="ice">Ice</option>
                    <option value="fighting">Fighting</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="flying">Flying</option>
                    <option value="psychic">Psychic</option>
                    <option value="bug">Bug</option>
                    <option value="rock">Rock</option>
                    <option value="ghost">Ghost</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="steel">Steel</option>
                    <option value="fairy">Fairy</option>
                </select></label>
                
                <label>Minimum Speed: <input type="text" name="speed"></label>
                <label>Minimum Attack: <input type="text" name="attack"></label>
                <label>Minimum Defense: <input type="text" name="defense"></label>
                <button>Get My Pokemon!</button>
                <button><a href = "../pokedex.html">Reset Your Search</a></button>
            </form>
        `;
    }
}

export default Search;