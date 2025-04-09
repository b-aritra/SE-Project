import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Ensure environment variables are loaded

// User authentication middleware
const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // ✅ Check if Authorization header exists and follows "Bearer <token>"
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Please Login Again.' });
        }

        // ✅ Extract the token from "Bearer <token>"
        const token = authHeader.split(" ")[1];

        // ✅ Ensure JWT_SECRET exists
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is missing in environment variables.");
            return res.status(500).json({ success: false, message: "Server Configuration Error" });
        }

        // ✅ Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded Token:", decodedToken);
        console.log("Admin Email from env:", process.env.ADMIN_EMAIL);

        // ✅ Check if the email in the token matches the admin email
        if (decodedToken.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: 'Access Denied. Not an Admin.' });
        }

        req.body.userId = token_decode.id
        

        next(); // ✅ Allow the request to continue

    } catch (error) {
        console.error("Auth Middleware Error:", error);

        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Invalid or Expired Token. Please Login Again.' });
        }

        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export default authUser;
