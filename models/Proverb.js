const mongoose = require("mongoose");
const ProverbSchema = new mongoose.Schema({
    Swahili: {
        type: String,
        required: true,
    },
    English: {
        type: String,
    },
    Maana: {
        type: String,
        required: true,
    },
    Matumizi: {
        type: String,
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Proverb", ProverbSchema);