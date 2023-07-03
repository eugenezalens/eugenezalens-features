import { ReactNode } from 'react'

import { IComparisonTableColumn as IColumn } from '../../data'
import { TComparisonTableCellPreset as TCellPreset } from '../../../types/cells'

type TWidth = `${number}fr` | `${number}px` | `${number}%` | 'auto-fill'

export interface IComparisonTableColumnConfig {
  id: string
  width: TWidth
  isFixed?: boolean
  autoRenderConfig?: {
    preset: TCellPreset
    name?: string
  }
  customRenderConfig?: {
    render: (column: IColumn) => ReactNode
  }
}
