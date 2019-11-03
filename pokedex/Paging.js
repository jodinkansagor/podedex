import Component from '../Component.js';

class Paging extends Component {

    onRender(el) {
        
        const prevButton = el.querySelector('.prev');
        // const nextButton = el.queryselector('.next');
        console.log(el);

        if (!prevButton) {
            return;
        }

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            } else {
                page = parsedPage;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });

        // nextButton.addEventListener('click', () => {
        //     updatePage(1);
        // });
    }

    renderHTML() {
        // const perPage = 10;
        // const totalResults = this.props.totalResults;
        // console.log(totalResults);
        // const queryString = window.location.hash.slice(1);
        // const searchParams = new URLSearchParams(queryString);

        // let page = 1;
        // const parsedPage = parseInt(searchParams.get('page'));
        // if (isNaN(parsedPage)) {
        //     page = 1;
        // } else {
        //     page = parsedPage;
        // }

        // if (!totalResults) {
        //     return /*html*/ `
        //         <p class = paging>No results, try another search</p>
        //     `;
        // }

        // const lastPage = Math.ceil(totalResults / perPage);

        return /*html*/`
            
                <p class="paging">
                    <button class="prev" disabled>🡸</button>
                    <button class="next" >🡺</button>
                </p>
           
        `;
    }
}

export default Paging;

/* {<span>Page ${page} of ${lastPage}</span>} */
// ${page === 1 ? 'disabled' : ''}>
// ${page === lastPage ? 'disabled' : ''}