import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { messageRouter } from './routes/message';

const app: Application = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/message', messageRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
