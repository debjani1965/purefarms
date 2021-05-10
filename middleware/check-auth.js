const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1].trim();
        const authToken = jwt.verify(token, process.env.JWT_KEY);
        req.userId = {
            email: authToken.email,
            id: authToken.id
        }
        next();
    } catch(error) {
        res.status(401).json({message: 'Not authenticated'})
    }
     

}