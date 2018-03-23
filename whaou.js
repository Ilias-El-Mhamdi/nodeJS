var http = require('http'); //instanciation d’un objet HTTP `a partir du module ’http’.
http.createServer(function (req, res) { //appel `a la m´ethode de cr´eation d’un serveur.
    res.writeHead(200, {'Content-Type' : 'text/plain'}); //manipulation de l’objet ’res’
//(r´eponse http) pour ajouter un champ dans son ent^ete
    res.end('Hello World\n'); //´ecriture du coprs de la r´eponse
}).listen(1337, '127.0.0.1'); //lancement du serveur en pr´ecisant le port d’´ecoute
console.log('Server running at http://127.0.0.1:1337/');