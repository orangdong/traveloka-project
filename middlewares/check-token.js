const checkJSON = (str) => {
    try {
        JSON.parse(str)
    } catch (e) {
        return false
    }
    return true
}

const checkToken = (req, res, next) => {
    if(!req.headers['x-goog-api-client']){
        const token = req.headers['x-apigateway-api-userinfo']

        if(!token) {
            return res.status(401).json({
                status: 'error',
                message: 'Unauthorized, No token provided'
            });
        }

        const decoded = Buffer.from(token, 'base64').toString('ascii')

        if(!checkJSON(decoded)) {
            return res.status(401).json({
                status: 'error',
                message: 'invalid JSON format'
            });
        }

        const user = JSON.parse(decoded)
        req.user = user
    }
    
    next()
}

export default checkToken