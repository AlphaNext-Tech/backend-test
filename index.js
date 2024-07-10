const express = require('express');
const bodyParser = require('body-parser');
const competitorRoutes = require('./routes/competitors');

const app = express();
app.use(bodyParser.json());
app.use('/api/v1/competitors', competitorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
