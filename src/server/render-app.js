import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../shared/containers/App';
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT, isProd } from '../shared/config';

const renderApp = (location) => {
    const appHtml = ReactDOMServer.renderToString(<App />)
    return (
    `<!doctype html>
    <html>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      </head>
      <body>
        <div id="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
    );
};

export default renderApp;