const mongoose = require('mongoose');
class Database {
	async _connect() {
		return await mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`,{ useNewUrlParser: true })
			.then((conn) => {
				console.info('Database connected successfully')
				return conn
			})
			.catch(err => {
				console.log('Err: ', err);
				console.error('Database connection error')
			})
	}
	_disconnect() {
		mongoose.connection.close()
		.then(() => {
			console.info('Database disconnected successfully')
		})
		.catch(err => {
			console.error('Database connection error')
		})
	}
}
module.exports = new Database()
