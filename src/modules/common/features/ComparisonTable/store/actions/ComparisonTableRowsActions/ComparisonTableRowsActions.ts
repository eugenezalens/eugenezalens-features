import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'

import { IComparisonTableReduxState } from '../../types'
import { IComparisonTableRow as IRow, IComparisonTableRowsGroup as IRowsGroup } from '../../../models/data'

interface ISetRowsGroupListPayload {
  builderId: string
  rowsGroupList: IRowsGroup[]
}

const setRowsGroupList: CaseReducer<IComparisonTableReduxState, PayloadAction<ISetRowsGroupListPayload>> = (
  state,
  { payload }
) => {
  payload.rowsGroupList.forEach((rowsGroup) => {
    _.set(state.rowsGroupsByBuilderId, `[${payload.builderId}][${rowsGroup.id}]`, rowsGroup)
  })
}

interface ISetRowListPayload {
  builderId: string
  rowList: IRow[]
}

const setRowList: CaseReducer<IComparisonTableReduxState, PayloadAction<ISetRowListPayload>> = (state, { payload }) => {
  payload.rowList.forEach((row) => {
    _.set(state.rowsByBuilderId, `[${payload.builderId}][${row.id}]`, row)
  })
}

const ComparisonTableRowsActions = { setRowsGroupList, setRowList }

export default ComparisonTableRowsActions
