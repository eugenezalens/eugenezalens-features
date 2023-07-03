import { ReactNode } from 'react'

import { TComparisonTableHeaderPreset as THeaderPreset } from '../../../types/header/ComparisonTableHeaderPreset'
import { IComparisonTableHeader as IHeader } from '../../data'

export interface IComparisonTableHeaderConfig {
  autoRenderConfig?: {
    preset: THeaderPreset
  }
  customRenderConfig?: {
    render: (header: IHeader, columnsChildren: ReactNode) => ReactNode
  }
}
