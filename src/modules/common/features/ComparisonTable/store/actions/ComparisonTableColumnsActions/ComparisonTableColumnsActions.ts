import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'

import { IComparisonTableReduxState } from '../../types'
import { IComparisonTableColumn as IColumn } from '../../../models/data'

interface ISetColumnListPayload {
  builderId: string
  columnList: IColumn[]
}

const setColumnList: CaseReducer<IComparisonTableReduxState, PayloadAction<ISetColumnListPayload>> = (
  state,
  { payload }
) => {
  payload.columnList.forEach((column) => {
    _.set(state.columnsByBuilderId, `[${payload.builderId}][${column.id}]`, column)
  })
}

const ComparisonTableColumnsActions = { setColumnList }

export default ComparisonTableColumnsActions
