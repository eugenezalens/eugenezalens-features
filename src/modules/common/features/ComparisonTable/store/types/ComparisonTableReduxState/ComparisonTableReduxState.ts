import {
  IComparisonTableColumn as IColumn,
  IComparisonTableHeader as IHeader,
  IComparisonTableRow as IRow,
  IComparisonTableRowsGroup as IRowsGroup,
} from '../../../models/data'

export interface IComparisonTableReduxState {
  headersByBuilderId: Record<string, IHeader>
  columnsByBuilderId: Record<string, Record<string, IColumn>>
  rowsGroupsByBuilderId: Record<string, Record<string, IRowsGroup>>
  rowsByBuilderId: Record<string, Record<string, IRow>>
}
