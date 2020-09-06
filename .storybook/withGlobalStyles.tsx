import { ThemeProvider } from 'styled-components'
import { StoryFn } from '@storybook/addons'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const withGlobalStyles = (storyFn: StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

export default withGlobalStyles
