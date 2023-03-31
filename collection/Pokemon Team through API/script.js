const menu = document.querySelector('.menu')
const team = document.querySelector('.team')
const title = document.querySelector('.menu h1')
const changTeamBtn = document.querySelector('input')
const pokemonImage = document.querySelectorAll('.pokemonImg')
const pokemonCard = document.querySelectorAll('.pokemon-card')
const pokemonName = document.querySelectorAll('.pokemon-card h3')
const pokemonLv = document.querySelectorAll('.lv')
const pokemonSex = document.querySelectorAll('.sex')
const pokemonHP = document.querySelectorAll('.HP-num')
const pokemonHPPercent = document.querySelectorAll('.percent')


const allPokemon = []
let storeSixPokemon = []


function sixRandomPokemon() {
    let sixPokemon = []
    storeSixPokemon = []
    for (let i = 0; i < 6; i++) {
        const randomPokemon = Math.floor(Math.random() * allPokemon.length)
        sixPokemon.push(allPokemon[randomPokemon])
        storeSixPokemon.push(allPokemon[randomPokemon])
        pokemonImage[i].innerHTML = `<img src="${sixPokemon[i].img}" alt=${sixPokemon[i].name}>`
        pokemonName[i].innerText = `${sixPokemon[i].name}`
    }

}

function randomLv() {
    let sixPokemonLv = []
    for (let i = 0; i < 6; i++) {
        const lvNumber = Math.floor(Math.random() * 100) + 1
        sixPokemonLv.push(lvNumber)
        pokemonLv[i].innerText = `Lv.${sixPokemonLv[i]}`
    } 
}

function randomHP() {
    let sixPokemonMaxHP = []
    let sixPokemonNowHP = []
    let sixPokemonHPPercent = []
    for (let i = 0; i < 6; i++) {
        //Text
        const MAX = Math.floor(Math.random() * 999) + 10
        const nowHP = Math.floor(Math.random() * MAX) + 0
        sixPokemonMaxHP.push(MAX)
        sixPokemonNowHP.push(nowHP)
        pokemonHP[i].innerText = `${sixPokemonNowHP[i]}/${sixPokemonMaxHP[i]}`

        //CSS
        let percent = Math.floor((nowHP/MAX) * 100)
        sixPokemonHPPercent.push(percent)
        pokemonHPPercent[i].style.width = `${sixPokemonHPPercent[i]}%`
        // console.log(nowHP, MAX)
        // console.log(percent)

        pokemonHPPercent[i].style.background = 'linear-gradient(to right, lime, #8bf500)'
        pokemonCard[i].style.background = ''
        pokemonName[i].style.color = ''
        if(sixPokemonNowHP[i] === 0) {
            pokemonCard[i].style.background = '#222'
            pokemonName[i].style.color = '#dc143c'
        } else if (sixPokemonNowHP[i] <= (sixPokemonMaxHP[i] / 4)) {
            pokemonHPPercent[i].style.background = 'linear-gradient(to right, #d20000, #f51700)'

        } else if (sixPokemonNowHP[i] <= (sixPokemonMaxHP[i] / 2)) {
            pokemonHPPercent[i].style.background = 'linear-gradient(to right, #ffcc00, #f1f500)'
        }

    }
    

}

function randomSex() {
    let sixPokemonSex = []

    for (let i = 0; i < 6; i++) {
        pokemonSex[i].innerHTML = ''
        // console.log(storeSixPokemon[i].id)
        // console.log(sixPokemonSex)
        const sex = Math.floor(Math.random() * 2)
        sixPokemonSex.push(sex)
        if(storeSixPokemon[i].id === 29 || storeSixPokemon[i].id === 30 || storeSixPokemon[i].id === 31) {
            pokemonSex[i].innerHTML = `<ion-icon name="female-outline" id="female"></ion-icon>`
        } else if (storeSixPokemon[i].id === 32 || storeSixPokemon[i].id === 33 || storeSixPokemon[i].id === 34) {
            pokemonSex[i].innerHTML = `<ion-icon name="male-outline" id="male"></ion-icon>`
        } else if (storeSixPokemon[i].id === 120 || storeSixPokemon[i].id === 121 || storeSixPokemon[i].id === 144 || storeSixPokemon[i].id === 145 
            || storeSixPokemon[i] === 132 || storeSixPokemon[i].id === 146 || storeSixPokemon[i].id === 150 || storeSixPokemon[i].id === 151 || 
            storeSixPokemon[i].id === 243 || storeSixPokemon[i].id === 244 || storeSixPokemon[i].id === 245 || storeSixPokemon[i].id === 249 || 
            storeSixPokemon[i].id === 250 || storeSixPokemon[i].id === 251) {
            pokemonSex[i].innerHTML = ''
        } else if (sixPokemonSex[i] === 0) {
            pokemonSex[i].innerHTML = `<ion-icon name="female-outline" id="female"></ion-icon>`
        } else if (sixPokemonSex[i] === 1) {
            pokemonSex[i].innerHTML = `<ion-icon name="male-outline" id="male"></ion-icon>`
        }
    }
}



for(let i = 1; i <= 251; i++) {
    const BASE_URL = `https://pokeapi.co`
    const INDEX_URL = BASE_URL + `/api/v2/pokemon/${i}`
    
    axios.get(INDEX_URL).then((response) => {
            // console.log(response.data)
            const result = response.data
    
            const pokemon = {
                name: result.name,
                img: result.sprites['front_default'],
                id: result.id,
            }
    
            allPokemon.push(pokemon)
        })
}



changTeamBtn.addEventListener('click', function randomPokemon(event) {
    sixRandomPokemon(allPokemon)
    randomLv()
    randomHP()
    randomSex()
})


pokemonCard.forEach((el) => {
    el.addEventListener('click', function(event) {

        
        if(event.target.matches('.pokemon-card')) {
            title.innerText = `君に決めた, ${event.target.children[2].innerText}！！`
        } else if (event.target.alt === event.target.parentElement.parentElement.children[2].innerText) {
            title.innerText = `君に決めた, ${event.target.parentElement.parentElement.children[2].innerText}！！`
        }
    })
})

