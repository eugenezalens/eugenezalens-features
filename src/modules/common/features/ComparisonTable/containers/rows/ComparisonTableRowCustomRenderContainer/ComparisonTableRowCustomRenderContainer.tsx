import { FC, memo } from 'react'

import { IComparisonTableRow as IRow } from '../../../models/data'
import { ComparisonTableGrid as Grid } from '../../structure'
import { ComparisonTableCellContainer as CellContainer } from '../../cells'
import { _useComparisonTableGridsService as useService } from '../../../hooks/services'
import { useComparisonTableContext as useContext } from '../../../context'

interface IProps {
  row: IRow
}

const ComparisonTableRowCustomRenderContainer: FC<IProps> = ({ row }) => {
  const { builderId } = useContext()

  const { getOrderedCellList } = useService()

  const cells = row?.isWithoutCells
    ? { fixedCellList: [], scrollableCellList: [] }
    : getOrderedCellList(builderId, row.id)

  if (row?.isWithoutCells) {
    return <>{row.customRenderConfig?.render?.(row)}</>
  }

  return (
    <Grid
      fixedChildren={
        <>
          {row.customRenderConfig?.render?.(row)}

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

ComparisonTableRowCustomRenderContainer.displayName = 'ComparisonTableRowCustomRenderContainer'

export default memo(ComparisonTableRowCustomRenderContainer)
