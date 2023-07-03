import { IComparisonTableColumnConfig as IColumnConfig } from '../../configs'

export interface IComparisonTableColumn extends IColumnConfig {
  builderId: string
  order: number
  renderType: 'auto' | 'custom' | null
}
