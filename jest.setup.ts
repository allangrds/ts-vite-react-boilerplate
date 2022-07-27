import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import './src/tests/i18n'

beforeAll(() => {
  userEvent.setup()
})
