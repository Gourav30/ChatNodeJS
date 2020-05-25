const response = require('../library/responseLib')

let errorhandler = (err, req, res, next) => {
    console.log("Application error handler called");
    console.log(err);

let apiResponse = response.generate(true, "Some Error occured at Global Level", 500, null)
    res.send(apiResponse)
}

let notFoundHandler = (req, res, next) => {
    console.log("Global error handler not found the route called");
    let apiResponse = response.generate(true, "Route Not Found in Application Routes", 404, null)
    res.status(404).send(apiResponse)

}

module.exports = {
    globalErrorhandler: errorhandler,
    globalNotFoundHandler: notFoundHandler
}