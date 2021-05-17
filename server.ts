import app from './src/app';

const PORT = app.get('port');
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} ⚡`);
});
