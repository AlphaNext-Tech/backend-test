const express = require('express');
const bodyParser = require('body-parser');
const competitorRoutes = require('./routes/competitorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/competitors', competitorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
