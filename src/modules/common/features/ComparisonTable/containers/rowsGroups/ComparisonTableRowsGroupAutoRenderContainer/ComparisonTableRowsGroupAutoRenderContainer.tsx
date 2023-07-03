import { FC, memo } from 'react'
import { IComparisonTableRowsGroup as IRowsGroup } from '../../../models/data'
import { ComparisonTableClearedRowsGroup as ClearedRowsGroup } from '../../../components/rowsGroups'
import { ComparisonTableRowsContainer as RowsContainer } from '../../rows'

interface IProps {
  rowsGroup: IRowsGroup
}

const ComparisonTableRowsGroupAutoRenderContainer: FC<IProps> = ({ rowsGroup }) => {
  switch (rowsGroup.autoRenderConfig?.preset) {
    case 'cleared':
      return <ClearedRowsGroup rowsChildren={<RowsContainer rowsGroupId={rowsGroup.id} />} />

    default:
      return <></>
  }
}

ComparisonTableRowsGroupAutoRenderContainer.displayName = 'ComparisonTableRowsGroupAutoRenderContainer'

export default memo(ComparisonTableRowsGroupAutoRenderContainer)
