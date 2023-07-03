import { IComparisonTableRowConfig as IRowConfig } from '../../configs'

type TOmittedModel<M = any> = Omit<IRowConfig<M>, 'rowsGroupConfigList'>

export interface IComparisonTableRow<M = any> extends TOmittedModel<M> {
  builderId: string
  rowsGroupId: string
  order: number
  renderType: 'auto' | 'custom' | 'nested' | null
  initialModel?: M
}
