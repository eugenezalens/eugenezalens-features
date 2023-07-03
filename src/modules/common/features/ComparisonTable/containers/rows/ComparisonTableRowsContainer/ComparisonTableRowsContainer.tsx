import { FC, memo, useMemo } from 'react'
import _ from 'lodash'

import Styled from './ComparisonTableRowsContainer.styles'
import { useComparisonTableContext as useContext } from '../../../context'
import { useAppSelector } from '../../../../../../../app/hooks'
import { ComparisonTableRowContainer as RowContainer } from '../ComparisonTableRowContainer'

interface IProps {
  rowsGroupId: string
}

const ComparisonTableRowsContainer: FC<IProps> = ({ rowsGroupId }) => {
  const { builderId } = useContext()

  const rows = useAppSelector((state) => state.comparisonTables.rowsByBuilderId[builderId]) ?? {}

  const rowList = useMemo(() => {
    const tempRowList = Object.values(rows)
    const filteredRowsList = tempRowList.filter((row) => row.rowsGroupId === rowsGroupId)

    return _.sortBy(filteredRowsList, 'order')
  }, [rows])

  return (
    <Styled.Wrapper>
      {rowList.map((row) => (
        <RowContainer
          key={row.id}
          row={row}
        />
      ))}
    </Styled.Wrapper>
  )
}

ComparisonTableRowsContainer.displayName = 'ComparisonTableRowsContainer'

export default memo(ComparisonTableRowsContainer)
