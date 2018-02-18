import renderApp from './render-app';
const homePage = () => null;

export default (app) => {
    app.get('/', (req, res) => {
        res.send(renderApp(req.url, homePage()));
    });

    app.get('/500', () => {
        throw Error('Fake Internal Server Error');
    });

    app.get('*', (req, res) => {
        res.status(404).send(renderApp(req.url));
    });

  // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    });
};