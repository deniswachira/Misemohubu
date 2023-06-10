const router = require('express').Router();
const { random, addProverb, searchByKeyword } = require('../controllers/proverbController');


//GET Random proverb [done]
router.get("/random", random);

//Upload Proverb [done]
router.post("/addProverb", addProverb);

//Search Proverb [done]
router.get("/search", searchByKeyword);



module.exports = router;