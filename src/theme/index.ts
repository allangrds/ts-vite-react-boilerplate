import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { components } from './components'

const theme = extendTheme({
  colors,
  components,

  styles: {
    global: {},
  },
})

export { theme }
