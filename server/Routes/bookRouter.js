let express = require(`express`)
let router = express.Router();
let bookList = []

// router.get('/', (req. res) => {
//     res.send(bookList)
// })

router.get('/', (req, res) => {
res.send(bookList);
});



module.exports = router; 