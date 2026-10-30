import Server from"./models/server.js";


const servidor = new Server();
servidor.routes();
servidor.listen();