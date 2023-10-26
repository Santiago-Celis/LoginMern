import Jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const requiredAuth = (req, res, next) => {
    const { token } = req.cookies;
    if(!token)
    return res.status(401).json({ mesage : "No token, Authorization denied"})

    Jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) res.status(403).json({ message : "Invalid Token"});

        req.user = user;
        next();
    })
}