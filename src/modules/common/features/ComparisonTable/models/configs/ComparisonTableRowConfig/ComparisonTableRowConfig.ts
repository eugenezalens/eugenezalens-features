import { ReactNode } from 'react'

import { TComparisonTableCellPreset as TCellPreset } from '../../../types/cells'
import { IComparisonTableRow as IRow } from '../../data'
import { IComparisonTableRowsGroupConfig as IRowsGroupConfig } from '../ComparisonTableRowsGroupConfig'

export interface IComparisonTableRowConfig<M = any> {
  id: string
  name?: string
  isWithoutCells?: boolean
  rowsGroupConfigList?: IRowsGroupConfig[]
  autoRenderConfig?: {
    preset: TCellPreset
    name?: string
  }
  customRenderConfig?: {
    render: (row: IRow) => ReactNode
  }
  initialModel?: M
}
