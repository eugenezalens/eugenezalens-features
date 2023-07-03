import { FC, memo, PropsWithChildren } from 'react'

import Styled from './Tab.styles'

const Tab: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{children}</Styled.Title>
    </Styled.Wrapper>
  )
}

Tab.displayName = 'Tab'

export default memo(Tab)
