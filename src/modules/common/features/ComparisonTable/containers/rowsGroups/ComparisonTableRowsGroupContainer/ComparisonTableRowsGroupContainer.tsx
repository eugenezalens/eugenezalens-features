import { FC, memo } from 'react'

import { IComparisonTableRowsGroup as IRowsGroup } from '../../../models/data'
import { ComparisonTableRowsGroupAutoRenderContainer as AutoRenderContainer } from '../ComparisonTableRowsGroupAutoRenderContainer'
import { ComparisonTableRowsGroupCustomRenderContainer as CustomRenderContainer } from '../ComparisonTableRowsGroupCustomRenderContainer'

interface IProps {
  rowsGroup: IRowsGroup
}

const ComparisonTableRowsGroupContainer: FC<IProps> = ({ rowsGroup }) => {
  switch (rowsGroup.renderType) {
    case 'auto':
      return <AutoRenderContainer rowsGroup={rowsGroup} />

    case 'custom':
      return <CustomRenderContainer rowsGroup={rowsGroup} />

    default:
      return <></>
  }
}

ComparisonTableRowsGroupContainer.displayName = 'ComparisonTableRowsGroupContainer'

export default memo(ComparisonTableRowsGroupContainer)
