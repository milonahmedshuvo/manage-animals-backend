import { model, Schema } from "mongoose";
import { TAnimal } from "./animal.interface";

const animalSchema = new Schema<TAnimal>({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)



// creating model 

export const Animal = model<TAnimal>('Animal', animalSchema)