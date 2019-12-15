const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).render("booking/checkout", {
        pageTitle: "Checkout"
    });

});
router.post("/", async (req, res) => {

    const user_id = req.session.username;
    const bookingDetails = {
        package_id: req.body.package_id,
        package_name: req.body.package_name,
        package_image: req.body.package_image,
        package_description: req.body.package_description,
        num_of_people: req.body.num_of_people,
        date_of_trip: req.body.date_of_trip,
        total_price: req.body.total_price,
        user_id: user_id,
        status: "pending",
        currency: "USD"
    }
    console.log(bookingDetails);
    const bookingData = require("../data/booking");
    try {
        let bookingId = await bookingData.createBooking(bookingDetails);
        bookingDetails.booking_id = bookingId;
        res.status(200).render("booking/checkout", {
            pageTitle: "Checkout",
            bookingDetails: bookingDetails,
        });
    } catch (e) {
        const errorObj = {
            message: "Failed to make a booking. Somthing went wrong!!",
        }
        res.status(500).render("error_view/generic_error", {
            pageTitle: "Checkout",
            error: errorObj
        });
    }

});

module.exports = router;