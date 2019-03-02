import express from 'express';
import bodyParser from 'body-parser';
import productsApi from './components/products';

const app = express();

/** Parse the request body data into JSON */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** API endpoints */
app.use('/products', productsApi);

export default app;
