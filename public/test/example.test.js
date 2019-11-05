import Header from '../pokedex/Header.js';


// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('does this render html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const expected = /*html*/`
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
    //Act 
    // Call the function you're testing and set the result to a const
    const header = new Header();
    const html = header.renderHTML();
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(html, expected);
});
