import * as domain from './orders.js'

export const routes = {
  'GET /health': () => ({ ok: true, service: 'orders-service' }),
  ...domain.routes,
}
