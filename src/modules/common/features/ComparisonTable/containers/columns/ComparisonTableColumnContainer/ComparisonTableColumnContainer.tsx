import { FC, memo } from 'react'
import { IComparisonTableColumn as IColumn } from '../../../models/data'
import { ComparisonTableCell } from '../../../components/cells'

interface IProps {
  column: IColumn
}

const ComparisonTableColumnContainer: FC<IProps> = ({ column }) => {
  switch (column.renderType) {
    case 'auto':
      return (
        <ComparisonTableCell
          preset={column.autoRenderConfig?.preset ?? 'default'}
          value={column.autoRenderConfig?.name ?? ''}
        />
      )

    case 'custom':
      return <>{column.customRenderConfig?.render?.(column)}</>

    default:
      return <></>
  }
}

ComparisonTableColumnContainer.displayName = 'ComparisonTableColumnContainer'

export default memo(ComparisonTableColumnContainer)
