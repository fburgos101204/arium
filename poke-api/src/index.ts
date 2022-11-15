import AppServer from './app-server';

const PORT = 3000;

AppServer.app.listen(PORT, () => {
    console.log(`express listening on port: ${PORT}`);
});
AppServer.start();
