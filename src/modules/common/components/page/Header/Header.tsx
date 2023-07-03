import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import Styled from './Header.styles'
import { EAppRoute } from '../../../../../routes'
import { Tab } from '../../elements'

interface ISubsection {
  title: string
  link: EAppRoute
  isDisabled?: boolean
}

interface IProps {
  subsectionList: ISubsection[]
}

const Header: FC<PropsWithChildren<IProps>> = ({ subsectionList, children }) => {
  return (
    <Styled.Wrapper>
      <Styled.DescriptionWrapper>
        <Link to={'/'}>
          <Styled.Logo>
            <Styled.Title>EUGENEZALENS</Styled.Title>
          </Styled.Logo>
        </Link>

        <Styled.SubsectionsWrapper>
          {subsectionList.map((subsection) => (
            <Styled.Subsection
              key={subsection.link}
              $isDisabled={subsection?.isDisabled}
            >
              <Link to={subsection.link}>
                <Tab>{subsection.title}</Tab>
              </Link>
            </Styled.Subsection>
          ))}
        </Styled.SubsectionsWrapper>
      </Styled.DescriptionWrapper>

      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  )
}

Header.displayName = 'Header'

export default Header
