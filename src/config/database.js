module.exports = {
	dialect: 'postgres',
	port: 5435,
	host: 'localhost',
	username:'postgres',
	password: 'docker',
	database: 'gobarber',
		define: {
			timestamps: true, 
			underscored: true,
			underscoredAll: true,
	},
};