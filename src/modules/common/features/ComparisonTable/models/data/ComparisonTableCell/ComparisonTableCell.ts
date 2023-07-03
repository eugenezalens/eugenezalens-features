import { IComparisonTableCellConfig as ICellConfig } from '../../configs'

export interface IComparisonTableCell<M = any> extends ICellConfig<M> {
  builderId: string
  renderType: 'auto' | 'custom' | null
}
