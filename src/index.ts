import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Olá Shopper!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

