import 'dotenv/config';  // ✅ Load environment variables first
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';  
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routers/adminRoute.js';  // ✅ Ensure file name consistency
import doctorRouter from './routers/doctorRoute.js';

// Connect to Database & Cloudinary
connectDB();
connectCloudinary();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/admin', adminRouter);  // localhost:4000/api/admin/add-doctor
app.use('/api/doctor', doctorRouter)

// Default Route
app.get('/', (req, res) => {
    res.send('🚀 API is Working Great!');
});

// Start Server
app.listen(port, () => console.log(`🚀 Server started on http://localhost:${port}`));
