import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

export default createMultiStyleConfigHelpers(
  tagAnatomy.keys
).defineMultiStyleConfig({
  baseStyle: {
    container: {
      width: 'max-content',
      backgroundColor: 'light.primary.200',
      _dark: {
        backgroundColor: 'dark.primary.900',
      },
    },
  },
})
