// Variaveis de Ambiente
require("dotenv").config();

import express from "express"
import config from "config"


const app = express()

//JSON middleware
app.use(express.json())

//DB
import db from "../config/db"



//Logger
import Logger from "../config/logger";


// Middewares
import morganMiddeware from "./middeware/morganMiddeware";

//Routes 
import router from "./router"
app.use(morganMiddeware);
app.use("/api/",router);


//app port
const port = config.get<number>("port")

app.listen(3000, async() => {

     await db();

    Logger.info(`Aplicação funcionando na porta: ${port}`)

})