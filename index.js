const express = require("express");
const dummy = require("./dummy");
const { handleIndexError } = require("./middleware");

const app = express();

app.use("/dummy", dummy);

app.get("/", (req, res) => {
    res.status(200).json({msg: "worked"});
});

app.get("/error", (req, res, next) => {
    try {
	throw new Error("Something went wrong in index");
    } catch (error) {
	next(error);
    }
});

app.use(handleIndexError);

app.listen(80, () => {
    console.log("App online");
});