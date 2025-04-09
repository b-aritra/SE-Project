import express from 'express';
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import {changeAvailability} from '../controllers/doctorController.js'

const adminRouter = express.Router();

// Admin Login
adminRouter.post('/login', loginAdmin);

adminRouter.post('/all-doctors', authAdmin, allDoctors);

adminRouter.post('/change-availability', authAdmin, changeAvailability);

adminRouter.get('/appointments', authAdmin, appointmentsAdmin)


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
