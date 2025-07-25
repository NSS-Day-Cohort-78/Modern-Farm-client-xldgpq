// export define harvestPlants with plants array as input
export const harvestPlants = (plantsArray) => {
    // create empty seed array 
    const seedArray = []

    // iterate plants array
    for (const plant of plantsArray) {
        // get output property
        let plantOutput = plant.output
        // check if corn
        if (plant.type === "Corn") {
            // if corn divide output by 2
            plantOutput /= 2 

            //  push corn that many times
            for(let i = 0; i < plantOutput; i++){
                seedArray.push(plant)
            }
        }
        else {
            // else push the object into seed array however many times the output number
            for(let i = 0; i < plantOutput; i++){
                seedArray.push(plant)
            }
        }
    }

    return seedArray
}

        


