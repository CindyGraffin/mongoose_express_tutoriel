import express from 'express';
import 'dotenv/config';
import userRouter from './routes/user.router'
import { setMongoConnection } from './config/mongo.config';

const app = express();
const PORT = process.env.SERVER_PORT || 3000

app.use(express.json())
app.use('/users', userRouter)

setMongoConnection()
app.listen(PORT, () => {
    console.log(`it works on port ${PORT}`);
})