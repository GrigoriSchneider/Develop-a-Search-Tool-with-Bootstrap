// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"recipes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recipesjson = void 0;
var recipesjson = {
  "recipes": [{
    "id": 1,
    "name": "Coconut Lemonade",
    "servings": 1,
    "ingredients": [{
      "ingredient": "Coconut milk",
      "quantity": 400,
      "unit": "ml"
    }, {
      "ingredient": "Lemon juice",
      "quantity": 2
    }, {
      "ingredient": "Coconut cream",
      "quantity": 2,
      "unit": "tablespoons"
    }, {
      "ingredient": "Sugar",
      "quantity": 30,
      "unit": "grams"
    }, {
      "ingredient": "Ice cubes"
    }],
    "time": 10,
    "description": "Place the ice cubes to your taste in the blender, add the milk, the coconut cream, the juice from 2 lemons and the sugar. Blend to the desired consistency",
    "appliance": "Blender",
    "ustensils": ["tablespoons", "glasses", "lemon squeezer"]
  }, {
    "id": 2,
    "name": "Tahitian Raw Fish",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Bluefin Tuna (or albacore)",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Cucumber",
      "quantity": 1
    }, {
      "ingredient": "Tomato",
      "quantity": 2
    }, {
      "ingredient": "Carrot",
      "quantity": 1
    }, {
      "ingredient": "Lime",
      "quantity": 5
    }, {
      "ingredient": "Coconut Milk",
      "quantity": 100,
      "unit": "ml"
    }],
    "time": 60,
    "description": "Cut the tuna into cubes, place in a dish and cover with lime juice (better to use a wide, shallow dish). Place in the refrigerator for at least 2 hours. (If possible, prepare it the evening before. After leaving the fish to marinate, cut the cucumber, without the skin, into thin slices and the tomatoes, taking care to remove the seeds. Grate the carrot. Add the vegetables to the fish with the lemon in a salad bowl. Add the coconut milk. To add more flavor, you can add 1 to 2 tablespoons of coconut cream",
    "appliance": "Salad bowl",
    "ustensils": ["lemon squeezer"]
  }, {
    "id": 3,
    "name": "Réunion Coconut Chicken",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Chicken",
      "quantity": 1
    }, {
      "ingredient": "Coconut milk",
      "quantity": 400,
      "unit": "ml"
    }, {
      "ingredient": "Tomato coulis",
      "quantity": 25,
      "unit": "cl"
    }, {
      "ingredient": "Onion",
      "quantity": 1
    }, {
      "ingredient": "Red pepper",
      "quantity": 1
    }, {
      "ingredient": "Olive oil"
    }],
    "time": 80,
    "description": "Cut the chicken into pieces and brown them in a pan with olive oil. Season. When browned, let cook, adding water. After 30 minutes, add the tomato coulis, the coconut milk as well as the pepper and onion chopped into pieces. Let cook for an additional 30 minutes. Serve with rice",
    "appliance": "Casserole dish",
    "ustensils": ["knife"]
  }, {
    "id": 4,
    "name": "Rice salad",
    "servings": 4,
    "ingredients": [{
      "ingredient": "White rice",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Crumbled tuna",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Tomato",
      "quantity": 2
    }, {
      "ingredient": "Hard-boiled egg",
      "quantity": 2
    }, {
      "ingredient": "Corn",
      "quantity": 300,
      "unit": "grams"
    }, {
      "ingredient": "Dressing",
      "quantity": 5,
      "unit": "cl"
    }],
    "time": 50,
    "description": "Cook the rice. Once the rice is cooked, let it cool. Cut the hard-boiled eggs into quarters or into strips as desired, dice the tomatoes, add the eggs, tomatoes, fish, corn and the dressing to the rice. Add gherkins, olives etc. to taste.",
    "appliance": "Rice cooker",
    "ustensils": ["salad bowl", "colander"]
  }, {
    "id": 5,
    "name": "Tuna pie",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Pastry dough",
      "quantity": 1
    }, {
      "ingredient": "Crumbled tuna",
      "quantity": 130,
      "unit": "grams"
    }, {
      "ingredient": "Tomato",
      "quantity": 2
    }, {
      "ingredient": "Crème fraîche",
      "quantity": 2,
      "unit": "tablespoons"
    }, {
      "ingredient": "grated Gruyere",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Dijon mustard",
      "quantity": 1,
      "unite": "tablespoons"
    }],
    "time": 45,
    "description": "Spread the dough to the size of the pan, spread the mustard on the dough, add the tuna. Cut the tomatoes into slices and place them on the fish, add a little crème fraîche to the whole pie and top with grated Gruyere. Bake for 30 minutes",
    "appliance": "Oven",
    "ustensils": ["pie dish", "cheese grater", "knife"]
  }, {
    "id": 6,
    "name": "Apple pie",
    "servings": 6,
    "ingredients": [{
      "ingredient": "Short crust pastry",
      "quantity": 1
    }, {
      "ingredient": "Apple",
      "quantity": 3
    }, {
      "ingredient": "Egg",
      "quantity": "2"
    }, {
      "ingredient": "Crème fraîche",
      "quantity": 25,
      "unit": "cl"
    }, {
      "ingredient": "Powdered sugar",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Vanilla sugar",
      "quantity": 1,
      "unit": "sachets"
    }],
    "time": 50,
    "description": "Start by mixing the eggs, sugar and vanilla sugar in a salad bowl, cut the apples into slices, add the crème fraîche to the eggs. Once everything is ready, spread the pie across the pan. Don't forget to prick the base with a fork before placing the apples on the pie. Finally, pour the egg and crême fraîche-based mixture over the top. Bake for 30 minutes",
    "appliance": "Oven",
    "ustensils": ["pie dish", "salad bowl", "fork"]
  }, {
    "id": 7,
    "name": "Chocolate and strawberry tartlets",
    "servings": 6,
    "ingredients": [{
      "ingredient": "Shortbread pastry dough",
      "quantity": 1
    }, {
      "ingredient": "Milk chocolate",
      "quantity": 300,
      "unit": "grams"
    }, {
      "ingredient": "Liquid cream",
      "quantity": 80,
      "unit": "cl"
    }, {
      "ingredient": "Butter",
      "quantity": "30",
      "unit": "grams"
    }, {
      "ingredient": "Strawberry",
      "quantity": 6
    }],
    "time": 50,
    "description": "Spread the dough into the tartlet pans. Cook the dough for 30 minutes. Cut the chocolate into pieces and heat it up, add the liquid cream to it, add the butter and stir until you have a smooth paste. Pour the paste onto the tartlets. Cut the strawberries in half and place them on top ",
    "appliance": "Oven",
    "ustensils": ["moule à tartelettes (6)", "casserolle"]
  }, {
    "id": 8,
    "name": "Brownie",
    "servings": 10,
    "ingredients": [{
      "ingredient": "Nuts",
      "quantity": "180",
      "unit": "grams"
    }, {
      "ingredient": "Dark chocolate",
      "quantity": 150,
      "unit": "grams"
    }, {
      "ingredient": "Butter",
      "quantity": 120,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 2
    }, {
      "ingredient": "Powdered sugar",
      "quantity": "110",
      "unit": "grams"
    }, {
      "ingredient": "flour",
      "quantity": 90,
      "unit": "grams"
    }],
    "time": 60,
    "description": "Chop the nuts coarsely. Melt the chocolate with the butter. Mix together the egg and sugar and mix them with the chocolate. Add the flour. Mix until smooth then add the nuts. Pour the mixture into a baking pan, preferably rectangular. Bake at 180° for 20 to 25 minutes. Take out of the oven and wait a few minutes before removing from the pan. Serve with a scoop of ice cream for more indulgence.",
    "appliance": "Oven",
    "ustensils": ["cake mold", "pan"]
  }, {
    "id": 9,
    "name": "Fresh Mediterranean goat's cheese salad",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Cucumber",
      "quantity": 1
    }, {
      "ingredient": "Olives"
    }, {
      "ingredient": "Goat's cheese",
      "quantity": 150,
      "unit": "grams"
    }, {
      "ingredient": "Balsamic vinegar"
    }, {
      "ingredient": "Olive oil"
    }, {
      "ingredient": "Basil"
    }],
    "time": 15,
    "description": "Peel the cucumber and cut it in half, remove the seeds. Cut the olives and goat's cheese into pieces. Add the basil and balsamic vinegar and olive oil to taste.",
    "appliance": "Salad bowl",
    "ustensils": ["cuillère en bois", "couteau"]
  }, {
    "id": 10,
    "name": "Tartiflette",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Reblochon",
      "quantity": "1"
    }, {
      "ingredient": "Potatoes",
      "quantity": 4.5,
      "unit": "kg"
    }, {
      "ingredient": "Smoked ham",
      "quantity": 2,
      "unit": "slices"
    }, {
      "ingredient": "Onion",
      "quantity": 300,
      "unit": "grams"
    }, {
      "ingredient": "Dry white wine",
      "quantity": 30,
      "unit": "cl"
    }],
    "time": 60,
    "description": "Begin by cooking the potatoes in boiling water. Then peel them and cut them into slices. Slice the onions and brown them in butter. Add the smoked ham cut and potatoes, both into pieces. Season to your taste (and that of your guests). Cook for around 10 minutes then add the white wine. After 5 minutes, place it all into a baking dish. Cut up the reblochon, either in slices, or cut into halves from the side and cover the potatoes. Bake (approximately 220°) for 25 minutes. It's ready!",
    "appliance": "Oven",
    "ustensils": ["baking dish", "knife", "Peeling"]
  }, {
    "id": 11,
    "name": "Tomato, mozzarella and apple salad",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Cherry tomatoes",
      "quantity": 250,
      "unit": "grams"
    }, {
      "ingredient": "Mozzarella",
      "quantity": 150,
      "unit": "grams"
    }, {
      "ingredient": "Parma ham",
      "quantity": 4,
      "unit": "slices"
    }, {
      "ingredient": "Apples",
      "quantity": 1
    }, {
      "ingredient": "Green salad",
      "quantity": 1
    }, {
      "ingredient": "Dressing",
      "quantity": 5,
      "unit": "cl"
    }],
    "time": 10,
    "description": "Begin by cutting the salad leaves, add the cherry tomatoes and the cheese, cut into cubes or balls with a melon spoon. Cut the Parma ham into thin strips. Add the apple, also cut into small pieces. Season to your taste. ",
    "appliance": "Salad bowl",
    "ustensils": ["knife", "melon spoon"]
  }, {
    "id": 12,
    "name": "Rhubarb and apple compote",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Rhubarb",
      "quantity": 160,
      "unit": "grams"
    }, {
      "ingredient": "Apples",
      "quantity": 8
    }, {
      "ingredient": "Vanilla sugar",
      "quantity": 6,
      "unit": "sachets"
    }, {
      "ingredient": "Water",
      "quantity": "0.5",
      "unit": "cups"
    }],
    "time": 40,
    "description": "Peel the fruit and cut it into pieces, place it in a pan, adding the water and vanilla sugar. Leave to cook for 15 minutes, stirring regularly.",
    "appliance": "Pan",
    "ustensils": ["knife", "peeling"]
  }, {
    "id": 13,
    "name": "Mashed potato salad",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Mashed",
      "quantity": 60,
      "unit": "grams"
    }, {
      "ingredient": "Potatoes",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Shallot",
      "quantity": 2
    }, {
      "ingredient": "Cider vinegar",
      "quantity": 1,
      "unit": "tablespoon"
    }, {
      "ingredient": "olive oil",
      "quantity": 2,
      "unit": "tablespoon"
    }],
    "time": 40,
    "description": "Cook the potatoes for around 30 minutes. Thinly slice the shallots. While the potatoes are cooking. Prepare the dressing with the olive oil and the cider vinegar. Season to taste. Place the mash into a salad bowl. Add",
    "appliance": "Pan",
    "ustensils": ["couteau", "saladier", "cuillère en bois"]
  }, {
    "id": 14,
    "name": "Breton sausage and raclette cheese galette pancake",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Breton or Toulouse sausage",
      "quantity": 2
    }, {
      "ingredient": "Buckwheat flour",
      "quantity": 130,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 1
    }, {
      "ingredient": "Raclette cheese",
      "quantity": 300,
      "unit": "grams"
    }, {
      "ingredient": "Onion",
      "quantity": 1
    }, {
      "ingredient": "Butter",
      "quantity": 75,
      "unit": "grams"
    }],
    "time": 100,
    "description": "Mix the flour and eggs together, melt 25 grams of butter and add to the paste. Add salt. Leave to rest for 1 hour. Make the galette pancakes and leave to cool. Heat the sausages with the butter and the onion. Wrap the sausages in the pancakes with some of the cheese. Place the rest of the raclette cheese on top of the pancakes. Bake for 20 minutes",
    "appliance": "Oven",
    "ustensils": ["poelle à frire", "couteau"]
  }, {
    "id": 15,
    "name": "Chocolate and Banana Pancakes",
    "servings": 10,
    "ingredients": [{
      "ingredient": "Egg",
      "quantity": 3
    }, {
      "ingredient": "Flour",
      "quantity": 250,
      "unit": "grams"
    }, {
      "ingredient": "Milk",
      "quantity": 600,
      "unit": "ml"
    }, {
      "ingredient": "Salted butter",
      "quantity": 30,
      "unit": "grams"
    }, {
      "ingredient": "Milk chocolate",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Banana",
      "quantity": 4
    }],
    "time": 60,
    "description": "Mix the flour, eggs and milk together in a salad bowl. Beat until the mixture is smooth. Meanwhile, melt the butter and add some of it to the pancake batter. Melt the chocolate (with the remaining salted butter). While you heat the pancakes. Add the melted chocolate and the sliced bananas. Add a touch of whipped cream for style",
    "appliance": "Pancake pan",
    "ustensils": ["saladier", "louche", "cuillère en bois"]
  }, {
    "id": 16,
    "name": "Tomato pasta gratin",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Tomato",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Mozzarella",
      "quantity": 250,
      "unit": "grams"
    }, {
      "ingredient": "Penne",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Basil",
      "quantity": 1,
      "unit": "vines"
    }, {
      "ingredient": "olive oil",
      "quantity": 2,
      "unit": "tablespoon"
    }],
    "time": 45,
    "description": "Cook the pasta. If you do not have penne, pasta shells will work just as well. Cut the tomatoes into small pieces, either sliced or diced. Cut the basil into small pieces and mix it in with the tomatoes. Cut the mozzarella into slices. Preheat the oven to 200°. Alternate between layers of pasta and layers of tomatoes, finish off with a layer of pasta and cover with cheese. Bake for 30 minutes and enjoy! A simple recipe that will please the little ones as well as the grown ups.",
    "appliance": "Oven",
    "ustensils": ["plat à gratin", "couteau", "râpe à fromage"]
  }, {
    "id": 17,
    "name": "Strawberry smoothie",
    "servings": 6,
    "ingredients": [{
      "ingredient": "Strawberry",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Watermelon",
      "quantity": 0.5
    }, {
      "ingredient": "Lemon juice",
      "quantity": 1,
      "unit": "tablespoons"
    }, {
      "ingredient": "Ice cubes",
      "quantity": 8
    }, {
      "ingredient": "Mint"
    }],
    "time": 15,
    "description": "Cut the strawberries into pieces, cut out the melon's flesh and remove the seeds. Place together into a blender. Add a tablespoon of lemon juice as well as the ice cubes. Add some mint leaves for more freshness. Blend it. Serve and enjoy.",
    "appliance": "Blender",
    "ustensils": ["verres", "couteau", "presse citron"]
  }, {
    "id": 18,
    "name": "Pineapple and vanilla smoothie",
    "servings": 5,
    "ingredients": [{
      "ingredient": "Pineapple",
      "quantity": 1
    }, {
      "ingredient": "Vanilla ice cream",
      "quantity": 500,
      "unit": "ml"
    }, {
      "ingredient": "Milk",
      "quantity": 50,
      "unit": "cl"
    }],
    "time": 10,
    "description": "Break off 1/5th of the pineapple (a nice slice that will serve as decoration for the glasses), place the rest, cut into cubes, in the blender, add the vanilla ice cream and the milk. Blend. Serve and decorate with the remaining pineapple. It's ready",
    "appliance": "Blender",
    "ustensils": ["verres", "couteau"]
  }, {
    "id": 19,
    "name": "Banana and Kiwi Fruit Shake",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Kiwi Fruit",
      "quantity": 4
    }, {
      "ingredient": "Lemon",
      "quantity": 1
    }, {
      "ingredient": "Milk",
      "quantity": 1,
      "unit": "liters"
    }, {
      "ingredient": "Icing sugar",
      "quantity": 30,
      "unit": "grams"
    }, {
      "ingredient": "Banana",
      "quantity": 1
    }],
    "time": 0,
    "description": "Cut the fruit into pieces, add the lemon juice, milk and icing sugar. Blend. Add some ice cubes if the milk has not been chilled.",
    "appliance": "Blender",
    "ustensils": ["couteau", "verres", "presse citron"]
  }, {
    "id": 20,
    "name": "Pasta Carbonara",
    "servings": 5,
    "ingredients": [{
      "ingredient": "Tagliatelle",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Lardons",
      "quantity": 150,
      "unit": "grams"
    }, {
      "ingredient": "Crème fraîche",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Parmesan",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "olive oil",
      "quantity": 1,
      "unit": "tablespoons"
    }],
    "time": 30,
    "description": "Cook the pasta as shown on the packet. Brown the lardons in a skillet with olive oil. Add the crème fraîche and turn the heat down to minimum. When the Tagliatelle is ready, place it in the skillet and mix it all together well, adding an egg yolk. Serve and add grated parmesan.",
    "appliance": "Skillet",
    "ustensils": ["râpe à fromage", "cuillère en bois"]
  }, {
    "id": 21,
    "name": "Spaghetti Bolognaise",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Spaghetti",
      "quantity": 400,
      "unit": "grams"
    }, {
      "ingredient": "Onion",
      "quantity": 2
    }, {
      "ingredient": "Tomato coulis",
      "quantity": 300,
      "unit": "grams"
    }, {
      "ingredient": "Minced meat, 1% fat",
      "quantity": 400,
      "unit": "grams"
    }, {
      "ingredient": "Red wine",
      "quantity": 20,
      "unit": "cl"
    }, {
      "ingredient": "Crème Fraîche",
      "quantity": 1,
      "unit": "tablespoons"
    }],
    "time": 30,
    "description": "Cook the minced meat in a frying pan. In another, cook the onions, chopped into thin cubes, with a bit of butter. Add some red wine. Mix the onions with the minced meat. Cook the pasta for the time shown on the packet. Add the tomato coulis to the minced meat. Once the pasta is cooked, add the crème fraîche to the minced meat. Serve.",
    "appliance": "Pan",
    "ustensils": ["Cuillère en bois", "louche", "couteau"]
  }, {
    "id": 22,
    "name": "Chocolate fondant",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Butter",
      "quantity": 160,
      "unit": "grams"
    }, {
      "ingredient": "Dark chocolate",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Flour",
      "quantity": 50,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 4
    }, {
      "ingredient": "Sugar",
      "quantity": 150,
      "unit": "grams"
    }],
    "time": 30,
    "description": "Melt the chocolate and the butter in a double boiler. Beat the eggs with the sugar in a salad bowl until the mixture has a mousse-like texture. Add the flour as well as the melted butter and chocolate mixture. Butter the cake mold. Place in an oven preheated to 200° then heat through for a further 15 minutes. It's ready. Serve with a scoop of ice cream or double cream.",
    "appliance": "Oven",
    "ustensils": ["moule à gateaux", "fouet", "casserolle"]
  }, {
    "id": 23,
    "name": "Quiche Lorraine",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Short crust pastry dough",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Lardons",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Butter",
      "quantity": 30,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 3
    }, {
      "ingredient": "Crème Fraîche",
      "quantity": 20,
      "unit": "cl"
    }, {
      "ingredient": "Milk",
      "quantity": 20,
      "unit": "cl"
    }],
    "time": 60,
    "description": "Line a baking pan with the dough and prick it. Scatter butter over it. Heat the lardons in a frying pan. Beat the eggs together adding the crème fraîche and the milk. Finally, add the lardons, season to your taste. Pour the mixture over the pastry. Cook for approximately 50 minutes.",
    "appliance": "Oven",
    "ustensils": ["moule à gateaux", "rouleau à patisserie", "fouet"]
  }, {
    "id": 24,
    "name": "Pasta salad",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Crumbled tuna",
      "quantity": 160,
      "unit": "grams"
    }, {
      "ingredient": "Corn",
      "quantity": 60,
      "unit": "grams"
    }, {
      "ingredient": "Tomato",
      "quantity": 1
    }, {
      "ingredient": "Cucumber",
      "quantity": 0.5
    }, {
      "ingredient": "Macaroni",
      "quantity": 300,
      "unit": "grams"
    }, {
      "ingredient": "Mayonnaise",
      "quantity": 2,
      "unit": "tablespoons"
    }],
    "time": 40,
    "description": "Dice the cucumber and the tomatoes, place them in a salad bowl with the corn and crumbled fish, add the pasta. Add the mayonnaise. Mix it all together and serve chilled.",
    "appliance": "Salad bowl",
    "ustensils": ["couteau", "cuillère en bois"]
  }, {
    "id": 25,
    "name": "Cookies",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Sugar",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Butter",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Flour",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Dark chocolate chips",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 1
    }],
    "time": 30,
    "description": "Melt the butter and mix it together with the sugar. Finally, add the egg. Add the flour while mixing slowly to get a smooth mixture without lumps. Add the chocolate chips. Prepare a baking tray with little cut-outs for the cookies. Bake for 10 minutes at 180°.",
    "appliance": "Oven",
    "ustensils": ["fouet", "saladier", "plaque de cuisson"]
  }, {
    "id": 26,
    "name": "Tomato soup",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Tomato",
      "quantity": 6
    }, {
      "ingredient": "Potatoes",
      "quantity": 1
    }, {
      "ingredient": "Olive oil"
    }, {
      "ingredient": "Onion",
      "quantity": 1
    }, {
      "ingredient": "Garlic",
      "quantity": 1,
      "unit": "cloves"
    }],
    "time": 25,
    "description": "Pour the oil into a pressure cooker, cut the vegetables and pour them into the hot oil. Leave to cook and stir for 10 minutes. Mix in a blender. Serve.",
    "appliance": "Blend",
    "ustensils": ["cocotte minute", "couteau"]
  }, {
    "id": 27,
    "name": "Sorrel soup",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Sorrel",
      "quantity": 2
    }, {
      "ingredient": "Egg",
      "quantity": 1
    }, {
      "ingredient": "Crème fraîche",
      "quantity": 4,
      "unit": "tablespoon"
    }, {
      "ingredient": "Noodles",
      "quantity": 1,
      "unit": "glasses"
    }, {
      "ingredient": "Salted butter",
      "quantity": 50,
      "unit": "grams"
    }],
    "time": 15,
    "description": "Melt the sorrel with the semi-salted butter, add a liter of water. Add the noodles. Cook. When ready, remove from the heat and after 5 minutes, add the egg yolk and the crème fraîche.",
    "appliance": "Pan",
    "ustensils": ["couteau", "cuillère en bois"]
  }, {
    "id": 28,
    "name": "Leek soup",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Leek",
      "quantity": 3
    }, {
      "ingredient": "Potatoes",
      "quantity": 400,
      "unit": "grams"
    }, {
      "ingredient": "Sorrel",
      "quantity": 75,
      "unit": "grams"
    }, {
      "ingredient": "Butter",
      "quantity": 50,
      "unit": "grams"
    }, {
      "ingredient": "Crème fraîche",
      "quantity": 10,
      "unit": "cl"
    }],
    "time": 80,
    "description": "Chop the whites of the leeks into slices and heat them up in 25 grams of butter. Add the potatoes, cut into pieces. Add the water and leave to simmer for 45 minutes. Heat the sorrel with the remaining butter then add it all together. Blend. Add the cream. Enjoy.",
    "appliance": "Blend",
    "ustensils": ["casserolle", "couteau"]
  }, {
    "id": 29,
    "name": "Quick Hummus",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Chickpeas",
      "quantity": 1,
      "unit": "tins"
    }, {
      "ingredient": "Garlic",
      "quantity": 1,
      "unit": "cloves"
    }, {
      "ingredient": "Lemon",
      "quantity": 2
    }, {
      "ingredient": "Olive oil"
    }, {
      "ingredient": "Paprika"
    }],
    "time": 30,
    "description": "Take the chickpeas, place them in the blender with the olive oil, add the juice from 2 lemons and some paprika, according to taste.",
    "appliance": "Blend",
    "ustensils": ["cuillère en bois", "presse citron"]
  }, {
    "id": 30,
    "name": "Split pea purée",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Split Pea",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Onion",
      "quantity": 1
    }, {
      "ingredient": "Garlic",
      "quantity": 2,
      "unit": "cloves"
    }],
    "time": 60,
    "description": "Place all of the ingredients into a casserole dish. Add water to cover everything and simmer for 1 hour. Mix in a blender. Season. It's ready",
    "appliance": "Blend",
    "ustensils": ["casserolle", "cuillère en bois"]
  }, {
    "id": 31,
    "name": "Mixed vegetables",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Carrot",
      "quantity": 2
    }, {
      "ingredient": "Potatoes",
      "quantity": 2
    }, {
      "ingredient": "Green beans",
      "quantity": 150,
      "unit": "grams"
    }, {
      "ingredient": "Peas",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Bacon",
      "quantity": 150,
      "unit": "grams"
    }],
    "time": 60,
    "description": "Chop the carrots and potatoes into cubes. Brown them off in the butter. Add the bacon. When the bacon is browned, add a large glass of water. Add the peas and the green beans (both pre-cooked). Add salt, pepper, thyme and bay leaves",
    "appliance": "Frying pan",
    "ustensils": ["Couteau", "économe"]
  }, {
    "id": 32,
    "name": "Turkey Croque Monsieur",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Sandwich bread",
      "quantity": 8,
      "unit": "slices"
    }, {
      "ingredient": "Turkey breast",
      "quantity": 4,
      "unit": "slices"
    }, {
      "ingredient": "Emmental",
      "quantity": 8,
      "unit": "slices"
    }, {
      "ingredient": "Gruyere",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Milk",
      "quantity": 5,
      "unit": "cl"
    }, {
      "ingredient": "Nutmeg",
      "quantity": 1,
      "unit": "pinches"
    }],
    "time": 20,
    "description": "Butter the slices of bread, add a slice of Emmental, one slice of turkey breast and another slice of Emmental between 2 slices of sandwich bread. In a bowl, mix the grated Gruyere with the milk and the nutmeg. Place on top of the croque monsieurs. Bake for 10 minutes.",
    "appliance": "Oven",
    "ustensils": ["râpe à fromage", "cuillère à Soupe", "couteau"]
  }, {
    "id": 33,
    "name": "Smoked salmon sandwich",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Sandwich bread",
      "quantity": 8,
      "unit": "slices"
    }, {
      "ingredient": "Smoked Salmon",
      "quantity": 4,
      "unit": "slices"
    }, {
      "ingredient": "Lettuce leaves",
      "quantity": 4
    }, {
      "ingredient": "Cottage cheese",
      "quantity": 4,
      "unit": "tablespoons"
    }, {
      "ingredient": "Lemon juice",
      "quantity": 1,
      "unit": "tablespoons"
    }],
    "time": 5,
    "description": "Mix the cottage cheese with the lemon. Season to taste. Brown the sandwich bread. Then spread the mixture. Add a salad leaf then the smoked salmon. It's ready.",
    "appliance": "Oven",
    "ustensils": ["couteau", "cuillère en bois"]
  }, {
    "id": 34,
    "name": "Sweet potato mash",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Sweet potato",
      "quantity": 800,
      "unit": "grams"
    }, {
      "ingredient": "Crème fraîche",
      "quantity": 20,
      "unit": "cl"
    }, {
      "ingredient": "Olive oil"
    }, {
      "ingredient": "Orange",
      "quantity": 1
    }],
    "time": 25,
    "description": "Peel the sweet potatoes and cut them into pieces. Cook them for 20 minutes in a pan of boiling water. Place them in the blender adding the cream and olive oil to your taste. Season. Squeeze the orange and add the juice to the mixture. Serve.",
    "appliance": "Blend",
    "ustensils": ["couteau", "économe", "cuillère en bois"]
  }, {
    "id": 35,
    "name": "Carrot purée",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Carrot",
      "quantity": 6
    }, {
      "ingredient": "Potatoes",
      "quantity": 1
    }, {
      "ingredient": "Butter",
      "quantity": 20,
      "unit": "grams"
    }, {
      "ingredient": "Crème fraîche",
      "quantity": 2,
      "unit": "tablespoons"
    }, {
      "ingredient": "Cumin",
      "quantity": 1,
      "unit": "teaspoons"
    }, {
      "ingredient": "Nutmeg",
      "quantity": 1,
      "unit": "pinches"
    }],
    "time": 25,
    "description": "Peel the vegetables, cut them into pieces and cook them in a pressure cooker for 15 minutes. Blend adding the butter and cream. Add the cumin and nutmeg.",
    "appliance": "Blend",
    "ustensils": ["cocotte minute", "couteau", "cuillère en bois"]
  }, {
    "id": 36,
    "name": "Goat and Zucchini Lasagne",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Zucchini",
      "quantity": 2
    }, {
      "ingredient": "Goat's cheese",
      "quantity": 4
    }, {
      "ingredient": "Milk",
      "quantity": 25,
      "unit": "cl"
    }, {
      "ingredient": "Lasagne",
      "quantity": 5,
      "unit": "sheets"
    }, {
      "ingredient": "Gruyere",
      "quantity": 40,
      "unit": "grams"
    }, {
      "ingredient": "Corn starch",
      "quantity": 1,
      "unit": "tablespoons"
    }],
    "time": 35,
    "description": "Grate the zucchini and brown them for 15 minutes. Add the fresh goat's cheese. Prepare the Bechamel with the milk and corn starch. Season, add the nutmeg according to taste. In a dish, place a bit of the sauce at the bottom, then some lasagne sheets, then some zucchini, etc. Finish with the sauce and add the Gruyere. Bake for 20 to 25 minutes at 180°.",
    "appliance": "Oven",
    "ustensils": ["plat à gratin", "râpe à fromage", "fouet"]
  }, {
    "id": 37,
    "name": "Stuffed zucchini with beef",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Zucchini",
      "quantity": 2
    }, {
      "ingredient": "Minced meat",
      "quantity": 600,
      "unit": "grams"
    }, {
      "ingredient": "Olive oil",
      "quantity": 25,
      "unit": "cl"
    }, {
      "ingredient": "Onion",
      "quantity": 1
    }, {
      "ingredient": "Tomato coulis",
      "quantity": 20,
      "unit": "cl"
    }, {
      "ingredient": "Gruyere",
      "quantity": 50,
      "unit": "grams"
    }],
    "time": 60,
    "description": "Cut the zucchini lengthwise. Place the zucchini into a salad bowl. Set aside. Sauté the zucchini in 25cl of olive oil. Add the onion then the minced meat. Place the stuffing in the zucchini. Add the tomato coulis. Bake for 30 minutes. Before the end of baking, add the grated cheese",
    "appliance": "Oven",
    "ustensils": ["couteau", "cuillère en bois", "Poelle à frire"]
  }, {
    "id": 38,
    "name": "French Toast",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Bread",
      "quantity": 6,
      "unit": "slices"
    }, {
      "ingredient": "Milk",
      "quantity": 25,
      "unit": "cl"
    }, {
      "ingredient": "Egg",
      "quantity": 3
    }, {
      "ingredient": "Brown sugar",
      "quantity": 75,
      "unit": "grams"
    }],
    "time": 20,
    "description": "Whisk the eggs, sugar and milk. Soak the bread slices. Bake for approximately 10 minutes at 180°. Serve",
    "appliance": "Oven",
    "ustensils": ["fouet", "bol", "Cuillère à Soupe"]
  }, {
    "id": 39,
    "name": "Apple crumble",
    "servings": 40,
    "ingredients": [{
      "ingredient": "Apple",
      "quantity": 2
    }, {
      "ingredient": "Flour",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Butter",
      "quantity": 50,
      "unit": "grams"
    }, {
      "ingredient": "Brown sugar",
      "quantity": 80,
      "unit": "grams"
    }],
    "time": 40,
    "description": "Dice the apples. Mix the flour, sugar and butter in a salad bowl. Mix well. Butter the baking dish and add the apples. Place the mixture that you've made on top. Bake for 20 minutes",
    "appliance": "Oven",
    "ustensils": ["saladier", "couteau", "fouet"]
  }, {
    "id": 40,
    "name": "Lemonade",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Water",
      "quantity": 1,
      "unit": "Liters"
    }, {
      "ingredient": "Lime",
      "quantity": 3
    }, {
      "ingredient": "Powdered sugar",
      "quantity": 4,
      "unit": "teaspoons"
    }, {
      "ingredient": "Baking soda",
      "quantity": 1,
      "unit": "teaspoons"
    }],
    "time": 10,
    "description": "Place the water, lemon juice and sugar in a salad bowl. Mix well. Add the baking soda. Serve. Add the ice cubes and a mint leaf for decoration.",
    "appliance": "Salad bowl",
    "ustensils": ["cuillère en bois"]
  }, {
    "id": 41,
    "name": "Chocolate mousse",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Egg",
      "quantity": 3
    }, {
      "ingredient": "Dark chocolate",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Vanilla sugar",
      "quantity": 1,
      "unit": "sachets"
    }],
    "time": 20,
    "description": "Separate the egg whites. Melt the chocolate in a double boiler. Add the yolk and the sugar to the chocolate away from the heat. Beat the egg whites until still. Add the egg whites to the chocolate mixture. Mix gently with a spatula. Serve in a dish or in glasses. Chill",
    "appliance": "Pan",
    "ustensils": ["fouet", "spatule", "verres"]
  }, {
    "id": 42,
    "name": "Charlotte with pears",
    "servings": 3,
    "ingredients": [{
      "ingredient": "Chocolate",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 3
    }, {
      "ingredient": "Pears in juice",
      "quantity": 0.5,
      "unit": "cans"
    }, {
      "ingredient": "Ladyfingers",
      "quantity": 15
    }],
    "time": 60,
    "description": "Begin by preparing the chocolate mousse at least 2 hours in advance. When the mousse is ready and rested. Moisten the ladyfingers in the pear juice. Arrange them. Alternate: chocolate mousse, ladyfingers and pears. Chill.",
    "appliance": "Charlotte mold",
    "ustensils": ["saladier", "couteau", "fouet"]
  }, {
    "id": 43,
    "name": "Lemon pie",
    "servings": 6,
    "ingredients": [{
      "ingredient": "Short crust pastry dough",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Sugar",
      "quantity": 150,
      "unit": "grams"
    }, {
      "ingredient": "Melted butter",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 3
    }, {
      "ingredient": "Lemon"
    }],
    "time": 50,
    "description": "Preheat the oven to 200°. Spread the dough. Place into a pie dish. Beat the eggs with the sugar. Add the lemon juice and the butter. Pour it onto the pastry. Bake for 30 minutes. Enjoy your meal ",
    "appliance": "Oven",
    "ustensils": ["rouleau à patisserie", "moule à tarte", "presse citron"]
  }, {
    "id": 44,
    "name": "Chocolate cream dessert",
    "servings": 6,
    "ingredients": [{
      "ingredient": "Milk",
      "quantity": 1,
      "unit": "liters"
    }, {
      "ingredient": "Chocolate",
      "quantity": 200,
      "unit": "grams"
    }, {
      "ingredient": "Sugar",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Butter",
      "quantity": 50,
      "unit": "grams"
    }, {
      "ingredient": "flour",
      "quantity": 40,
      "unit": "grams"
    }],
    "time": 15,
    "description": "Mix the flour and the melted butter, slowly adding the milk. Add some sugar after cooking. Mix well. Add the chocolate pieces and heat for 8 minutes, mixing with a wooden spoon. Place into glasses",
    "appliance": "Pan",
    "ustensils": ["cuillère en bois"]
  }, {
    "id": 45,
    "name": "Pastry cream",
    "servings": 8,
    "ingredients": [{
      "ingredient": "Milk",
      "quantity": 50,
      "unit": "cl"
    }, {
      "ingredient": "Egg",
      "quantity": 2
    }, {
      "ingredient": "Flour",
      "quantity": 30,
      "unit": "grams"
    }, {
      "ingredient": "Sugar",
      "quantity": 80,
      "unit": "grams"
    }],
    "time": 30,
    "description": "Boil the milk (you can add some vanilla essence to it. Beat the eggs and the sugar, add the flour then finally add the hot milk. Place onto a low heat to thick, stirring for approximately 5 to 10 minutes.",
    "appliance": "Pan",
    "ustensils": ["fouet", "saladier"]
  }, {
    "id": 46,
    "name": "Far Breton",
    "servings": 6,
    "ingredients": [{
      "ingredient": "Flour",
      "quantity": 250,
      "unit": "grams"
    }, {
      "ingredient": "Sugar",
      "quantity": 150,
      "unit": "grams"
    }, {
      "ingredient": "Vanilla sugar",
      "quantity": 1,
      "unit": "sachets"
    }, {
      "ingredient": "Egg",
      "quantity": 4
    }, {
      "ingredient": "Milk",
      "quantity": 1,
      "unit": "liter"
    }, {
      "ingredient": "Plums",
      "quantity": 100,
      "unit": "grams"
    }],
    "time": 60,
    "description": "Mix the flour with the sugar and the eggs adding some vanilla sugar. Slowly add the milk. Add a small glass of rum. Pour the mixture into a buttered dish placing the plums on top and bake for 45 minutes at 200°",
    "appliance": "Oven",
    "ustensils": ["fouet", "moule", "verres"]
  }, {
    "id": 47,
    "name": "Lemon mousse",
    "servings": 6,
    "ingredients": [{
      "ingredient": "Lemon juice",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Mascarpone",
      "quantity": 250,
      "unit": "grams"
    }, {
      "ingredient": "Sugar",
      "quantity": 100,
      "unit": "grams"
    }, {
      "ingredient": "Crème Fraîche",
      "quantity": 20,
      "unit": "cl"
    }],
    "time": 5,
    "description": "Mix the lemon juice with the sugar and the mascarpone. Add the crème fraîche. Mix it together and place in the freezer for 1 hour. Serve",
    "appliance": "Salad bowl",
    "ustensils": ["fouet", "verres", "cuillère en bois"]
  }, {
    "id": 48,
    "name": "Pizza",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Pizza dough",
      "quantity": 1
    }, {
      "ingredient": "Peeled tomatoes",
      "quantity": 1,
      "unit": "cans"
    }, {
      "ingredient": "Bacon",
      "quantity": 1,
      "unit": "trays"
    }, {
      "ingredient": "Button mushrooms",
      "quantity": 1,
      "unit": "cans"
    }, {
      "ingredient": "Gruyere",
      "quantity": 200,
      "unit": "grams"
    }],
    "time": 40,
    "description": "Roll out the pizza dough. Mash the peeled tomatoes, spread them over the dough, add the bacon and mushrooms. Add the Gruyere and bake for 20 minutes at 220°",
    "appliance": "Oven",
    "ustensils": ["rouleau à patisserie", "râpe à fromage", "couteau"]
  }, {
    "id": 49,
    "name": "Tropical smoothie",
    "servings": 4,
    "ingredients": [{
      "ingredient": "Banana",
      "quantity": 2
    }, {
      "ingredient": "Kiwis",
      "quantity": 3
    }, {
      "ingredient": "Mango",
      "quantity": 1
    }, {
      "ingredient": "Pineapple",
      "quantity": 4,
      "unit": "slices"
    }, {
      "ingredient": "Honey",
      "quantity": 2,
      "unit": "tablespoons"
    }],
    "time": 0,
    "description": "Chop the fruit. Liquefy in the blender. Chill. Serve",
    "appliance": "Blender",
    "ustensils": ["couteau", "verres"]
  }, {
    "id": 50,
    "name": "Frangipane",
    "servings": 2,
    "ingredients": [{
      "ingredient": "Pastry dough",
      "quantity": 400,
      "unit": "grams"
    }, {
      "ingredient": "Egg",
      "quantity": 6
    }, {
      "ingredient": "Ground almonds",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Butter",
      "quantity": 500,
      "unit": "grams"
    }, {
      "ingredient": "Icing sugar",
      "quantity": 500,
      "unit": "grams"
    }],
    "time": 60,
    "description": "Prepare the frangipane: Mix together the sugar, ground almonds, butter and eggs. Spread half of the pastry dough in a pie dish. Fill with frangipane and top with the remaining puff pastry. Bake for 30 minutes",
    "appliance": "Oven",
    "ustensils": ["rouleau à patisserie", "fouet"]
  }]
}; // { "mode": "full", "isActive": false }

exports.recipesjson = recipesjson;
},{}],"object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ustensilsObject = exports.deviceObject = void 0;

var _recipes = require("./recipes.js");

var recipes = _recipes.recipesjson.recipes; // DOM

var dropdownDevice = document.getElementById('dropdown-device');
var dropdownUstensils = document.getElementById('dropdown-ustensils'); // deviceArray for the the unique devices

var deviceArray = [];
recipes.forEach(function (recipes) {
  var device = recipes.appliance.toLowerCase();

  if (deviceArray.indexOf(device) === -1) {
    deviceArray.push(device);
  }
}); // create the deviceObject

var deviceObject = deviceArray.map(function (device, index) {
  var properties = {
    "device": device,
    "id": index,
    "IDsWithDevice": []
  };
  return properties;
}); // Adding to deviceObject the ids which use the device

exports.deviceObject = deviceObject;
deviceObject.forEach(function (li) {
  var liDevice = li.device;
  var liIDfromDevice = recipes.id;
  var liIDsWithDevice = li.IDsWithDevice;
  recipes.forEach(function (recipes) {
    var IDfromRecipe = recipes.id;
    var device = recipes.appliance.toLowerCase();

    if (device === liDevice) {
      liIDsWithDevice.push(IDfromRecipe);
    }
  });
}); // html for <li>device</li> 

var html = "";
deviceObject.forEach(function (device) {
  html += "<li id=\"device-li-".concat(device.id, "\"><a class=\"dropdown-item\" href=\"#\">").concat(device.device, "</a></li>");
});
dropdownDevice.innerHTML = html; // console.log(deviceObject)

////////////////////////////////////////////////////////////////////////////////////////
// Ustensils
var ustensilsArray = [];
recipes.forEach(function (recipes) {
  var ustensils = recipes.ustensils;
  ustensils.forEach(function (ustensil) {
    var ustensilLowerCase = ustensil.toLowerCase();

    if (ustensilsArray.indexOf(ustensilLowerCase) === -1) {
      ustensilsArray.push(ustensilLowerCase);
    }
  });
}); // create the ustensilsObject

var ustensilsObject = ustensilsArray.map(function (ustensil, index) {
  var properties = {
    "ustensil": ustensil,
    "id": index,
    "IDsWithUstensil": []
  };
  return properties;
}); // Adding to ustensilsObject the ids which use the device

exports.ustensilsObject = ustensilsObject;
ustensilsObject.forEach(function (li) {
  var liUstensil = li.ustensil;
  var liIDsWithUstensil = li.IDsWithUstensil;
  recipes.forEach(function (recipes) {
    var IDfromRecipe = recipes.id;
    var ustensils = recipes.ustensils; // console.log(ustensils)

    ustensils.forEach(function (ustensil) {
      // console.log("ustensil:", ustensil, "liUstensil:", liUstensil)
      if (ustensil.toLocaleLowerCase() === liUstensil) {
        // console.log(IDfromRecipe)
        liIDsWithUstensil.push(IDfromRecipe);
      }
    });
  });
}); // html for <li>ustensils</li>

var htmlUstensil = "";
ustensilsObject.forEach(function (ustensil) {
  htmlUstensil += "<li id=\"ustensil-li-".concat(ustensil.id, "\"><a class=\"dropdown-item\" href=\"#\">").concat(ustensil.ustensil, "</a></li>");
});
dropdownUstensils.innerHTML = htmlUstensil;
},{"./recipes.js":"recipes.js"}],"test.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liShow = liShow;
exports.ingredientsObject = void 0;

var _recipes = require("./recipes.js");

var _object = require("./object.js");

// import { inputSearch } from './version2.js';
var recipes = _recipes.recipesjson.recipes; // DOM

var cards = document.getElementById('cards');
var dropdownIngredients = document.getElementById('dropdown-ingredients');
var dropdownDevice = document.getElementById('dropdown-device');
var dropdownUstensils = document.getElementById('dropdown-ustensils');
var containerTags = document.getElementById('container-tags'); // Filter Inputs

var inputSearch = document.getElementById('input-search');
var inputIngredients = document.getElementById('input-ingredients');
var inputDevice = document.getElementById('input-device');
var inputUstensils = document.getElementById('input-ustensils'); // Error-message

var errorMessage = document.getElementById('error-message'); // InnerHtml for cards

function recipesCardsHtml() {
  var html = "";
  recipes.forEach(function (i, xx) {
    var recipesId = i.id;
    var recipesName = i.name;
    var recipesDescription = i.description;
    var recipesTime = i.time;
    html += "<div class=\"card\" id=\"".concat(recipesId, "\">");
    html += "<img src=\"/img/".concat(recipesName, ".jpg\" class=\"card-img-top\" alt=\"").concat(recipesName, "\">");
    html += "<div class=\"card-body row overflow-hidden\">";
    html += "<div class=\"card-row\">";
    html += "<h5 class=\"card-title\">".concat(recipesName, "  </h5>");
    html += "<div class=\"time\">";
    html += "<h5 class=\"card-title\"><img src=\"/img/vector.svg\"> ".concat(recipesTime, " min</h5>");
    html += "</div>";
    html += "</div>"; // row

    html += "<div class=\"col \">"; // col

    i.ingredients.map(function (x) {
      var ingredientName = x.ingredient;
      var ingredientQuantity = x.quantity;
      var ingredientUnit = x.unit;

      if (ingredientUnit === undefined && ingredientQuantity === undefined) {
        html += "<p><b>".concat(ingredientName, "</b></p>");
      } else if (ingredientUnit === undefined) {
        html += "<p><b>".concat(ingredientName, "</b>: ").concat(ingredientQuantity, " </p>");
      } else {
        html += "<p><b>".concat(ingredientName, "</b>: ").concat(ingredientQuantity, " ").concat(ingredientUnit, "</p>");
      }
    });
    html += "</div>";
    html += "<div class=\"col\">";
    html += "<p class=\"card-description\">".concat(recipesDescription, "</p>");
    html += "</div>";
    html += "</div>"; // card-body

    html += "</div>"; //card
  });
  cards.innerHTML = html;
}

recipesCardsHtml(); // array for ingredients

var ingredientsArray = []; // create IngredientsArray

function createIngredientsArray() {
  recipes.forEach(function (i) {
    return i.ingredients.map(function (x) {
      // test if object is already in the array if not push to the ingredientsarray
      if (ingredientsArray.indexOf(x.ingredient.toLowerCase()) === -1) {
        ingredientsArray.push(x.ingredient.toLowerCase());
      }
    });
  });
  console.log(ingredientsArray);
}

createIngredientsArray();
var ingredientsObject = ingredientsArray.map(function (ingredient, index) {
  var properties = {
    "ingredient": ingredient,
    "id": index,
    "IDsWithIngredient": []
  };
  return properties;
}); // console.log(ingredientsObject)

exports.ingredientsObject = ingredientsObject;

function ingredientsObjectIDs() {
  ingredientsObject.forEach(function (li) {
    var liIngredient = li.ingredient;
    var IDsWithIngredient = li.IDsWithIngredient; // console.log(liIngredient)
    // Recept object

    recipes.forEach(function (recipes) {
      var IDfromIngredient = recipes.id; // Ingredients object

      recipes.ingredients.map(function (ingredient) {
        var recipesIngredient = ingredient.ingredient.toLowerCase();

        if (recipesIngredient === liIngredient) {
          // console.log(liIngredient, ":", IDfromIngredient)
          // push id from recipes.ingredient to Ingredientsobject.IDsWithIngredient
          IDsWithIngredient.push(IDfromIngredient);
        } // console.log(recipesIngredient)

      });
    });
  });
}

ingredientsObjectIDs(); // export for version 2

// console.log(ingredientsObject)
// Ingredients dropdown
function ingredientsDropdown() {
  var html = "";
  ingredientsObject.forEach(function (ingredient) {
    html += "<li id=\"ingredient-li-".concat(ingredient.id, "\"><a class=\"dropdown-item\" href=\"#\"   >").concat(ingredient.ingredient, "</a></li>");
  });
  dropdownIngredients.innerHTML = html;
}

ingredientsDropdown(); // Filterbuttons Array

var filterButtonsArray = []; // function add filter buttons to html

function addFilterButtonsToHtml() {
  var html = '';
  filterButtonsArray.forEach(function (filterButton, index) {
    html += "<button type=\"button\" class=\"btn btn-blue\" id=\"filter-btn-".concat(index, "\" >").concat(filterButton, "<img src=\"/close.7b0c2eef.svg\" alt=\"\">\n            </button>");
  });
  containerTags.innerHTML = html;
}

addFilterButtonsToHtml(); // Add event listener to ingredients li

ingredientsObject.forEach(function (ingredient) {
  var liID = "ingredient-li-" + [ingredient.id];
  var liElement = document.getElementById(liID);
  var liElementSpan = liElement.firstElementChild;
  liElement.addEventListener('click', function (e) {
    e.preventDefault(); // push element to filterButtonsArray

    if (filterButtonsArray.indexOf(ingredient.ingredient) === -1) {
      filterButtonsArray.push(ingredient.ingredient);
    } // create filter buttons


    addFilterButtonsToHtml();
    showRecipes();
  });
});

function showRecipes() {
  recipes.forEach(function (recipes) {
    // test recipes ingredient
    recipes.ingredients.map(function (ingredient) {
      // ingredient tolowercase
      var ingredientNameLowerCase = ingredient.ingredient.toLowerCase(); // test if ingredient is index of filterButtonsArray

      if (filterButtonsArray.indexOf(ingredientNameLowerCase) !== -1) {
        trackOfRecipesProperties(ingredientNameLowerCase); //add or remove hide class

        showCards();
      }
    }); // test recipes device

    var device = recipes.appliance.toLowerCase();

    if (filterButtonsArray.indexOf(device) !== -1) {
      trackOfRecipesProperties(device); //add or remove hide class

      showCards();
    } // test recipes ustensils


    var ustensils = recipes.ustensils;
    ustensils.map(function (ustensil) {
      var ustensilLowerCase = ustensil.toLocaleLowerCase();

      if (filterButtonsArray.indexOf(ustensilLowerCase) !== -1) {
        trackOfRecipesProperties(ustensilLowerCase); //add or remove hide class

        showCards();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {}); // recipesObject keeps track of the matches with the ingredients devices & ustensils

var recipesObject = recipes.map(function (recipes) {
  var properties = {
    "RecipesID": recipes.id,
    "IngredientsIDs": [],
    "Ingredients": [],
    "DevicesIDs": [],
    "UstensilsIDs": [],
    "matchesCount": 0
  };
  return properties;
});

function trackOfRecipesProperties(testObject) {
  recipes.forEach(function (recipes) {
    var recipesID = recipes.id;
    var objectIndex = recipesID - 1; // ObjectIndex for the right number to push
    // test ingredients

    recipes.ingredients.map(function (ingredient) {
      var recipesIngredient = ingredient.ingredient.toLowerCase(); // console.log("testObject:", testObject, "recipesIngredient:", recipesIngredient, "are the same:", testObject === recipesIngredient)

      if (recipesIngredient === testObject) {
        if (recipesObject[objectIndex].Ingredients.indexOf(testObject) == -1) {
          recipesObject[objectIndex].Ingredients.push(testObject);
          recipesObject[objectIndex].matchesCount += 1; // console.log(recipesObject.matchesCount)
        }
      }
    }); // test devices

    var device = recipes.appliance.toLowerCase(); // console.log("device:", device, "testOject:", testObject, "Are the same:", device === testObject)

    if (device === testObject) {
      if (recipesObject[objectIndex].DevicesIDs.indexOf(recipesID) === -1) {
        recipesObject[objectIndex].DevicesIDs.push(recipesID);
        recipesObject[objectIndex].matchesCount += 1;
      }
    } // test ustensils


    recipes.ustensils.map(function (ustensil) {
      var ustensilLowerCase = ustensil.toLocaleLowerCase();

      if (ustensilLowerCase === testObject) {
        if (recipesObject[objectIndex].UstensilsIDs.indexOf(recipesID) === -1) {
          recipesObject[objectIndex].UstensilsIDs.push(recipesID);
          recipesObject[objectIndex].matchesCount += 1;
        }
      }
    });
  });
}

function showCards() {
  var liShowArray = [];
  recipesObject.map(function (recipesObject) {
    var id = recipesObject.RecipesID; // add/remove hide class

    if (filterButtonsArray.length == recipesObject.matchesCount) {
      // console.log("wird angezeigt cardID:", id)
      document.getElementById(id).classList.remove('hide');
      liShowArray.push(id);
    } else {
      document.getElementById(id).classList.add('hide');
    }
  }); // console.log(liShowArray)

  liShow(liShowArray); // reset liShowArray

  liShowArray = [];
}

showCards();

function liShow(liShowArray) {
  // liShowArray
  // console.log(liShowArray)
  var liIngredientsIdArray = []; // Ingredients

  ingredientsObject.forEach(function (ids) {
    var liID = ids.id;
    var liElement = "ingredient-li-".concat(liID);
    ids.IDsWithIngredient.map(function (id) {
      // console.log('ID die getestet wird:', id)
      if (liShowArray.includes(id)) {
        // console.log("show:", ingredient, "liElement:", liElement)
        if (liIngredientsIdArray.indexOf(liElement) === -1) {
          liIngredientsIdArray.push(liElement);
        }
      } else {
        // console.log("dont show:", ingredient, "liElement:", liElement)
        document.getElementById(liElement).classList.add('hide');
      }
    });
  });
  liIngredientsIdArray.forEach(function (li) {
    return document.getElementById(li).classList.remove('hide');
  }); // Devices

  var liDevicesIdArray = [];

  _object.deviceObject.forEach(function (ids) {
    var liID = ids.id;
    var liElement = "device-li-".concat(liID);
    ids.IDsWithDevice.map(function (id) {
      // console.log(liShowArray.includes(id))
      if (liShowArray.includes(id)) {
        if (liDevicesIdArray.indexOf(liElement) === -1) {
          liDevicesIdArray.push(liElement);
        }
      } else {
        // console.log(liElement)
        document.getElementById(liElement).classList.add('hide');
      }
    });
  }); // console.log(liDevicesIdArray)


  liDevicesIdArray.forEach(function (li) {
    return document.getElementById(li).classList.remove('hide');
  }); // Ustensils

  var liUstensilsIdArray = [];

  _object.ustensilsObject.forEach(function (ids) {
    var liID = ids.id;
    var liElement = "ustensil-li-".concat(liID);
    ids.IDsWithUstensil.map(function (id) {
      if (liShowArray.includes(id)) {
        if (liUstensilsIdArray.indexOf(liElement) === -1) {
          liUstensilsIdArray.push(liElement);
        }
      } else {
        document.getElementById(liElement).classList.add('hide');
      }
    });
  });

  liUstensilsIdArray.forEach(function (li) {
    return document.getElementById(li).classList.remove('hide');
  });
}

// Remove FilterButton from Html
containerTags.onclick = function (e) {
  var buttonId = e.target.id;
  var innerText = e.target.innerText;
  var Index = filterButtonsArray.indexOf(innerText); // Remove element from filterButtonsArray

  filterButtonsArray.splice(Index, 1);
  recipes.forEach(function (recipes) {
    recipes.ingredients.map(function (ingredient) {
      var recipesID = recipes.id; // ObjectIndex for the right number to push

      var objectIndex = recipesID - 1;

      if (ingredient.ingredient.toLowerCase() == innerText) {
        recipesObject[objectIndex].matchesCount -= 1; // console.log(recipesObject.matchesCount)
      }
    });
  }); // Remove element from html

  document.getElementById(buttonId).remove();
  showCards();
}; // ingredientsinput


inputIngredients.addEventListener('keyup', function (e) {
  var liShowArray = [];
  var searchString = e.target.value.toLowerCase();
  ingredientsObject.filter(function (ingredient) {
    var ingredients = ingredient.ingredient;

    if (searchString.length >= 3) {
      if (ingredients.includes(searchString)) {
        if (liShowArray.indexOf(ingredient.id) == -1) {
          liShowArray.push(ingredient.id); // console.log(liShowArray)

          ingredientSearch(liShowArray);
        }
      }
    }
  });
  dropdownIngredients.className = 'dropdown-menu-end dropdown-menu show';
});
inputIngredients.addEventListener('blur', function () {
  dropdownIngredients.className = 'dropdown-menu-end dropdown-menu';
});

function ingredientSearch(liShowArray) {
  ingredientsObject.forEach(function (ingredient) {
    var id = ingredient.id;
    var liElement = "ingredient-li-".concat(id); // console.log(liShowArray.indexOf(id) == -1)

    if (liShowArray.indexOf(id) == -1) {
      document.getElementById(liElement).classList.add('hide');
    } else {
      document.getElementById(liElement).classList.remove('hide');
    }
  });
} ///////////////////////////////////////////////////////////////
// Main search


inputSearch.addEventListener('keyup', function (e) {
  e.preventDefault();
  var searchString = inputSearch.value.toLowerCase();
  console.log(searchString);
  var liShowArray = [];
  recipes.forEach(function (recipes) {
    var name = recipes.name.toLocaleLowerCase();
    var id = recipes.id;
    var description = recipes.description.toLowerCase(); // console.log(description.indexOf(searchString) == -1)

    if (searchString.length >= 3) {
      // console.log(name)
      // console.log(name.includes(searchString))
      if (name.includes(searchString)) {
        document.getElementById(id).classList.remove('hide');
        liShowArray.push(id);
      } else if (description.includes(searchString)) {
        document.getElementById(id).classList.remove('hide');
        liShowArray.push(id);
      } else {
        document.getElementById(id).classList.add('hide');
      }
    }

    if (liShowArray.length == 0) {
      errorMessage.firstElementChild.classList.remove('hide');
    } else {
      errorMessage.firstElementChild.classList.add('hide');
    }
  });
  console.log(liShowArray);
  liShow(liShowArray);
});
inputSearch.addEventListener('blur', function () {}); //////////////////////////////////////////////////////////////////////////
// Device
// Add event listener to <li>device</li>

_object.deviceObject.forEach(function (devices) {
  var liID = "device-li-" + [devices.id];
  var liElement = document.getElementById(liID);
  var device = devices.device;
  liElement.addEventListener('click', function (e) {
    // prevent reload
    e.preventDefault(); // push element to filterButtonsArray

    if (filterButtonsArray.indexOf(device) === -1) {
      filterButtonsArray.push(device);
      addFilterButtonsToHtml();
      showRecipes();
    }
  });
});

inputDevice.addEventListener('keyup', function (e) {
  e.preventDefault();
  var searchString = inputDevice.value.toLowerCase();
  var liShowArray = [];
  recipes.forEach(function (recipes) {
    var deviceName = recipes.appliance.toLowerCase();
    var id = recipes.id;

    if (searchString.length >= 3) {
      if (deviceName.includes(searchString)) {
        document.getElementById(id).classList.remove('hide');
        liShowArray.push(id);
      }
    } else {
      document.getElementById(id).classList.add('hide');
    }
  });
  liShow(liShowArray);
  dropdownDevice.className = 'dropdown-menu-end dropdown-menu show';
});
inputDevice.addEventListener('blur', function () {
  dropdownDevice.className = 'dropdown-menu-end dropdown-menu';
}); /////////////////////////////////////////////////////////////////////////////////////////////
//  Ustensils
// Add event listener to <li>ustensil</li>

_object.ustensilsObject.forEach(function (ustensils) {
  var liID = "ustensil-li-" + [ustensils.id];
  var liElement = document.getElementById(liID);
  var ustensil = ustensils.ustensil;
  liElement.addEventListener('click', function (e) {
    // prevent reload
    e.preventDefault(); // push element to filterButtonsArray

    if (filterButtonsArray.indexOf(ustensil) === -1) {
      filterButtonsArray.push(ustensil);
      addFilterButtonsToHtml();
      showRecipes();
    }
  });
}); // inputUstensils.addEventListener


inputUstensils.addEventListener('keyup', function (e) {
  e.preventDefault();
  var searchString = inputUstensils.value.toLowerCase();
  var liShowArray = [];
  recipes.forEach(function (recipes) {
    var ustensil = recipes.ustensils;
    var id = recipes.id;
    ustensil.forEach(function (ustensil) {
      var ustensilName = ustensil.toLowerCase();

      if (searchString.length >= 3) {
        if (ustensilName.includes(searchString)) {
          document.getElementById(id).classList.remove('hide');
          liShowArray.push(id);
        }
      } else {
        document.getElementById(id).classList.add('hide');
      }
    });
  });
  liShow(liShowArray);
  dropdownUstensils.className = 'dropdown-menu-end dropdown-menu show';
});
inputUstensils.addEventListener('blur', function () {
  dropdownUstensils.className = 'dropdown-menu-end dropdown-menu';
});
},{"./recipes.js":"recipes.js","./object.js":"object.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65087" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map