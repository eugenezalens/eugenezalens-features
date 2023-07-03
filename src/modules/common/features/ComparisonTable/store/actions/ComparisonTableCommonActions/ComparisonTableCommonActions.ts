import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'

import { IComparisonTableReduxState } from '../../types'

const clearStoreByBuilderId: CaseReducer<IComparisonTableReduxState, PayloadAction<string>> = (state, { payload }) => {
  delete state.headersByBuilderId[payload]
  delete state.columnsByBuilderId[payload]
  delete state.rowsGroupsByBuilderId[payload]
  delete state.rowsByBuilderId[payload]
}

const ComparisonTableCommonActions = { clearStoreByBuilderId }

export default ComparisonTableCommonActions
