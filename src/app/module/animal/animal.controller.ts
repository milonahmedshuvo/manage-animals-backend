import { NextFunction, Request, Response } from "express";
import { animalService } from "./animal.service";


const createAnimal = async (req:Request, res:Response, next:NextFunction) => {

    try{
     const animal = req.body

     const result = await animalService.createAnimalIntoDB(animal)


     res.status(200).json({
        success: true,
        message: 'animal create successfull',
        data: result
     })

    }catch(err){
    //    console(err) 
       next(err)
    }
}





const getAllAnimal = async (req:Request, res:Response, next:NextFunction) => {

   try{
    
   const query = req.query

    const result = await animalService.getAllAnimalFromDB(query)


    res.status(200).json({
       success: true,
       message: 'animal retrived successfull',
       data: result
    })

   }catch(err){
   //    console(err) 
      next(err)
   }
}





export const animalController = {
     createAnimal,
     getAllAnimal
}