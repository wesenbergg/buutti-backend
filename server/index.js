const express = require('express');
const pingRouter = require('./routes/pingRoutes');
const bookRouter = require('./routes/bookRoutes');

require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || '-1';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/ping', pingRouter); // Test routes
app.use('/api/books', bookRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});