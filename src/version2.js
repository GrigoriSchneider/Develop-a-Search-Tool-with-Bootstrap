import { recipesjson } from './recipes.js'
import { ingredientsObject, liShow } from './test.js'

let inputSearch = document.getElementById('input-search')
const recipes = recipesjson.recipes;
let errorMessage = document.getElementById('error-message')

inputSearch.addEventListener('keyup', (e) => {
    e.preventDefault()
    let searchString = inputSearch.value.toLowerCase()

    let liShowArray = []

    for (const number in recipes) {
        let name = recipes[number].name.toLowerCase()
        let id = recipes[number].id
        let description = recipes[number].description.toLowerCase()
        // console.log('name:', name, 'id:', id)


        if (searchString.length >= 3) {
            console.log('name includes Searchstring:', name.includes(searchString))
            // check recipes name
            if (name.includes(searchString)) {
                document.getElementById(id).classList.remove('hide')
                liShowArray.push(id)
                // check recipes description
            } else if (description.includes(searchString)) {
                document.getElementById(id).classList.remove('hide')
                liShowArray.push(id)
            } else {
                document.getElementById(id).classList.add('hide')
            }
        }
        if (searchString.length >= 3) {
            if (liShowArray.length == 0) {
                errorMessage.firstElementChild.classList.remove('hide')
            } else {
                errorMessage.firstElementChild.classList.add('hide')
            }
        }
        liShow(liShowArray)

    }


})

export { inputSearch }