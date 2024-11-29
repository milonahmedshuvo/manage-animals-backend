import { TAnimal } from "./animal.interface";
import { Animal } from "./animal.model";

const createAnimalIntoDB = async (payload:TAnimal) => {

    const result = await Animal.create(payload)
    return result
}


const getAllAnimalFromDB = async (query:Record<string, unknown>) => {
    // console.log(query.category)

    const searchTerm = query.category

    if( !searchTerm ){
       return await Animal.find()
    }
    

    const result = await Animal.find({category: { $regex: searchTerm, $options: 'i' }})
    return result
}





export const animalService = {
    createAnimalIntoDB,
    getAllAnimalFromDB
}