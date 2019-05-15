
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require(path.resolve('database','connection.js'));
const slackService = require(path.resolve('services','slack.js'));
module.exports = async (app)=>{
    app.use(cors());
	app.use(logger('dev'));
    app.use(bodyParser.json());
    await db._connect()
    const slack = new slackService()
    slack.connectToSlack()
    require(path.resolve('routes','index.js'))(app)

}
