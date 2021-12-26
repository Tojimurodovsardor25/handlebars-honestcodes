const { Router } = require("express");
const Admin = require("../models/Admin");
const router = Router();

// const fileUpload = require("../middleware/fileUpload.js");
const bcrypt = require("bcryptjs");

router.get("/signin", (req, res, next) => {
    res.render("auth/signin", {
        title: "SignIn",
    });
});

router.get("/logout", (req, res, next) => {
    // req.session.isAuth = false
    req.session.destroy(() => {
        // tozalavorish
        res.redirect("/auth/signin");
    });
});

router.post("/signin", async (req, res) => {
    try {
        const { nickname, password } = req.body;
        console.log(req.body, 'sign in ma`lumotlari');

        const candidate = await Admin.findOne({ nickname });
        console.log(candidate, 'cadidate ma`lumotlari');

        if (candidate) {
            const areSame = await bcrypt.compare(password, candidate.password); // true yoki false
            if (areSame) {
                req.session.isAuth = true;
                req.session.admin = candidate;
                res.redirect("/admin");
            } else {
                res.redirect("/auth/signin");
            }
        } else {
            // login xato
            res.redirect("/auth/signin");
        }
    } catch (error) {
        console.log(error, 'xato');
    }
});


router.get("/signup", (req, res, next) => {
    res.render("auth/signup", {
        title: "SignUp",
    });
});



router.post("/signup", /* fileUpload.single("avatar"), */ async (req, res) => {
    const { nickname, name, password } = req.body;
    console.log(req.body, 'Ma`lumotlar shu yerda ');
    // req.file ? (avatar = req.file.filename) : (avatar = "");

    const hasPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
        nickname,
        name,
        password: hasPassword,
    });

    await admin.save();
    res.redirect("/auth/signin");
});

module.exports = router;