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
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <link rel="stylesheet" href="${STATIC_PATH}/css/styles.css">
        <link rel="icon" href="${STATIC_PATH}/img/favicon.ico" type="image/x-icon">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
    );
};

export default renderApp;