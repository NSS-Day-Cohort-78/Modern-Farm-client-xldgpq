// import createPlan from plan
import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractors.js'

//Invoke createPlan store in yearlyPlan
const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const usedPlants = usePlants()

console.log(usedPlants)
console.log('hello')


// SOWING THE FIELD WITH THE TRACTOR