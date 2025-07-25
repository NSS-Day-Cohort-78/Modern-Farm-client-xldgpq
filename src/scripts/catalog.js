// export and define Catalog function takes harvested food array as argument
export const Catalog = (foodArray) => {
    // get the main element from the dom store in variable
    const main = document.querySelector(".container")
    // make empty string to hold the htmlString
    let htmlString = ""
    // iterate food array
    for (const food of foodArray) {
        // make and add html of the food array item with string interpolation to the html string
         htmlString += `<section class="plant">${food.type}</section>`
    }
    // add html string to main inner html
    main.innerHTML = htmlString
}






