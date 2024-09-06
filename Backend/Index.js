import express from 'express';
import {PORT} from './Config.js';

import demo from './routes/Demo.routes.js';

const app = express()
app.use(express.json());

app.use(demo)

app.listen(PORT)
console.log(`server ejecutandose en el puerto ${PORT}`)