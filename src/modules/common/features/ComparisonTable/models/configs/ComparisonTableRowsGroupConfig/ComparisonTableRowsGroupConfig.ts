import { ReactNode } from 'react'

import { IComparisonTableRowConfig as IRowConfig } from '../ComparisonTableRowConfig'
import { IComparisonTableRowsGroup as IRowsGroup } from '../../data'

/**
 * Модель-конфиг группы рядов таблицы.
 */
export interface IComparisonTableRowsGroupConfig {
  id: string
  rowConfigList: IRowConfig[]
  autoRenderConfig?: {
    preset: 'cleared'
    name?: string
  }
  customRenderConfig?: {
    render: (rowsGroup: IRowsGroup, rowsChildren: ReactNode) => ReactNode
  }
}
