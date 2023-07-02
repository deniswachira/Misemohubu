const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const proverbsRoute = require('./routes/proverbRoute');
const cookieParser = require('cookie-parser');
const adminRoute = require('./routes/admin');

//middlewares
app.use(cookieParser())
app.use(express.json());
dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("connected to mongodb"))
    .catch((err) => console.log(err));

app.get('/', (req, res) =>
    res.send("Welcome to MisemoHubu API")
);
app.use("/v1/proverbs", proverbsRoute);
app.use("/v1/admin", adminRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port 5000');
});