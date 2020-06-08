const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const request = require("request")
const auth = mongoose.model('auth')
const logger = require('./../library/logLib')
const responseLib = require('../library/responseLib')
const token = require('../library/tokenLib')
const check = require('../library/checkLib')

let isAuthorized = (req, res, next) => {

  if (req.params.authToken || req.query.authToken || req.body.authToken || req.header('authToken')) {
    auth.findOne({ authToken: req.header('authToken') || req.params.authToken || req.body.authToken || req.query.authToken }, (err, authDetails) => {
      if (err) {
        console.log(err)
        logger.error(err.message, 'Authorization Middleware', 10)
        let apiResponse = responseLib.generate(true, 'Failed To Find Authorization Key', 500, null)
        res.send(apiResponse)
      } else if (check.isEmpty(authDetails)) {
        logger.error('No AuthorizationKey Is Present', 'Authorization Middleware', 10)
        let apiResponse = responseLib.generate(true, 'Invalid Or Expired Authorization Key', 404, null)
        res.send(apiResponse)
      } else {
        token.verifyToken(authDetails.authToken, authDetails.tokenSecret, (err, decoded) => {

          if (err) {

          console.log(authDetails.authToken)
          console.log(authDetails.tokenSecret)

            logger.error(err.message, 'Authorization Middleware', 10)
            let apiResponse = responseLib.generate(true, 'Failed To Authorized', 500, null)
            res.send(apiResponse)
          }
          else {

            req.user = { userId: decoded.data.userId }
            next()
          }

        });// end of verifying token

      }
    })
  } else {
    logger.error('AuthorizationToken Missing', 'AuthorizationMiddleware', 5)
    let apiResponse = responseLib.generate(true, 'AuthorizationToken Is Missing In Request', 400, null)
    res.send(apiResponse)
  }
}

module.exports = {
  isAuthorized: isAuthorized
}
