const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {

    const packageId = parseInt(req.params.id);
    //TODO redirect to 404 if packageId not found in database
    const data = require("../data/hpackages");
    const packageDetailsByLocationId = await data.gethpackageByLocationId(packageId);
    console.log(packageDetailsByLocationId);
    if (packageDetailsByLocationId === undefined || packageDetailsByLocationId.length == 0) {
        res.status(404).render("error_view/generic_error", {
            pageTitle: "Package Not Found",
            error_msg: "Location not found"
        });
    } else {
        res.status(200).render("package/listing", {
            pageTitle: "Package Listing",
            packages: packageDetailsByLocationId
        });
    }

});

module.exports = router;