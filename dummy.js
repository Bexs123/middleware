const router = require("express").Router();
const { setRequestDateTime, logRequestDateTime, handleError } = require("./middleware");

router.use(setRequestDateTime);
router.use(logRequestDateTime);

router.get("/", (req, res) => {
    res.status(200).json({msg: "Dummy route worked"});
});

router.get("/error", (req, res, next) => {
    try {
	throw new Error("Something went wrong");
    } catch (error) {
	next(error);
    }
});

router.use(handleError);

/*
 * setRequestDateTime -> next is logRequestDateTime
 * logRequestDateTime -> next is either get / or get /error
 * get / -> no next is called
 * get /error -> next, if needed is errorHandler
 * errorHandler -> no next is called
*/

module.exports = router;