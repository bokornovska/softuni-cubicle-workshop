const express = require('express');

const routes = require('./routes');
const app = express();
const config = require('./config');

const setupViewEngine = require('./config/viewEngine');

const initDB = require('./config/databaseInit');

setupViewEngine(app);


// require('./config/viewEngine')(app);

app.use(express.static('src/public'));

app.use(express.urlencoded({ extended: false })); //middleware

app.use(routes);

initDB()
.then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
.catch((err) => console.error(err))

