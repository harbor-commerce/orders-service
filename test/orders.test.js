import test from 'node:test'
import assert from 'node:assert/strict'
import { canCancel } from '../src/orders.js'

test('a shipped order cannot be cancelled', () => assert.equal(canCancel({ status: 'shipped' }), false))
