//This file connects to the database
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loanRouter = require('./model/loanRoutes');
const morgan = require('morgan');

const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/loanTerminal',loanRouter);

//Connext to database
mongoose.connect(MONGO_DATA_BASE,
  //connection recipie
  {
    useNewUrlParser: true,
  }).then(con=>{
    console.log(con.connection);// log connection properties
    console.log(`The Database connection was successful with ${process.env.DATABASE}`);// log connection properties
  });

  app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
