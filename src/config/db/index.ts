// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || '';


const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('DB successfully connected!');

  } catch (error) {
    console.log('DB connection error', error);
    process.exit(1);
  }
};

export default connectDB;
