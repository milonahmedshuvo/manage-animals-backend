import express from 'express'
import { animalController } from './animal.controller'


const router = express.Router()

router.post('/create', animalController.createAnimal)
router.get('/all', animalController.getAllAnimal)




export const animalRoute = router