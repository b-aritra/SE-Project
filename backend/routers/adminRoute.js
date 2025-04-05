import express from 'express';
import { addDoctor, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

// Admin Login
adminRouter.post('/login', loginAdmin);

// Add Doctor (Auth -> Then Upload Image)
adminRouter.post('/add-doctor', authAdmin, (req, res, next) => {
    upload.single('image')(req, res, function (err) {
        if (err) {
            return res.status(400).json({ success: false, message: err.message });
        }
        next();
    });
}, addDoctor);

export default adminRouter;
