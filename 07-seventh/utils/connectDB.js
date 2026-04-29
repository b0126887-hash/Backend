
import mongoose from 'mongoose';

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('🌍MongoDB connected successfully');
        })
        .catch((err) => {
            console.error('💀Error connecting to MongoDB:', err);
        });
}

export default connectDB;
