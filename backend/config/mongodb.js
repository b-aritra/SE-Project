import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database Connected Successfully");

        mongoose.connection.on('error', (err) => {
            console.error("Database Connection Error:", err);
        });

    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;
