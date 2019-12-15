const express = require("express");
const router = express.Router();

function validateSignup(signupDetails) {
    return;
}
router.post("/", async (req, res) => {

    //get user id from the session
    console.log(req.params);
    const signup = {}
    signup.email = req.body.email;
    signup.name = req.body.name;
    signup.password = req.body.inputPassword;
    signup.phonenumber = req.body.phonenumber;
    console.log(signup);
    try {
        //validateSignup(singup);
        const userData = require("../data/users");
        const createdUser = await userData.create(signup.name, signup.email, signup.password, signup.phonenumber);
        //on successful
        if (createdUser !== undefined) {
            res.redirect("/");
        } else {
            //throw "Unable to Sign Up at this time."
            throw "failed to create";
        }

    } catch (e) {
        const response = {
            isError: true,
            message: e
        };

        res.json(response);
    }


});


module.exports = router;