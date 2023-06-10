const Proverb = require('../models/proverbModel');

const random = async (req, res) => {
    try {
        const proverbs = await Proverb.aggregate([{ $sample: { size: 10 } }]);
        res.status(200).json(proverbs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve a random proverb' });
    }
};

const addProverb = async (req, res) => {
    try {
        const proverb = await Proverb.create(req.body);
        res.status(201).json(proverb);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add a new proverb' });
    }
};


const searchByKeyword = async (req, res) => {
    const query = req.query.keyword;
    try {
        const proverbs = await Proverb.find({
            Swahili: { $regex: query, $options: "i" }
        }).limit(40);
        res.status(200).json(proverbs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve proverbs' });
    }
}

module.exports = { random, addProverb, searchByKeyword };