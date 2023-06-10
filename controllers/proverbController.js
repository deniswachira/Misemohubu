const Proverb = require('../models/proverbModel');

const random = async (req, res) => {
    try {
        const proverbs = await Proverb.aggregate([{ $sample: { size: 1 } }]);
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

module.exports = {
    random,
    addProverb
};