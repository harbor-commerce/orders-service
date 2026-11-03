export const statuses = ['created', 'paid', 'shipped', 'cancelled']

export function canCancel(order) {
  return order.status === 'created' || order.status === 'paid'
}

export const routes = {
  'GET /orders/statuses': () => statuses,
}
