// import the connection for reasons
const mongoose = require('./connection.js')
// import the model
const Place = require('../models/place.js')
// import the data
const placeData = require('./seedData.json')

Place.deleteMany({}).then(()=>{
	Place.insertMany(placeData).then((places) => {
		console.log(places)
		mongoose.connection.close()
	})
})







