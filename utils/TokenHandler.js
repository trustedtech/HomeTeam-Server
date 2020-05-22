const jwt = require('jsonwebtoken');

const TokenHandler = (configs) => (req, res, next) => {
    if (configs.whitelist.includes(req.url)) {
        next();
    } else {
        const {token} = req.cookies;
        if (!token) return res.sendStatus(401);
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) return res.sendStatus(403);
            req.user = data;
        })
        next();
    }
}

module.exports = TokenHandler;