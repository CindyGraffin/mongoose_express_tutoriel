import mongoose from "mongoose"

const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const USER_DATABASE = process.env.USER_DATABASE

const URI: string = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${USER_DATABASE}`

const clientOptions = {
    authSource: "admin",
    useNewUrlParser: true,
    dbName: USER_DATABASE
}

export const setMongoConnection = async(): Promise<void> => {
    try {
        await mongoose.connect(URI, clientOptions)
        console.log('connection to db successful')
    } catch (error) {
        console.log(error);
    }
}