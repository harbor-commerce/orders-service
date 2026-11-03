export const statuses = ['created', 'paid', 'payment_failed', 'shipped', 'cancelled']

export function canCancel(order) {
  return ['created', 'paid', 'payment_failed'].includes(order.status)
}

export const routes = {
  'GET /orders/statuses': () => statuses,
}
