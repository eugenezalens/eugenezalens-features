import { FC, memo } from 'react'

import { IComparisonTableRowsGroup as IRowsGroup } from '../../../models/data'
import { ComparisonTableRowsContainer as RowsContainer } from '../../rows'

interface IProps {
  rowsGroup: IRowsGroup
}

const ComparisonTableRowsGroupCustomRenderContainer: FC<IProps> = ({ rowsGroup }) => {
  return <>{rowsGroup.customRenderConfig?.render(rowsGroup, <RowsContainer rowsGroupId={rowsGroup.id} />)}</>
}

ComparisonTableRowsGroupCustomRenderContainer.displayName = 'ComparisonTableRowsGroupCustomRenderContainer'

export default memo(ComparisonTableRowsGroupCustomRenderContainer)
