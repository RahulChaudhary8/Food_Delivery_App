import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {

    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized Login Again" });
    }

    try {
       
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();

    } catch (error) {
        console.error("Auth Error:", error);
        return res.status(403).json({ success: false, message: "Invalid or expired token." });
    }
};

export default authMiddleware;
