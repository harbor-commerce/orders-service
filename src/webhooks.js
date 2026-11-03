const subscribers = new Set()

export function subscribe(url) {
  subscribers.add(url)
}

export function eventsFor(order) {
  return [...subscribers].map((url) => ({ url, body: { type: 'order.' + order.status, id: order.id } }))
}
