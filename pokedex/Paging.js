import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/`
            <section class = "pages">
                <p class="paging">
                    <button class="prev" disabled>🡸</button>
                    <span>Page 1 of 5</span>
                    <button class="next">🡺</button>
                </p>
            </section>
        `;
    }
}

export default Paging;