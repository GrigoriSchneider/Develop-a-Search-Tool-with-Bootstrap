'use strict'

import * as bootstrap from 'bootstrap';
import { recipesjson } from './recipes.js'
// DOM
let cards = document.getElementById('cards');
let dropdownIngredients = document.getElementById('dropdown-ingredients');
let dropdownDevice = document.getElementById('dropdown-device');
let dropdownUstensils = document.getElementById('dropdown-ustensils');
let containerTags = document.getElementById('container-tags');

const recipes = recipesjson.recipes;



// tagsarray 
let tagsArray = [];
// recepesId
let recipesIdArray = [];
// Ingredients
let ingredients = [];
let showIngredients = [];
// Device
let devices = [];
let showDevice = [];
// Ustensils
let ustensils = [];
let showUstensils = [];
// showReceps
let showRecepsArray = [];

let recipesToShowFromID = [];

// Filter Inputs
let inputSearch = document.getElementById('input-search');
let inputIngredients = document.getElementById('input-ingredients');
let inputDevice = document.getElementById('input-device');
let inputUstensils = document.getElementById('input-ustensils');



// InnerHtml for cards
function recipesCardsHtml() {
    let html = '';



    for (var i = 0; i < recipes.length; i++) {

        let recipesId = recipes[i].id;

        let recipesName = recipes[i].name;


        let recipesDescription = recipes[i].description;
        let recipesTime = recipes[i].time;
        let ustensil = recipes[i].ustensils;

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

        for (var j = 0; j < recipes[i].ingredients.length; j++) {

            let ingredientName = recipes[i].ingredients[j].ingredient;
            let ingredientQuantity = recipes[i].ingredients[j].quantity;
            let ingredientUnit = recipes[i].ingredients[j].unit;
            let device = recipes[i].appliance;

            if (ingredientUnit === undefined && ingredientQuantity === undefined) {
                html += `<p><b>${ingredientName}</b></p>`;
            } else if (ingredientUnit === undefined) {
                html += `<p><b>${ingredientName}</b>: ${ingredientQuantity} </p>`;
            } else {
                html += `<p><b>${ingredientName}</b>: ${ingredientQuantity} ${ingredientUnit}</p>`;
            }


            html += ``;

            // Ingredients array
            ingredients.push(ingredientName);
            // devices array
            devices.push(device);

        }



        html += `</div>`;

        html += `<div class="col">`;

        html += `<p class="card-description">${recipesDescription}</p>`
        html += `</div>`;

        html += `</div>`;// card-body
        html += `</div>`;//card


        for (var k = 0; k < ustensil.length; k++) {
            ustensils.push(ustensil[k]);
        }
    }




}
recipesCardsHtml();

///////////////////////////////////////////
// clear  array from duplicates

function filterArrayUnique(array, newArray) {
    // first make the array tolowercase()
    let arrayLowerCase = [];

    for (let i = 0; i < array.length; i++) {
        arrayLowerCase.push(array[i].toLowerCase());
    }
    // Filter all duplicates
    let uniqueSet = new Set(arrayLowerCase);
    // back to array
    let noDuplicates = [...uniqueSet];


    //capitalize only the first letter of the array
    for (var i = 0; i < noDuplicates.length; i++) {
        newArray.push(noDuplicates[i].charAt(0).toUpperCase() + noDuplicates[i].slice(1));
    }

    return newArray;
}

// recipesDropdown
function recipesDropdown() {
    filterArrayUnique(ingredients, showIngredients);


    let html = "";


    for (var i = 0; i < showIngredients.length; i++) {
        html += `<li><a class="dropdown-item" href="#" onClick="replyForFilterTags('` + showIngredients[i] + `')" >` + showIngredients[i] + `</a></li>`;
    }

    dropdownIngredients.innerHTML = html;

    // reset Arrays
    ingredients = [];
    showIngredients = [];

    console.log(tagsArray)

}
recipesDropdown();

// deviceDropdown
// function deviceDropdown() {
//     filterArrayUnique(devices, showDevice);

//     html = "";


//     for (var i = 0; i < showDevice.length; i++) {
//         html += `<li><a class="dropdown-item" href="#">` + showIngredients[i] + `</a></li>`;
//     }

//     dropdownDevice.innerHTML = html;
// }
// deviceDropdown();

// UstensilsDropdown
// function ustensilsDropdown() {
//     filterArrayUnique(ustensils, showUstensils);

//     html = "";


//     for (var i = 0; i < showDevice.length; i++) {
//         html += `<li><a class="dropdown-item" href="#">` + showIngredients[i] + `</a></li>`;
//     }

//     dropdownUstensils.innerHTML = html;
// }
// ustensilsDropdown();


// Filter Ingredients search


inputIngredients.addEventListener('keyup', function filterFunction(e) {
    let keyword = inputIngredients.value.toLowerCase();
    let filteredArray = showIngredients.filter(function (ingredient) {
        ingredient = ingredient.toLowerCase();
        return ingredient.indexOf(keyword) > -1;
    })

    ingredientsDropdown(filteredArray);

    dropdownIngredients.className = 'dropdown-menu-end dropdown-menu show';
});



inputIngredients.addEventListener('blur', () => {
    dropdownIngredients.className = 'dropdown-menu-end dropdown-menu';
});

// ingredientsDropdown
function ingredientsDropdown(filteredArray) {
    console.log('hier ingredientsDropdown' + filteredArray)


    let html = "";

    for (var i = 0; i < filteredArray.length; i++) {
        html += `<li><a class="dropdown-item" onClick="replyForFilterTags('` + filteredArray[i] + `')" href="#">` + filteredArray[i] + `</a></li>`;
    }
    dropdownIngredients.innerHTML = html;

}



// Filtertags


window.replyForFilterTags = function (addtoArray) {
    // test if tag is already included
    if (tagsArray.includes(addtoArray) == false) {
        tagsArray.push(addtoArray);
        // Filter the Recipes
        filterRecipes();
        // console.log(tagsArray);

        // Add tags to html
        let html = '';
        for (let i = 0; i < tagsArray.length; i++) {
            html += `<button type="button" class="btn btn-blue" >` + tagsArray[i] + `
                <span class="badge badge-light" onClick="removeFromTagsArray(` + [i] + `)" ><img src="/close.7b0c2eef.svg" alt=""></span>
                </button>`;
        }
        containerTags.innerHTML = html;
    }
}

// remove Filtertags
window.removeFromTagsArray = function (index) {
    tagsArray.splice(index, 1);
    console.log(tagsArray);

    let html = '';
    for (let i = 0; i < tagsArray.length; i++) {
        html += `<button type="button" class="btn btn-blue" >` + tagsArray[i] + `
                <span class="badge badge-light" onClick="removeFromTagsArray(` + [i] + `)" ><img src="/close.7b0c2eef.svg" alt=""></span>
                </button>`;
    }
    containerTags.innerHTML = html;

}



function filterRecipes() {



    let counterHideCards = 1;

    for (let recipeID in recipes) {
        let ingredients = recipes[recipeID].ingredients


        // all card get class hide
        document.getElementById(counterHideCards).className = 'card hide';

        for (let number in ingredients) {
            // console.log(ingredients[number].ingredient)
            for (let tagNumber in tagsArray) {

                if (tagsArray[tagNumber] === ingredients[number].ingredient) {
                    // remove class hide
                    document.getElementById(counterHideCards).className = 'card ';


                    // Push recipes ID to 
                    recipesToShowFromID.push(recipeID);
                    // console.log(recipeID);
                }

            }

        }

        counterHideCards++
    }

    // for (var i = 0; i < recipes.length; i++) {

    //     let recipesId = recipes[i].id;
    //     let allIngredients = recipes[i].ingredients;

    //     // all card get class hide
    //     document.getElementById(counterHideCards).className = 'card hide';

    //     counterHideCards += 1;

    //     for (var j = 0; j < allIngredients.length; j++) {
    //         for (var k = 0; k < tagsArray.length; k++) {
    //             // only show recipes with the right incredient
    //             if (tagsArray[k].toLowerCase() === allIngredients[j].ingredient.toLowerCase()) {

    //                 // Array for the new ingredients <li></li>
    //                 recipesToShowFromID.push(recipesId);
    //                 // Remove class hide
    //                 document.getElementById(recipesId).className = 'card ';
    //             }
    //         }
    //     }
    // }


    createForLiArray(recipesToShowFromID)

    // reset array recipesToShowFromID 
    recipesToShowFromID = [];
}

function createForLiArray(arrayIds) {

    // arrayIds ingredients still available for choice
    for (let i = 0; i < arrayIds.length; i++) {

        let ingredient = recipes[arrayIds[i]].ingredients;

        for (let j = 0; j < ingredient.length; j++) {
            // Ingredients array for dropdown li choice
            // console.log(arrayIds.length);
            // console.log(ingredient[j]);
            // console.log(ingredient[j].ingredient);
            if (ingredient[j].ingredient === undefined) {
                console.log(j);
            } else {

                ingredients.push(ingredient[j].ingredient);
                // console.log(ingredient[j].ingredient);
            }
        }
    }
    // console.log(ingredients);
    recipesDropdown();
    // ingredient = [];
};
