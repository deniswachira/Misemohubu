const router = require('express').Router();

const { random, addProverb } = require('../controllers/proverbController');
//GET Random proverb [done]
router.get("/random", random);

//Upload Proverb [done]
router.post("/addProverb", addProverb);



module.exports = router;