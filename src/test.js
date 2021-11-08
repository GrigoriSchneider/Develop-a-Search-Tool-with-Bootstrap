'use strict'

import { recipesjson } from './recipes.js'
import { deviceObject, ustensilsObject } from './object.js';
// import { inputSearch } from './version2.js';


const recipes = recipesjson.recipes;

// DOM
let cards = document.getElementById('cards');
let dropdownIngredients = document.getElementById('dropdown-ingredients');
let dropdownDevice = document.getElementById('dropdown-device');
let dropdownUstensils = document.getElementById('dropdown-ustensils');
let containerTags = document.getElementById('container-tags');

// Filter Inputs
let inputSearch = document.getElementById('input-search')
let inputIngredients = document.getElementById('input-ingredients')
let inputDevice = document.getElementById('input-device')
let inputUstensils = document.getElementById('input-ustensils')

// Error-message
let errorMessage = document.getElementById('error-message')

// InnerHtml for cards
function recipesCardsHtml() {
    let html = "";

    recipes.forEach((i, xx) => {


        let recipesId = i.id
        let recipesName = i.name;
        let recipesDescription = i.description;
        let recipesTime = i.time;

        html += `<div class="card" id="${recipesId}">`;
        html += `<img src="/img/${recipesName}.jpg" class="card-img-top" alt="${recipesName}">`;
        html += `<div class="card-body row overflow-hidden">`;
        html += `<div class="card-row">`;
        html += `<h5 class="card-title">${recipesName}  </h5>`;
        html += `<div class="time">`;
        html += `<h5 class="card-title"><img src="/img/vector.svg"> ${recipesTime} min</h5>`;
        html += `</div>`;
        html += `</div>`; // row
        html += `<div class="col ">`; // col

        i.ingredients.map((x) => {
            let ingredientName = x.ingredient;
            let ingredientQuantity = x.quantity;
            let ingredientUnit = x.unit;

            if (ingredientUnit === undefined && ingredientQuantity === undefined) {
                html += `<p><b>${ingredientName}</b></p>`;
            } else if (ingredientUnit === undefined) {
                html += `<p><b>${ingredientName}</b>: ${ingredientQuantity} </p>`;
            } else {
                html += `<p><b>${ingredientName}</b>: ${ingredientQuantity} ${ingredientUnit}</p>`;
            }
        })

        html += `</div>`;

        html += `<div class="col">`;

        html += `<p class="card-description">${recipesDescription}</p>`
        html += `</div>`;

        html += `</div>`;// card-body
        html += `</div>`;//card


    })
    cards.innerHTML = html;

}

recipesCardsHtml()

// array for ingredients
let ingredientsArray = []
// create IngredientsArray

function createIngredientsArray() {
    recipes.forEach(i =>
        i.ingredients.map(x => {

            // test if object is already in the array if not push to the ingredientsarray
            if (ingredientsArray.indexOf(x.ingredient.toLowerCase()) === -1) {
                ingredientsArray.push(x.ingredient.toLowerCase())
            }
        })
    )
    console.log(ingredientsArray)
}
createIngredientsArray()

let ingredientsObject = ingredientsArray.map((ingredient, index) => {
    let properties = {
        "ingredient": ingredient,
        "id": index,
        "IDsWithIngredient": [],
    }
    return properties

})
// console.log(ingredientsObject)

function ingredientsObjectIDs() {
    ingredientsObject.forEach(li => {
        let liIngredient = li.ingredient
        let IDsWithIngredient = li.IDsWithIngredient
        // console.log(liIngredient)

        // Recept object
        recipes.forEach(recipes => {
            let IDfromIngredient = recipes.id
            // Ingredients object
            recipes.ingredients.map(ingredient => {
                let recipesIngredient = ingredient.ingredient.toLowerCase()

                if (recipesIngredient === liIngredient) {
                    // console.log(liIngredient, ":", IDfromIngredient)

                    // push id from recipes.ingredient to Ingredientsobject.IDsWithIngredient
                    IDsWithIngredient.push(IDfromIngredient)
                }
                // console.log(recipesIngredient)

            })
        })
    })
}


ingredientsObjectIDs()
// export for version 2
export { ingredientsObject }
// console.log(ingredientsObject)

// Ingredients dropdown
function ingredientsDropdown() {
    let html = ""

    ingredientsObject.forEach(ingredient => {
        html += `<li id="ingredient-li-${ingredient.id}"><a class="dropdown-item" href="#"   >${ingredient.ingredient}</a></li>`;
    })

    dropdownIngredients.innerHTML = html;
}

ingredientsDropdown()

// Filterbuttons Array
let filterButtonsArray = []

// function add filter buttons to html
function addFilterButtonsToHtml() {
    let html = '';
    filterButtonsArray.forEach((filterButton, index) => {
        html += `<button type="button" class="btn btn-blue" id="filter-btn-${index}" >${filterButton}<img src="/close.7b0c2eef.svg" alt="">
            </button>`;
    })
    containerTags.innerHTML = html;
}
addFilterButtonsToHtml()


// Add event listener to ingredients li
ingredientsObject.forEach((ingredient) => {
    let liID = "ingredient-li-" + [ingredient.id]

    let liElement = document.getElementById(liID)
    let liElementSpan = liElement.firstElementChild
    liElement.addEventListener('click', (e) => {
        e.preventDefault()
        // push element to filterButtonsArray
        if (filterButtonsArray.indexOf(ingredient.ingredient) === -1) {
            filterButtonsArray.push(ingredient.ingredient)
        }

        // create filter buttons
        addFilterButtonsToHtml()
        showRecipes()
    })
})


function showRecipes() {
    recipes.forEach(recipes => {

        // test recipes ingredient
        recipes.ingredients.map((ingredient) => {
            // ingredient tolowercase
            let ingredientNameLowerCase = ingredient.ingredient.toLowerCase();
            // test if ingredient is index of filterButtonsArray
            if (filterButtonsArray.indexOf(ingredientNameLowerCase) !== -1) {

                trackOfRecipesProperties(ingredientNameLowerCase)
                //add or remove hide class
                showCards()
            }

        })

        // test recipes device
        let device = recipes.appliance.toLowerCase()
        if (filterButtonsArray.indexOf(device) !== -1) {
            trackOfRecipesProperties(device)

            //add or remove hide class
            showCards()
        }

        // test recipes ustensils
        let ustensils = recipes.ustensils
        ustensils.map(ustensil => {
            let ustensilLowerCase = ustensil.toLocaleLowerCase()
            if (filterButtonsArray.indexOf(ustensilLowerCase) !== -1) {
                trackOfRecipesProperties(ustensilLowerCase)

                //add or remove hide class
                showCards()
            }
        })
    })
}


document.addEventListener('DOMContentLoaded', () => {

})

// recipesObject keeps track of the matches with the ingredients devices & ustensils
let recipesObject = recipes.map(recipes => {
    let properties = {
        "RecipesID": recipes.id,
        "IngredientsIDs": [],
        "Ingredients": [],
        "DevicesIDs": [],
        "UstensilsIDs": [],
        "matchesCount": 0,
    }
    return properties
})


function trackOfRecipesProperties(testObject) {

    recipes.forEach(recipes => {
        let recipesID = recipes.id
        let objectIndex = recipesID - 1 // ObjectIndex for the right number to push

        // test ingredients
        recipes.ingredients.map(ingredient => {

            let recipesIngredient = ingredient.ingredient.toLowerCase()

            // console.log("testObject:", testObject, "recipesIngredient:", recipesIngredient, "are the same:", testObject === recipesIngredient)
            if (recipesIngredient === testObject) {
                if (recipesObject[objectIndex].Ingredients.indexOf(testObject) == -1) {
                    recipesObject[objectIndex].Ingredients.push(testObject)
                    recipesObject[objectIndex].matchesCount += 1
                    // console.log(recipesObject.matchesCount)
                }
            }
        })

        // test devices
        let device = recipes.appliance.toLowerCase()
        // console.log("device:", device, "testOject:", testObject, "Are the same:", device === testObject)
        if (device === testObject) {
            if (recipesObject[objectIndex].DevicesIDs.indexOf(recipesID) === -1) {
                recipesObject[objectIndex].DevicesIDs.push(recipesID)
                recipesObject[objectIndex].matchesCount += 1
            }
        }

        // test ustensils
        recipes.ustensils.map(ustensil => {
            let ustensilLowerCase = ustensil.toLocaleLowerCase()

            if (ustensilLowerCase === testObject) {
                if (recipesObject[objectIndex].UstensilsIDs.indexOf(recipesID) === -1) {
                    recipesObject[objectIndex].UstensilsIDs.push(recipesID)
                    recipesObject[objectIndex].matchesCount += 1
                }
            }
        })
    })
}



function showCards() {
    let liShowArray = []

    recipesObject.map(recipesObject => {
        let id = recipesObject.RecipesID

        // add/remove hide class
        if (filterButtonsArray.length == recipesObject.matchesCount) {
            // console.log("wird angezeigt cardID:", id)
            document.getElementById(id).classList.remove('hide')

            liShowArray.push(id)

        } else {
            document.getElementById(id).classList.add('hide')
        }

    })
    // console.log(liShowArray)

    liShow(liShowArray)

    // reset liShowArray
    liShowArray = []
}
showCards()

function liShow(liShowArray) {
    // liShowArray
    // console.log(liShowArray)
    let liIngredientsIdArray = []

    // Ingredients
    ingredientsObject.forEach(ids => {
        let liID = ids.id
        let liElement = `ingredient-li-${liID}`

        ids.IDsWithIngredient.map(id => {
            // console.log('ID die getestet wird:', id)

            if (liShowArray.includes(id)) {
                // console.log("show:", ingredient, "liElement:", liElement)
                if (liIngredientsIdArray.indexOf(liElement) === -1) { liIngredientsIdArray.push(liElement) }
            } else {
                // console.log("dont show:", ingredient, "liElement:", liElement)
                document.getElementById(liElement).classList.add('hide')
            }
        })
    })
    liIngredientsIdArray.forEach(li => document.getElementById(li).classList.remove('hide'))


    // Devices
    let liDevicesIdArray = []
    deviceObject.forEach(ids => {
        let liID = ids.id
        let liElement = `device-li-${liID}`

        ids.IDsWithDevice.map(id => {
            // console.log(liShowArray.includes(id))
            if (liShowArray.includes(id)) {
                if (liDevicesIdArray.indexOf(liElement) === -1) {
                    liDevicesIdArray.push(liElement)
                }
            }
            else {
                // console.log(liElement)
                document.getElementById(liElement).classList.add('hide')
            }
        })
    })
    // console.log(liDevicesIdArray)
    liDevicesIdArray.forEach(li => document.getElementById(li).classList.remove('hide'))


    // Ustensils
    let liUstensilsIdArray = []
    ustensilsObject.forEach(ids => {
        let liID = ids.id
        let liElement = `ustensil-li-${liID}`
        ids.IDsWithUstensil.map(id => {
            if (liShowArray.includes(id)) {
                if (liUstensilsIdArray.indexOf(liElement) === -1) {
                    liUstensilsIdArray.push(liElement)
                }
            } else {
                document.getElementById(liElement).classList.add('hide')
            }
        })
    })

    liUstensilsIdArray.forEach(li => document.getElementById(li).classList.remove('hide'))
}
export { liShow }

// Remove FilterButton from Html
containerTags.onclick = e => {

    let buttonId = e.target.id
    let innerText = e.target.innerText
    let Index = filterButtonsArray.indexOf(innerText)
    // Remove element from filterButtonsArray
    filterButtonsArray.splice(Index, 1)

    recipes.forEach(recipes => {
        recipes.ingredients.map(ingredient => {
            let recipesID = recipes.id
            // ObjectIndex for the right number to push
            let objectIndex = recipesID - 1



            if (ingredient.ingredient.toLowerCase() == innerText) {

                recipesObject[objectIndex].matchesCount -= 1
                // console.log(recipesObject.matchesCount)

            }
        })
    })


    // Remove element from html
    document.getElementById(buttonId).remove()

    showCards()
}

// ingredientsinput

inputIngredients.addEventListener('keyup', (e) => {
    let liShowArray = []
    let searchString = e.target.value.toLowerCase()
    ingredientsObject.filter((ingredient) => {
        let ingredients = ingredient.ingredient
        if (searchString.length >= 3) {
            if (ingredients.includes(searchString)) {

                if (liShowArray.indexOf(ingredient.id) == -1) {
                    liShowArray.push(ingredient.id)
                    // console.log(liShowArray)
                    ingredientSearch(liShowArray)
                }
            }
        }
    })
    dropdownIngredients.className = 'dropdown-menu-end dropdown-menu show'
})

inputIngredients.addEventListener('blur', () => {
    dropdownIngredients.className = 'dropdown-menu-end dropdown-menu'

});

function ingredientSearch(liShowArray) {
    ingredientsObject.forEach((ingredient) => {
        let id = ingredient.id
        let liElement = `ingredient-li-${id}`

        // console.log(liShowArray.indexOf(id) == -1)
        if (liShowArray.indexOf(id) == -1) {
            document.getElementById(liElement).classList.add('hide')
        } else {
            document.getElementById(liElement).classList.remove('hide')
        }
    })
}


///////////////////////////////////////////////////////////////
// Main search

inputSearch.addEventListener('keyup', (e) => {
    e.preventDefault()
    let searchString = inputSearch.value.toLowerCase()
    console.log(searchString)
    let liShowArray = []

    recipes.forEach((recipes) => {
        let name = recipes.name.toLocaleLowerCase()
        let id = recipes.id
        let description = recipes.description.toLowerCase()
        // console.log(description.indexOf(searchString) == -1)

        if (searchString.length >= 3) {
            // console.log(name)
            // console.log(name.includes(searchString))
            if (name.includes(searchString)) {
                document.getElementById(id).classList.remove('hide')
                liShowArray.push(id)



            } else if (description.includes(searchString)) {
                document.getElementById(id).classList.remove('hide')
                liShowArray.push(id)
            }
            else {
                document.getElementById(id).classList.add('hide')
            }
        }

        if (liShowArray.length == 0) {
            errorMessage.firstElementChild.classList.remove('hide')
        } else {
            errorMessage.firstElementChild.classList.add('hide')
        }
    })


    console.log(liShowArray)
    liShow(liShowArray)

})

inputSearch.addEventListener('blur', () => {

})

//////////////////////////////////////////////////////////////////////////
// Device


// Add event listener to <li>device</li>
deviceObject.forEach(devices => {
    let liID = "device-li-" + [devices.id]
    let liElement = document.getElementById(liID)
    let device = devices.device

    liElement.addEventListener('click', (e) => {
        // prevent reload
        e.preventDefault()
        // push element to filterButtonsArray
        if (filterButtonsArray.indexOf(device) === -1) {
            filterButtonsArray.push(device)


            addFilterButtonsToHtml()
            showRecipes()
        }
    })

})

inputDevice.addEventListener('keyup', (e) => {
    e.preventDefault()
    let searchString = inputDevice.value.toLowerCase()
    let liShowArray = []

    recipes.forEach(recipes => {
        let deviceName = recipes.appliance.toLowerCase()
        let id = recipes.id
        if (searchString.length >= 3) {
            if (deviceName.includes(searchString)) {
                document.getElementById(id).classList.remove('hide')
                liShowArray.push(id)
            }
        } else {
            document.getElementById(id).classList.add('hide')
        }
    })
    liShow(liShowArray)
    dropdownDevice.className = 'dropdown-menu-end dropdown-menu show'
})

inputDevice.addEventListener('blur', () => {
    dropdownDevice.className = 'dropdown-menu-end dropdown-menu'

});


/////////////////////////////////////////////////////////////////////////////////////////////
//  Ustensils

// Add event listener to <li>ustensil</li>
ustensilsObject.forEach(ustensils => {
    let liID = "ustensil-li-" + [ustensils.id]
    let liElement = document.getElementById(liID)
    let ustensil = ustensils.ustensil

    liElement.addEventListener('click', (e) => {
        // prevent reload
        e.preventDefault()
        // push element to filterButtonsArray
        if (filterButtonsArray.indexOf(ustensil) === -1) {
            filterButtonsArray.push(ustensil)


            addFilterButtonsToHtml()
            showRecipes()
        }
    })
})

// inputUstensils.addEventListener
inputUstensils.addEventListener('keyup', (e) => {
    e.preventDefault()
    let searchString = inputUstensils.value.toLowerCase()
    let liShowArray = []

    recipes.forEach(recipes => {
        let ustensil = recipes.ustensils
        let id = recipes.id

        ustensil.forEach(ustensil => {
            let ustensilName = ustensil.toLowerCase()

            if (searchString.length >= 3) {
                if (ustensilName.includes(searchString)) {
                    document.getElementById(id).classList.remove('hide')
                    liShowArray.push(id)
                }
            } else {
                document.getElementById(id).classList.add('hide')
            }
        })

    })
    liShow(liShowArray)
    dropdownUstensils.className = 'dropdown-menu-end dropdown-menu show'
})

inputUstensils.addEventListener('blur', () => {
    dropdownUstensils.className = 'dropdown-menu-end dropdown-menu'

});