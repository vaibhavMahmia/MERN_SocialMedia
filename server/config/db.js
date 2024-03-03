import mongoose from 'mongoose'
import colors from 'colors'

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgGreen.yellow)
    } 
    catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
}

export default connectionDB