'use strict';

// Import all plugins
import * as bootstrap from 'bootstrap';
import { recipesjson } from './recipes.js';

// Recept json
const recipes = recipesjson.recipes;

const recipesModule = {

    // DOM Elements
    elements: {
        cards: document.getElementById('cards'),
        dropdownIngredients: document.getElementById('dropdown-ingredients'),
        dropdownDevice: document.getElementById('dropdown-device'),
        dropdownUstensils: document.getElementById('dropdown-ustensils'),
        containerTags: document.getElementById('container-tags'),

        // Filter Inputs
        inputSearch: document.getElementById('input-search'),
        inputIngredients: document.getElementById('input-ingredients'),
        inputDevice: document.getElementById('input-device'),
        inputUstensils: document.getElementById('input-ustensils'),
    },

    // Arrays
    // tagsarray 
    tagsArray: [],
    // recepesId
    recipesIdArray: [],
    // Ingredients
    ingredients: [],
    showIngredients: [],
    // Device
    devices: [],
    showDevice: [],
    // Ustensils
    ustensils: [],
    showUstensils: [],
    // showReceps
    showRecepsArray: [],

    /////////////////////////////////////////
    // Add html to the cards
    recipesCardsHtml() {
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
                this.ingredients.push(ingredientName);
                // devices array
                this.devices.push(device);

            }



            html += `</div>`;

            html += `<div class="col">`;

            html += `<p class="card-description">${recipesDescription}</p>`
            html += `</div>`;

            html += `</div>`;// card-body
            html += `</div>`;//card


            for (var k = 0; k < ustensil.length; k++) {
                this.ustensils.push(ustensil[k]);
            }
        }
        cards.innerHTML = html;
    },
    ///////////////////////////////////////
    // 
    on(selector, eventType, cb) {
        document.addEventListener(eventType, (event) => {
            let element = event.target;

            while (element) {
                if (element.matches(selector)) {
                    return cb({
                        handleObj: element,
                        originalEvent: event
                    })
                }
                element = element.parentElement;
            }
        })
    },


    ///////////////////////////////////////////
    // clear  array from duplicates

    filterArrayUnique(array, newArray) {
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
    },


    ///////////////////////////////////////////
    // clear  array from duplicates


    recipesDropdown() {
        this.filterArrayUnique(this.ingredients, this.showIngredients);

        let html = "";


        for (var i = 0; i < this.showIngredients.length; i++) {
            html += `<li><a class="dropdown-item" href="#" onClick="replyForFilterTags('` + this.showIngredients[i] + `')" >` + this.showIngredients[i] + `</a></li>`;
        }

        this.elements.dropdownIngredients.innerHTML = html;

        // reset Arrays
        this.ingredients = [];
        this.showIngredients = [];

    },


    ///////////////////////////////////////////
    // 

    ingredientsDropdown(filteredArray) {

        let html = "";

        for (var i = 0; i < filteredArray.length; i++) {
            html += `<li><a class="dropdown-item" onClick="replyForFilterTags('` + filteredArray[i] + `')" href="#">` + filteredArray[i] + `</a></li>`;
        }
        this.elements.dropdownIngredients.innerHTML = html;

    },

    filterFunction(e) {
        let keyword = this.elements.inputIngredients.value.toLowerCase();
        console.log(keyword);
        let filteredArray = this.showIngredients.filter(function (ingredient) {
            ingredient = ingredient.toLowerCase();
            return ingredient.indexOf(keyword) > -1;
        })

        this.ingredientsDropdown(filteredArray);

        this.elements.dropdownIngredients.className = 'dropdown-menu-end dropdown-menu show';
    },




}



document.addEventListener('DOMContentLoaded', () => {
    recipesModule.recipesCardsHtml();

    recipesModule.recipesDropdown();

    recipesModule.elements.inputIngredients.addEventListener('keyup', recipesModule.filterFunction());

    recipesModule.elements.inputIngredients.addEventListener('blur', () => {
        recipesModule.elements.dropdownIngredients.className = 'dropdown-menu-end dropdown-menu';
    });


})