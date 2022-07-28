import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Input: ComponentSingleStyleConfig = {
  baseStyle: {
    '::placeholder': {
      color: 'gray.600',
    },

    backgroundColor: 'gray.500',
    borderRadius: 24,
    paddingRight: 4,
    paddingY: 7,
  },
}
