// #region ENVIRONMENT VARIABLES
const dotenv = require('dotenv');
const port = process.env.PORT || 8000;
const MongoDBPath = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/buffer-overflow';
// #endregion ENVIRONMENT VARIABLES



// #region SERVER
const express = require('express');
dotenv.config();
const app = express();

// Start express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// #endregion SERVER



// #region MIDDLEWARE
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');
const secret = process.argv[2];
const oneHour = 1000 * 60 * 60;
const saltRounds = 10;

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: `${secret}`,
        cookie: { httpOnly: true, maxAge: oneHour },
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: MongoDBPath })
    })
)
// #endregion MIDDLEWARE