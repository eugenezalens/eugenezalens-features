import { FC, memo, ReactNode } from 'react'

import Styled from './ComparisonTableBuilder.styles'
import { _useComparisonTableGridsService as useGridsService } from '../../../hooks/services'

interface IProps {
  fixedChildren?: ReactNode
  scrollableChildren?: ReactNode
}

const ComparisonTableGrid: FC<IProps> = ({ fixedChildren }) => {
  const { getFixedColumnsWidth } = useGridsService()

  const fixedColumnsWidth = getFixedColumnsWidth()

  return (
    <Styled.Wrapper>
      {fixedChildren && fixedColumnsWidth ? (
        <Styled.FixedWrapper
          $columnsWidth={fixedColumnsWidth}
          $hasFullContainerWidth
        >
          {fixedChildren}
        </Styled.FixedWrapper>
      ) : null}
    </Styled.Wrapper>
  )
}

ComparisonTableGrid.displayName = 'ComparisonTableGrid'

export default memo(ComparisonTableGrid)
