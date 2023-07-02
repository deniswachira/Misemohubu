const router = require('express').Router();
const Admin = require('../models/Admin');
// const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")


//GET all admins [done]
// router.get("/allAdmins", verifyToken, async (req, res) => {
//     try {
//         const admins = await Admin.find();
//         res.status(200).json(admins);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//GET USER [done]


// REGISTER ADMIN [done]
router.post('/register', async (req, res) => {
    try {
        const existingEmail = await Admin.findOne({ email: req.body.email });
        if (!existingEmail) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new Admin({ ...req.body, password: hash });

            await newUser.save();
            res.status(200).send("Admin has been created!");
        }
    } catch (err) {
        res.status(500).send("Server error");
    };
});

router.post('/login', async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email });
        if (!admin) {
            res.status(404).send("UserAdmin not found");
        } else {
            const isPasswordValid = await bcrypt.compare(req.body.password, admin.password);
            if (!isPasswordValid) {
                res.status(404).send("Invalid credentials");
            } else {
                const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
                const { password, ...others } = admin._doc;
                // 3 hours cookie
                const expiresInMs = 10800000;
                res
                    .cookie("access_token", token, {
                        maxAge: expiresInMs,
                        httpOnly: true
                    })
                    .status(200)
                    .json(others);
            }
        }
    } catch (err) {
        res.status(500).send("Server error");
    }
})

module.exports = router;


