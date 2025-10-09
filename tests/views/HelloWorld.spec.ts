import { render } from '@testing-library/vue'
import HelloWorld from '../../src/views/HelloWorld.vue'
import { describe, it, expect } from 'vitest'

describe('HelloWorld.vue', () => {
  it('renders the message passed as a prop', () => {
    const { getByText } = render(HelloWorld, { props: { msg: 'Hello Vitest' } })

    expect(getByText('Hello Vitest')).toBeTruthy()
  })
  it('renders different messages correctly', () => {
    const { getByText } = render(HelloWorld, { props: { msg: 'Test Message' } })
    expect(getByText('Test Message')).toBeTruthy()
  })
})
