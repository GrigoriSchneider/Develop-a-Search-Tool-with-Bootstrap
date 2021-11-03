import { recipesjson } from './recipes.js'

const recipes = recipesjson.recipes

// DOM
let dropdownDevice = document.getElementById('dropdown-device');
let dropdownUstensils = document.getElementById('dropdown-ustensils');

// deviceArray for the the unique devices
let deviceArray = []
recipes.forEach(recipes => {
    let device = recipes.appliance.toLowerCase()


    if (deviceArray.indexOf(device) === -1) {
        deviceArray.push(device)
    }
})
// create the deviceObject
let deviceObject = deviceArray.map((device, index) => {
    let properties = {
        "device": device,
        "id": index,
        "IDsWithDevice": []
    }
    return properties
})

// Adding to deviceObject the ids which use the device
deviceObject.forEach(li => {
    let liDevice = li.device
    let liIDfromDevice = recipes.id
    let liIDsWithDevice = li.IDsWithDevice

    recipes.forEach(recipes => {
        let IDfromRecipe = recipes.id
        let device = recipes.appliance.toLowerCase()

        if (device === liDevice) {
            liIDsWithDevice.push(IDfromRecipe)
        }
    })

})

// html for <li>device</li> 
let html = ""
deviceObject.forEach(device => {
    html += `<li id="device-li-${device.id}"><a class="dropdown-item" href="#">${device.device}</a></li>`
})
dropdownDevice.innerHTML = html
// console.log(deviceObject)

export { deviceObject }

////////////////////////////////////////////////////////////////////////////////////////
// Ustensils

let ustensilsArray = []
recipes.forEach(recipes => {
    let ustensils = recipes.ustensils

    ustensils.forEach(ustensil => {
        let ustensilLowerCase = ustensil.toLowerCase()
        if (ustensilsArray.indexOf(ustensilLowerCase) === -1) {
            ustensilsArray.push(ustensilLowerCase)
        }
    })
})
// create the ustensilsObject
let ustensilsObject = ustensilsArray.map((ustensil, index) => {
    let properties = {
        "ustensil": ustensil,
        "id": index,
        "IDsWithUstensil": []
    }
    return properties
})

// Adding to ustensilsObject the ids which use the device
ustensilsObject.forEach(li => {
    let liUstensil = li.ustensil
    let liIDsWithUstensil = li.IDsWithUstensil

    recipes.forEach(recipes => {
        let IDfromRecipe = recipes.id
        let ustensils = recipes.ustensils
        // console.log(ustensils)
        ustensils.forEach(ustensil => {
            // console.log("ustensil:", ustensil, "liUstensil:", liUstensil)
            if (ustensil.toLocaleLowerCase() === liUstensil) {
                // console.log(IDfromRecipe)
                liIDsWithUstensil.push(IDfromRecipe)
            }
        })
    })
})


// html for <li>ustensils</li>
let htmlUstensil = ""
ustensilsObject.forEach(ustensil => {
    htmlUstensil += `<li id="ustensil-li-${ustensil.id}"><a class="dropdown-item" href="#">${ustensil.ustensil}</a></li>`
})
dropdownUstensils.innerHTML = htmlUstensil

export { ustensilsObject }