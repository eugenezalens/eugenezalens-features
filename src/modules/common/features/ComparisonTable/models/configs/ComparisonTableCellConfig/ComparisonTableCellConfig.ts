import { ReactNode } from 'react'

import { TComparisonTableCellPreset as TCellPreset } from '../../../types/cells'
import { IComparisonTableCell as ICell } from '../../data'

export interface IComparisonTableCellConfig<M = any> {
  columnId: string
  rowId: string
  autoRenderConfig?: {
    preset: TCellPreset
    value?: string | number
  }
  customRenderConfig?: {
    render: (cell: ICell) => ReactNode
  }
  initialModel?: M
}
