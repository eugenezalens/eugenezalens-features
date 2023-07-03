import { FC, memo } from 'react'

import { IComparisonTableCell as ICell } from '../../../models/data'
import { ComparisonTableCellAutoRenderContainer as AutoRenderContainer } from '../ComparisonTableCellAutoRenderContainer'
import { ComparisonTableCellCustomRenderContainer as CustomRenderContainer } from '../ComparisonTableCellCustomRenderContainer'

interface IProps {
  cell: ICell
}

const ComparisonTableCellContainer: FC<IProps> = ({ cell }) => {
  switch (cell.renderType) {
    case 'auto':
      return <AutoRenderContainer cell={cell} />

    case 'custom':
      return <CustomRenderContainer cell={cell} />

    default:
      return <></>
  }
}

ComparisonTableCellContainer.displayName = 'ComparisonTableCellContainer'

export default memo(ComparisonTableCellContainer)
