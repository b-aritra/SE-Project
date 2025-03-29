import express from 'express';
import cors from 'cors';
import 'dotenv/config';  // ✅ No need to call dotenv.config() again
import connectDB from './config/mongodb.js';  // ✅ Fixed function nnpm ame
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routers/adminRoute.js';

connectDB();

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary()

// Middlewares
app.use(express.json());
app.use(cors()); 

// API endpoint
app.use('/api/admin', adminRouter)

//localhost:4000/api/admin/add-doctor

app.get('/', (req, res) => {
    res.send('API WORKING great');
});

// Start server
app.listen(port, () => console.log(`🚀 Server started on http://localhost:${port}`));
