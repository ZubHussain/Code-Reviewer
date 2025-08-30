import express from 'express';
import aiRoutes from './src/routes/ai.route.js'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

app.use('/ai', aiRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');  
});
