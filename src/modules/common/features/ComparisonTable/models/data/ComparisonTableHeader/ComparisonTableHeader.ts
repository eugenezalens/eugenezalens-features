import { IComparisonTableHeaderConfig as IHeaderConfig } from '../../configs'

export interface IComparisonTableHeader extends IHeaderConfig {
  builderId: string
  renderType: 'auto' | 'custom' | null
}
