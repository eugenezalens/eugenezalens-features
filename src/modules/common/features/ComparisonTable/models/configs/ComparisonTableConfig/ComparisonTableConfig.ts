import { IComparisonTableHeaderConfig as IHeaderConfig } from '../ComparisonTableHeaderConfig'
import { IComparisonTableCellConfig as ICell } from '../ComparisonTableCellConfig'
import { IComparisonTableColumnConfig as IColumnConfig } from '../ComparisonTableColumnConfig'
import { IComparisonTableRowsGroupConfig as IRowsGroupConfig } from '../ComparisonTableRowsGroupConfig'

export interface IComparisonTableConfig {
  id: string
  name: string
  headerConfig: IHeaderConfig
  columnConfigList: IColumnConfig[]
  rowsGroupConfigList?: IRowsGroupConfig[]
  cellConfigs?: Record<string, ICell[]>
}
