const router = require('express').Router();
const { random, addProverb, searchByKeyword } = require('../controllers/proverbController');
const { verifyToken } = require('./verifyToken');


//GET Random proverb [done]
router.get("/random", random);

//Upload Proverb [done]
router.post("/addProverb", verifyToken, addProverb);

//Search Proverb [done]
router.get("/search", searchByKeyword);



module.exports = router;