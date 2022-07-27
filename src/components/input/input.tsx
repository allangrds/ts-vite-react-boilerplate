import * as React from 'react'
import {
  Input as BaseInput,
  InputGroup,
  InputLeftElement,
  useStyleConfig,
} from '@chakra-ui/react'

export type InputProps = {
  icon?: JSX.Element
  placeholder: string
}

export const Input = ({ icon, placeholder }: InputProps) => {
  const styles = useStyleConfig('Input')

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        top="15%"
        left={2}
        data-testid="input-icon"
      >
        {icon}
      </InputLeftElement>
      <BaseInput
        sx={styles}
        paddingLeft={icon ? 12 : 4}
        placeholder={placeholder}
      />
    </InputGroup>
  )
}
