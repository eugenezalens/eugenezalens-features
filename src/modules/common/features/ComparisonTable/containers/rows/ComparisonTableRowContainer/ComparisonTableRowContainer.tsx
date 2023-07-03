import { FC, memo } from 'react'

import { IComparisonTableRow as IRow } from '../../../models/data'
import { ComparisonTableRowAutoRenderContainer as AutoRenderContainer } from '../ComparisonTableRowAutoRenderContainer'
import { ComparisonTableRowCustomRenderContainer as CustomRenderContainer } from '../ComparisonTableRowCustomRenderContainer'

interface IProps {
  row: IRow
}

const ComparisonTableRowContainer: FC<IProps> = ({ row }) => {
  switch (row.renderType) {
    case 'auto':
      return <AutoRenderContainer row={row} />

    case 'custom':
      return <CustomRenderContainer row={row} />

    default:
      return <></>
  }
}

ComparisonTableRowContainer.displayName = 'ComparisonTableRowContainer'

export default memo(ComparisonTableRowContainer)
