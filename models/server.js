import express from "express";  
import 'dotenv/config';
import cors from "cors"; 
import ruta from "../routes/users.js";

 export class Server {  
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.usuariosPath = '/api/users';
    }
    //Segundo Metodo de mi Clase Server 
    routes() {
        this.app.use('/api/users', ruta);
    }
    //Metodo 3 de mi Clase Server
    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    //Primer Metodo de mi Clase Server
    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto: ${this.port}`);
        });
    }

}

export default Server;