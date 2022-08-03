const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const path = require('path');
const cors = require('cors');

const SERVER_PORT = process.env.PORT || 8082;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:' + SERVER_PORT;

const init = () => {
  const parseServerAPI = new ParseServer({
    databaseURI: 'mongodb+srv://atlas-test:IBlgg9nXobFvtmTU@fabcluster0.ea05ckp.mongodb.net/?retryWrites=true&w=majority',
    cloud: path.resolve(__dirname, './cloud/main.js'),
    appId: 'atlas-test',
    masterKey: 'master-key-atlas-test',
    serverURL: SERVER_URL + '/parse',
    publicServerURL: SERVER_URL + '/parse',
    appName: 'atlas-test',
  });

  const app = express();

  app.use(cors());

  app.use('/parse', parseServerAPI);

  app.get('/', (req, res) => {
    return res.send('hello from ' + SERVER_URL);
  });

  app.listen(SERVER_PORT, (err) => {
    if (err) throw err;
    console.log(
      ` 
      =====================================
               App running on ${SERVER_URL}
      =====================================
      `
    );
  });
};


init();
