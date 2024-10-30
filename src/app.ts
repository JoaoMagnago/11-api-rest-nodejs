import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// Exemplo de hook global (interceptador para todas as requisições)
// app.addHook('preHandler', async (request, reply) => {
//   console.log(`[${request.method}] ${request.url}`)
// })

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
