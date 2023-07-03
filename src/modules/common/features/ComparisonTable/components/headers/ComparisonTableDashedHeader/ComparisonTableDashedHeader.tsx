import { FC, memo, ReactNode } from 'react'

import Styled from './ComparisonTableDashedHeader.styles'

interface IProps {
  columnsChildren: ReactNode
}

const ComparisonTableDashedHeader: FC<IProps> = ({ columnsChildren }) => {
  return <Styled.Wrapper>{columnsChildren}</Styled.Wrapper>
}

ComparisonTableDashedHeader.displayName = 'ComparisonTableDashedHeader'

export default memo(ComparisonTableDashedHeader)
