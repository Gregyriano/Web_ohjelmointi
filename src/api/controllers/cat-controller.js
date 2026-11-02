import {findCatById, addCat, listAllCats, removeCat, modifyCat} from '../models/cat-model.js';

const getAllCats = (req, res) => {
    res.json(listAllCats());
};

const getCatById = (req, res) => {
  const id = Number(req.params.id);
  console.log(id);

  const cat = findCatById(id);
  if (!cat){
    return res.status(404).json({message: 'Kissa ei löytynyt'});
  }
  res.json(cat)
};

const postCat = (req, res) => {
  console.log('request',req.body );
  const id = addCat(req.body);
  res.sendStatus(201).json({cat_id: id});
};

const deleteCat = (req, res) => {
  const result =removeCat(Number (req.params.id));
  if (result){
    res.json({message: 'Kissa poistettu'});
  } else {
    res.status(404).json({error: 404, message: 'Not found.'})
  }
};

const putCat = (req, res) => {
  // in real life, all input data (req.body) should be validated before using it)
  const result = modifyCat(Number (req.params.id), req.body);
  if (result){
    res.json({message: 'Cat updated'});
  } else {
    res.status(404).json({error: 404, message: 'Not found.'})
  }
};


export {getAllCats, getCatById, postCat, deleteCat, putCat};

