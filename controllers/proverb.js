const Proverb = require('../models/Proverb');

const random = async (req, res,) => {
    try {
        const proverbs = await Proverb.aggregate([{ $sample: { size: 38 } }]);
        res.status(200).json(proverbs);
    } catch (err) {
        res.send(err);
    }
}

const addProverb = async (req, res,) => {
    try {
        const proverb = await Proverb.create(req.body);
        res.json(proverb);
    } catch (err) {
        res.send(err);
    }
}


module.exports = {
    random, addProverb
}