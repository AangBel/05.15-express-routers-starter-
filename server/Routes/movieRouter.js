let express = require('express');

let router = express.Router();
//invoked = ()
let movieList = [];

router.get('/', (req, res) => {
res.send(movieList);
});
//the / is something about how it was moved and 
//its within its own file so you dont need 
//to give it a route/path/url
router.post('/', (req, res) => {
movieList.push(req.body);
res.sendStatus(200);
});


module.exports = router;
