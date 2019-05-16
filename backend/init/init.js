
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require(path.resolve('database','connection.js'));

module.exports = async (app)=>{
    app.use(cors());
	app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    await db._connect();
    require(path.resolve('routes','index.js'))(app)

}
