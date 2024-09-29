import mongoose from 'mongoose'

export async function dbConnect(){
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('Connected',()=>{
            console.log("MongoDb Connected Succesfully");
        })

        connection.on('error',()=>{
            console.log('MongoDb Connection Error')
            process.exit();
        })
    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
    }
}