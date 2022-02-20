import express from 'express';
import http from 'http';

import homeRouter from './routers/homeRouter';
import roomRouter from './routers/roomRouter';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/dist', express.static('dist'));
app.use('/', homeRouter);
app.use('/room', roomRouter);
app.get('/404', (_, res) => res.render('NotFound'));
app.get('/*', (_, res) => res.redirect('/404'));

const server = http.createServer(app);

export default server;
