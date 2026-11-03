import test from 'node:test'
import assert from 'node:assert/strict'
import { subscribe, eventsFor } from '../src/webhooks.js'

test('each subscriber gets the event', () => {
  subscribe('http://notifications-service:8000/events')
  assert.deepEqual(eventsFor({ id: 1, status: 'paid' })[0].body, { type: 'order.paid', id: 1 })
})
