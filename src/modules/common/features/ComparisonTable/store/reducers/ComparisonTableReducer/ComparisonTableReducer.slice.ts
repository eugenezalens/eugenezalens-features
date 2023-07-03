import { createSlice } from '@reduxjs/toolkit'

import { IComparisonTableReduxState } from '../../types'
import {
  ComparisonTableColumnsActions,
  ComparisonTableCommonActions,
  ComparisonTableHeaderActions,
  ComparisonTableRowsActions,
} from '../../actions'

export const initialComparisonTableState: IComparisonTableReduxState = {
  headersByBuilderId: {},
  columnsByBuilderId: {},
  rowsGroupsByBuilderId: {},
  rowsByBuilderId: {},
}

const ComparisonTableSlice = createSlice({
  name: 'comparison-tables',
  initialState: initialComparisonTableState,
  reducers: {
    ...ComparisonTableCommonActions,
    ...ComparisonTableHeaderActions,
    ...ComparisonTableColumnsActions,
    ...ComparisonTableRowsActions,
  },
})

export const ComparisonTableActions = ComparisonTableSlice.actions

const ComparisonTableReducer = ComparisonTableSlice.reducer

export default ComparisonTableReducer
