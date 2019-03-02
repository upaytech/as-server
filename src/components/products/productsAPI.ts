import express from 'express';
import { controllerHandler } from '../../middlewares';
import { getAllProducts } from './productsController';

const productsRouter = express.Router();

productsRouter.get('/', controllerHandler(getAllProducts, null));

export default productsRouter;
