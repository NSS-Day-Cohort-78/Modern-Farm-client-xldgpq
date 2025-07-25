//define empty array variable to store plants (field array)
const fieldArray = [] 
// export addPlant function with seed option as paramater
export const addPlant = (seed) => {
    // check if seed is an object or an array of objects
    if (Array.isArray(seed)) {
        // loop the array
        for (const object of seed) {
            // push seed object to field array
            fieldArray.push(object)
        }
    }
    else {
        // push seed object to the empty array above (field array)
        fieldArray.push(seed)
    }
}

// export and define usePlants that returns copy of array above (field array)
export const usePlants = () => {
    // return a copy of the array
    return structuredClone(fieldArray)
}