import { FC, PropsWithChildren } from 'react'

import Styled from './Container.styles'

interface IProps {
  title: string
}

const Container: FC<PropsWithChildren<IProps>> = ({ title, children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Header>

      <Styled.Body>{children}</Styled.Body>
    </Styled.Wrapper>
  )
}

Container.displayName = 'Container'

export default Container
