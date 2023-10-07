// importa o express
import express from 'express'

import { resolve } from 'path'
import cors from 'cors'

// Importa as rotas
import routes from './routes'

import './database'

class App {
  constructor() {
    // Deixa o express disponível
    this.app = express()
    this.app.use(cors())

    this.middlewares()
    this.routes()
  }

  middlewares() {
    // Avisa que vamos usar o json em toda aplicação
    this.app.use(express.json())
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    )

    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    )
  }

  routes() {
    // Deixa as rotas disponíveis para toda aplicação
    this.app.use(routes)
  }
}
// exporta o a class App().app
export default new App().app
