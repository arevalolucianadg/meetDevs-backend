import app from './src/app';
import connectDB from './src/config/db';

// DB connection
connectDB();

const PORT = app.get('port');
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} ⚡`);
});
