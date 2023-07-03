import { FC, memo } from 'react'
import _ from 'lodash'

import { IComparisonTableHeader as IHeader } from '../../../models/data'
import { ComparisonTableDashedHeader as DashedHeader } from '../../../components/headers'
import { _useComparisonTableGridsService as useGridsService } from '../../../hooks/services'
import { ComparisonTableGrid as Grid } from '../../structure'
import { ComparisonTableColumnContainer as ColumnContainer } from '../../columns'

interface IProps {
  header: IHeader
}

const ComparisonTableHeaderAutoRenderContainer: FC<IProps> = ({ header }) => {
  const { getColumnList } = useGridsService()

  const fixedColumnList = _.sortBy(getColumnList({ isOnlyFixed: true }), 'order')

  switch (header.autoRenderConfig?.preset) {
    case 'dashed':
      return (
        <DashedHeader
          columnsChildren={
            <Grid
              fixedChildren={fixedColumnList.map((column) => (
                <ColumnContainer
                  key={column.id}
                  column={column}
                />
              ))}
            />
          }
        />
      )

    default:
      return <></>
  }
}

ComparisonTableHeaderAutoRenderContainer.displayName = 'ComparisonTableHeaderAutoRenderContainer'

export default memo(ComparisonTableHeaderAutoRenderContainer)
