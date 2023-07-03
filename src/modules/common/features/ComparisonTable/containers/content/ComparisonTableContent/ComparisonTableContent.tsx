import { FC, memo, useMemo } from 'react'
import _ from 'lodash'

import Styled from './ComparisonTableContent.styles'
import { useComparisonTableContext as useContext } from '../../../context'
import { useAppSelector } from '../../../../../../../app/hooks'
import { ComparisonTableRowsGroupContainer as RowsGroupContainer } from '../../rowsGroups'

const ComparisonTableContent: FC = () => {
  const { builderId } = useContext()

  const rowsGroups = useAppSelector((state) => state.comparisonTables.rowsGroupsByBuilderId[builderId]) ?? {}

  const rowsGroupList = useMemo(() => {
    return _.sortBy(Object.values(rowsGroups), 'order')
  }, [rowsGroups])

  return (
    <Styled.Wrapper>
      {rowsGroupList.map((rowsGroup) => (
        <RowsGroupContainer
          key={rowsGroup.id}
          rowsGroup={rowsGroup}
        />
      ))}
    </Styled.Wrapper>
  )
}

ComparisonTableContent.displayName = 'ComparisonTableBuilderContent'

export default memo(ComparisonTableContent)
