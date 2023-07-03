import { FC, memo } from 'react'

import { IComparisonTableCell as ICell } from '../../../models/data'

interface IProps {
  cell: ICell
}

const ComparisonTableCellCustomRenderContainer: FC<IProps> = ({ cell }) => {
  return <>{cell.customRenderConfig?.render?.(cell)}</>
}

ComparisonTableCellCustomRenderContainer.displayName = 'ComparisonTableCellCustomRenderContainer'

export default memo(ComparisonTableCellCustomRenderContainer)
