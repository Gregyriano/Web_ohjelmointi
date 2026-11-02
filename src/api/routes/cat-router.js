import express from 'express';
import {getAllCats, getCatById, postCat,deleteCat, putCat} from "../controllers/cat-controller.js";

const catRouter = express.Router();

//kaikki api/v1/cats reitit menee tänne
catRouter.route('/').get(getAllCats).post(postCat);
// id reitit menevät tänne
catRouter.route('/:id').get(getCatById).delete(deleteCat).put(putCat);

export default catRouter;
