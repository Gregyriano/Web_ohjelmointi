import express from 'express';
import {getAllCats} from "./api/controllers/cat-controller.js";
import router from "./api/index.js";
const hostname = '127.0.0.1';
const app = express();
const port = 3000;





app.get('/kissa', (req, res) => {
  res.send('Welcome to my REST API eshkere!');
});



/*app.get('/api/v1/cats', (req, res) => {
  const cats = [
    {
      cat_id: 1,name: 'Misu',
      birthdate : '20.07.2023',
      weight: 3.5,
      owner : 'John Doe',
      image : 'https://images.pexels.com/photos/29020872/pexels-photo-29020872.jpeg' }
  ]
  res.json(cats);
});
 */



// GET http://localhost:3000/api/resource/99
// property name (id) is set in the route definition
/*app.get('/api/v1/cats/:id', (req, res) => {
  console.log(req)
  console.log('path variables', req.params);
  if (req.params.id === '99') {
    const myData = {
      title: 'This is a specific item, id: ' + req.params.id,
      description: 'Just some dummy data here',
    };
    res.json(myData);
  } else {
    res.sendStatus(404);
  }
});         */

// GET http://localhost:3000/api/resource?id=99&name=foo

app.use('/api/v1', router);



//чисто по названию картинки
//app.use(express.static('public'));
//наеб сайта, чтобы в строке надо было написать слеш имагес
app.use('/images', express.static('public'))

app.use(express.json());


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});






