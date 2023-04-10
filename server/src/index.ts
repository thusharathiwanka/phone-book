import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import indexRoutes from './routes';
import { getCategories } from './controllers/category.controller';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL!;

app.get('/', (req: Request, res: Response) => {
  res.send('Phone Book API 2023');
});

app.use('/api/v1', indexRoutes);

mongoose
  .connect(MONGODB_CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    })
  )
  .catch((e) => console.log(e.message));
