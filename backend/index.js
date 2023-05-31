import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import http from 'http';
import { registerValidation, loginValidation, systemCreateValidation } from './src/validations.js';
import cors from 'cors'

import { checkAuth, handleValidation } from './src/utils/index.js'

import { TableController, UserController } from './src/controllers/index.js'

mongoose
  .connect('mongodb+srv://alex:a98d21c17@cluster0.jvb3f.mongodb.net/?retryWrites=true&w=majority',
	
  {
    // useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB is OK"))
  .catch((err) => console.log(err));


const app = express();
const PORT = process.env.PORT ?? 3000;

const corsOptions = {
	origin:'http://localhost:3000', 
	credentials:true,            //access-control-allow-credentials:true
	optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.post('/auth/register', registerValidation, UserController.register)
app.post('/auth/login', loginValidation, UserController.login)
app.get('/auth/me', checkAuth, UserController.getMe)

app.post('/Table', checkAuth, systemCreateValidation, TableController.create)
app.delete('/Table:indexTable', checkAuth, TableController.remove)
app.patch('/Table:indexTable', checkAuth, TableController.update)

http.createServer({}, app).listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running at ${PORT}`)
},
)
