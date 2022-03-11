
var btnsubmit = document.querySelector('.submit');
var extresearch = document.querySelector(".search")
var alphabet = document.querySelector('.az-select')
var pokemonType = document.querySelector('.types-select')
var eltypes = document.querySelector('.types-select')
var elpokemonList = document.querySelector('.wrapper');




btnsubmit.addEventListener('click', function(evt){
   evt.preventDefault();

    console.log(extresearch.value);
    console.log(alphabet.value)
})



function elementCreator(tagName) {
    return document.createElement(tagName);
}

function pokemonCreator(pokemon) {

    var item = elementCreator('li');
    var hr = elementCreator('hr')
    var heart = elementCreator('i')
    var nameHeart = elementCreator('div')
    var title = elementCreator('h5');
    var elheight = elementCreator('h5');
    var elweight = elementCreator('h5');
    var types = elementCreator('p');
    var poster = elementCreator('img');
    var inform = elementCreator('div');
  


// 
    poster.src = pokemon.img;
    poster.width = '157';
    title.textContent = pokemon.name;
    types.textContent = pokemon.type.join(" , ");
    elheight.textContent = pokemon.height;
    elweight.textContent = pokemon.weight;


    heart.classList.add('bi')
    heart.classList.add('bi-heart')
    heart.style.margin = '0 30px 0 0'
    nameHeart.appendChild(title)
    nameHeart.appendChild(heart)
    nameHeart.style.display = 'flex'
    nameHeart.classList.add('justify-content-between');

    inform.appendChild(elheight);
    inform.appendChild(elweight);
    inform.classList.add('pocemon__inform');
    elheight.classList.add('inform__height');
    hr.style.height = '2px'
    hr.style.opacity = '1'
    hr.style.margin = '0 0 20px 0'
    title.style.margin = '0 0 0 30px';
    types.style.margin = '0 0 0 30px';

    elpokemonList.appendChild(item);

    
    item.appendChild(poster);
    item.appendChild(hr);
    item.appendChild(nameHeart);
    item.appendChild(types);
    item.appendChild(inform);

}

for (var i = 0; i < pokemons.length; i++) {
    pokemonCreator(pokemons[i]);
}




