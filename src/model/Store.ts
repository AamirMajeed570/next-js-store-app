import mongoose,{Schema,Document} from "mongoose";

export interface Item extends Document{
    image: string,
    price: number
}

const ItemSchema: Schema<Item> = new Schema({
    image:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
})