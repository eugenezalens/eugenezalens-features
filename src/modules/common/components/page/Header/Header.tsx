import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import Styled from './Header.styles'

interface IProps {
  pageName: string
}

const Header: FC<PropsWithChildren<IProps>> = ({ pageName, children }) => {
  return (
    <Styled.Wrapper>
      <Styled.DescriptionWrapper>
        <Link to={'/'}>
          <Styled.Logo>
            <Styled.Title>EUGENEZALENS FEATURES</Styled.Title>
          </Styled.Logo>
        </Link>

        <Styled.PageNameWrapper>
          <Styled.PageName>{pageName}</Styled.PageName>
        </Styled.PageNameWrapper>
      </Styled.DescriptionWrapper>

      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  )
}

Header.displayName = 'Header'

export default Header
