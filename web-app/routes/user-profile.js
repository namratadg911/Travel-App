const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {


    res.status(200).render("user/profile", {
        pageTitle: "User Profile",
    });

});


module.exports = router;