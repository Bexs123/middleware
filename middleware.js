const setRequestDateTime = (req, res, next) => {
    req.logMessage = `${req.path}: ${new Date()}`;
    next();
}

const logRequestDateTime = (req, res, next) => {
    console.log(req.logMessage);
    next();
}

const handleError = (err, req, res, next) => {
    const msg = "The code was willing. It considered your request, but the chips were weak.";
    res.status(500).json({msg});
}

const handleIndexError = (err, req, res, next) => {
    const msg = "You tried, the connection tried, but the server failed";
    res.status(500).json({msg});
};

module.exports = {
    setRequestDateTime,
    logRequestDateTime,
    handleError,
    handleIndexError
};