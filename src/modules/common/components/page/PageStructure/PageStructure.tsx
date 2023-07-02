import { FC, ReactNode } from 'react'

import Styled from './PageStructure.styles'

interface IProps {
  header?: ReactNode
  content?: ReactNode
}

const PageStructure: FC<IProps> = ({ header, content }) => {
  return (
    <Styled.Wrapper>
      {header ? <Styled.HeaderWrapper>{header}</Styled.HeaderWrapper> : null}

      {content ? <Styled.ContentWrapper>{content}</Styled.ContentWrapper> : null}
    </Styled.Wrapper>
  )
}

PageStructure.displayName = 'PageStructure'

export default PageStructure
