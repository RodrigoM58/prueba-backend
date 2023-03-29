import MongoConn from '../../lib/mongodb'
import http from 'http'
import express from 'express'
import config from 'config'
import logger from '../../lib/logger'
import ProductController from '../controllers/product.controller';

export default class Server {
    private port: number
    private httpServer: http.Server 
    private mongodb: MongoConn
    public app: express.Application
    private static _instance: Server
    private productCtr = new ProductController

    constructor(){
        this.port =config.get ('api.port')
        this.app = express()
        this.httpServer = new http.Server(this.app)
        this.mongodb = MongoConn.instance
    }

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    async start(){
        try{
           await this.httpServer.listen(this.port)
            logger.info(`listen on port ${this.port}`)
            this.productCtr.populateProducts()
        }catch(err){
          logger.error(`Error ${err}`)
        }
    }
}



