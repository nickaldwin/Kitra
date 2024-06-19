const express = require('express');
const sequelize = require('./config/database')
const treasureRoutes = require('./routes/treasureRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.json());
app.use('/api', treasureRoutes);
app.use('/api', userRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});