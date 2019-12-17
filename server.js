//Install express server
const express = require('express');
const path = require('path');
const Cookies = require('js-cookie');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));
app.get('/clear-cookies', function(req,res) {
    
    Cookies.remove('c_user');
    Cookies.remove('fbsr_246222385503381');
    Cookies.remove('fbm_246222385503381');
    Cookies.remove('fr');
    res.redirect('/directseller/getsocial');
});

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
