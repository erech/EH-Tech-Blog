
//declare constants
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helper.js');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
const store = new SequelizeStore({ db: sequelize });

//register hbs.engine with express app
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sesh = {
  secret: 'bigbluedog',
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sesh));
app.use(routes);

async function startServer() {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  }
  
  startServer();