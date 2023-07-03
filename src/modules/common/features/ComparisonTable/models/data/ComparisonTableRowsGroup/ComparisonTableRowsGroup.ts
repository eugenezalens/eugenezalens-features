import { IComparisonTableRowsGroupConfig as IRowsGroupConfig } from '../../configs'

type TOmittedModel = Omit<IRowsGroupConfig, 'rowConfigList'>

export interface IComparisonTableRowsGroup extends TOmittedModel {
  builderId: string
  order: number
  renderType: 'auto' | 'custom' | null
  rootRowId?: string
}
