/*
Importer les composants server
*/
  // Class
  require('dotenv').config();
  const express = require('express');
  const ejs = require('ejs');
  const path = require('path');

  // Modules server
  const frontRoutes = require('./routes/front.routes');
  const apiRoutes = require('./routes/api.routes');
//

/*
Configuration du server
*/
  // Définir les variables server
  const server = express();
  const port = process.env.PORT;

  // Définition du dossier static du client
  server.set( 'views', __dirname + '/www' );
  server.use( express.static(path.join(__dirname, 'www' )) );

  // Configuration du moteur de rendu
  server.set( 'view engine', 'ejs' );

  // Utilisation des routeurs
  server.use( '/api', apiRoutes );
  server.use( '/', require('./routes/front.routes') );
//

/*
Lancer le server
*/
  server.listen( port, () => console.log(`Server is launched on poort ${port}`) )
//