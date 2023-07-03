import { FC, memo } from 'react'

import { IComparisonTableRow as IRow } from '../../../models/data'
import { useComparisonTableContext as useContext } from '../../../context'
import { ComparisonTableGrid as Grid } from '../../structure'
import { ComparisonTableCell as Cell } from '../../../components/cells'
import { ComparisonTableCellContainer as CellContainer } from '../../cells'
import { _useComparisonTableGridsService as useService } from '../../../hooks/services'

interface IProps {
  row: IRow
}

const ComparisonTableRowAutoRenderContainer: FC<IProps> = ({ row }) => {
  const { builderId } = useContext()

  const { getOrderedCellList } = useService()

  const cells = row?.isWithoutCells
    ? { fixedCellList: [], scrollableCellList: [] }
    : getOrderedCellList(builderId, row.id)

  if (row?.isWithoutCells) {
    return (
      <div>
        <Cell
          preset={row.autoRenderConfig?.preset ?? 'default'}
          value={row.autoRenderConfig?.name ?? ''}
        />
      </div>
    )
  }

  return (
    <Grid
      fixedChildren={
        <>
          <Cell
            preset={row.autoRenderConfig?.preset ?? 'default'}
            value={row.autoRenderConfig?.name ?? ''}
          />

          {cells.fixedCellList.map((cell) => (
            <CellContainer
              key={cell.columnId}
              cell={cell}
            />
          ))}
        </>
      }
    />
  )
}

ComparisonTableRowAutoRenderContainer.displayName = 'ComparisonTableRowAutoRenderContainer'

export default memo(ComparisonTableRowAutoRenderContainer)
