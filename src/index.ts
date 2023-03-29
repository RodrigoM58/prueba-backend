import express from 'express'
import cors from 'cors'
import Server from './class/server.class'
import productRoutes from './routes'

const server = Server.instance

server.app.enabled('trust proxy')

server.app.use(express.urlencoded({ extended: true, limit: '50mb'}))
server.app.use(express.json( { limit: '50mb' } ))

server.app.use(cors({ origin: true, credentials: true }))

server.app.use("/api/product", productRoutes)

server.start()
