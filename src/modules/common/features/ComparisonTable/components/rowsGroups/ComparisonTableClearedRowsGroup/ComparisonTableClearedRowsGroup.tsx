import { FC, memo, ReactNode } from 'react'

import Styled from './ComparisonTableClearedRowsGroup.styles'

interface IProps {
  rowsChildren: ReactNode
}

const ComparisonTableClearedRowsGroup: FC<IProps> = ({ rowsChildren }) => {
  return <Styled.Wrapper>{rowsChildren}</Styled.Wrapper>
}

ComparisonTableClearedRowsGroup.displayName = 'ComparisonTableClearedRowsGroup'

export default memo(ComparisonTableClearedRowsGroup)
