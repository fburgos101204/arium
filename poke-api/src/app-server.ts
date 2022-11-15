import express from 'express';
import Router from './routes/general.routes'
import { connect } from 'mongoose';

class AppServer {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    public async start(): Promise<void> {
        await this.configDatabase();
    }

    private config(): void {
        this.app.use(express.json());
        Router.routes(this.app as any);
    }

    private async configDatabase(): Promise<void> {
        try {
            const DB_URI = 'mongodb://localhost:27017/develop';
            await connect(DB_URI).then(() => {
                console.log('Se ha conectado a la base de datos');
            }).catch((error) => {
                console.log(`Ha ocurrido un error conectandose a la bd: ${error}`);
            });

        } catch (error) {
            console.log(error);
        }
    }
}
export default new AppServer();
