// import all the seeds functions
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

//define and export plantSeeds function with argument of yearlyPlan
export const plantSeeds = (yearlyPlan) => {
    //create for loop that iterates parent array - yearlyPlan 
   for (const seeds of yearlyPlan) {
       // create for loop that iterates children arrays
       for (const seed of seeds) {
        // make 6 if/else statements to compare array item to word ie is potato
           if (seed === 'Soybean') {
               // call function ie createPotato
               const createdPotato = createPotato()
               // push seed into field array 
               addPlant(createdPotato)
            } 
            else if (seed === 'Corn') {
                // call function ie createPotato
                const createdCorn = createCorn()
                // push seed into field array 
                addPlant(createdCorn)
            }
            else if (seed === 'Asparagus') {
                // call function ie createAsparagus
                const createdAsparagus = createAsparagus()
                // push seed into field array 
                addPlant(createdAsparagus)
            }
            else if (seed === ' Wheat') {
                // call function ie createPotato
                const createdWheat = createWheat()
                // push seed into field array 
                addPlant(createdWheat)
            }
            else if (seed === 'Potato') {
                // call function ie createPotato
                const createdPotato = createPotato()
                // push seed into field array 
                addPlant(createdPotato)
            }
            else if (seed === 'Sunflower') {
                // call function ie createPotato
                const createdSunflower = createSunflower()
                // push seed into field array 
                addPlant(createdSunflower)
            }
        }    
    }
}