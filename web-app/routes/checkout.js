const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("booking/checkout", {
        pageTitle: "Checkout"
    });

});
router.post("/", async (req, res) => {

    res.status(200).render("booking/checkout", {
        pageTitle: "Checkout"
    });
});

module.exports = router;