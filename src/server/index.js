import express from 'express';
import { Server } from 'http';
import { STATIC_PATH, isProd, WEB_PORT } from '../shared/config';
import routing from './routing';
const app = express();
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));
routing(app);
const http = Server(app);
const PORT = process.env.PORT || WEB_PORT;
http.listen(PORT, () => {
  // eslint-disable-next-line no-console
    console.log(`Server running on port ${PORT} ${isProd ? '(production)' :
    '(development).\nKeep "npm run dev:wds" running in an other terminal'}.`);
});
