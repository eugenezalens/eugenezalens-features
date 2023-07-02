import { FC } from 'react'

import Styled from './App.styles'
import { AppRouter } from './router'

const App: FC = () => {
  return (
    <Styled.Wrapper>
      <AppRouter />
    </Styled.Wrapper>
  )
}

App.displayName = 'App'

export default App
