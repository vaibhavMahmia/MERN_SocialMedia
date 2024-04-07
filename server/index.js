import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectionDB  from './config/db.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js'

// configure env
dotenv.config();

// database config
connectionDB();

// rest object
const app = express();

// middlewares
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(morgan('dev'));
app.use(cors());
// routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// rest api
app.get('/', (req, res)=>{
    console.log('\nlocalhost:5000'.green + '  path of index.js visited...\n'.yellow);
    res.json({
        message:"Welcome to Memories"
    });
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`.yellow);
});