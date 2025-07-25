// import createPlan from plan
import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

//Invoke createPlan store in yearlyPlan
const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const usedPlants = usePlants()

const harvestedPlants = harvestPlants(usedPlants)

Catalog(harvestedPlants)

// SOWING THE FIELD WITH THE TRACTOR