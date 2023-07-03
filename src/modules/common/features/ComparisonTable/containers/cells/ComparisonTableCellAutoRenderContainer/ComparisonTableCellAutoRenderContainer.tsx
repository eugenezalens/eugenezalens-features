import { FC, memo } from 'react'

import { IComparisonTableCell as ICell } from '../../../models/data'
import { ComparisonTableCell as Cell } from '../../../components/cells'

interface IProps {
  cell: ICell
}

const ComparisonTableCellAutoRenderContainer: FC<IProps> = ({ cell }) => {
  return (
    <Cell
      preset={cell.autoRenderConfig?.preset ?? 'default'}
      value={cell.autoRenderConfig?.value ?? ''}
    />
  )
}

ComparisonTableCellAutoRenderContainer.displayName = 'ComparisonTableCellAutoRenderContainer'

export default memo(ComparisonTableCellAutoRenderContainer)
