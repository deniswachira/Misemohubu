const router = require('express').Router();

const { random, addProverb } = require('../controllers/proverb');
//GET Random proverb [done]
router.get("/random", random);

//Upload Proverb [done]
router.post("/addProverb", addProverb);

//Update video details [done]
// router.put("/:id",verifyToken, updateVideo);

//Delete video [done]
// router.delete("/:id",verifyToken, deleteVideo);

//Get  video by id [done]
// router.get("/find/:id", getVideo);


//Add  video view [done]
// router.put("/view/:id", addView);


//Get  video by tags [done]
// router.get("/tags", getByTag);

//Get  video by query [done]
// router.get("/search",search);

module.exports = router;