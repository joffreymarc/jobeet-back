var _ = require('lodash')
var jwt = require('jsonwebtoken');

module.exports = {
    verifyJWTToken: verifyJWTToken,
    createJWToken : createJWToken
}

function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err || !decodedToken)
                return reject(err)
            resolve(decodedToken)
        })
    })
}

function createJWToken(details) {
    if (typeof details !== 'object')
        details = {}
    if (!details.maxAge)
        details.maxAge = "1d"
    let token = jwt.sign({
        data: details
    }, process.env.JWT_SECRET, {
        expiresIn: details.maxAge,
        algorithm: 'HS256'
    })
    return token;
}