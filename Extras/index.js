//index.js


var restify = require('restify');

const https = require('https');


const server = restify.createServer({
  name: 'nhash_ws',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/api/stats-provider-workers/:addr', function (req, res, next) {
    const request = https.request({
        host: 'api.nicehash.com',
        path: `/api?method=stats.provider.workers&addr=${req.params.addr}`,
        method: 'GET'
    }, (resp) => {
        resp.setEncoding('utf-8');
 
        let responseString = '';
        resp.on('data', function (data) {
            responseString += data;
        });
        resp.on('end', () => {
            res.send(JSON.parse(responseString))
        });
    request.on('error', (error)=>{console.log(error)});
    request.end();  
    return next();
});

server.get('/v1/bpi/current-price.json', function (req, res, next) {
    const request = https.request({
        host: 'api.coindesk.com',
        path: `/v1/bpi/currentprice.json`,
        method: 'GET'
    }, (resp) => {
        resp.setEncoding('utf-8');
 
        let responseString = '';
        resp.on('data', function (data) {
            responseString += data;
        });
        resp.on('end', () => {
            res.send(JSON.parse(responseString))
        });
    });
    request.on('error', (error)=>{console.log(error)});
    request.end();  
    return next();
});

server.get('/api/stats-provider-ex/:addr', function (req, res, next) {
    const request = https.request({
        host: 'api.nicehash.com',
        path: `/api?method=stats.provider.ex&addr=${req.params.addr}`,
        method: 'GET'
    }, (resp) => {
        resp.setEncoding('utf-8');
 
        let responseString = '';
        resp.on('data', function (data) {
            responseString += data;
        });
        resp.on('end', () => {
            res.send(JSON.parse(responseString))
        });
    });
    request.on('error', (error)=>{console.log(error)});
    request.end();  
    return next();
});

server.get('/ticker', function (req, res, next) {
    const request = https.request({
        host: 'blockchain.info',
        path: '/ticker',
        method: 'GET'
    }, (resp) => {
        resp.setEncoding('utf-8');
 
        let responseString = '';
        resp.on('data', function (data) {
            responseString += data;
        });
        resp.on('end', () => {
            res.send(JSON.parse(responseString))
        });
    });
    request.on('error', (error)=>{console.log(error)});
    request.end();  
    return next();
});



server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
    });
});
