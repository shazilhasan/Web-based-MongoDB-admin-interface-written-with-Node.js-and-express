const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
global.url = 'mongodb://technologics-server:hd4a9UriDrebEAnhxNvWpLdDnUpiSFaiCXTJ4R6wXF54cHkIiCGbvsXZK666gHrsoBa3Tqrwjs3QACDbICwNHA==@technologics-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@technologics-server@'; 
// Connecting to the database
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
