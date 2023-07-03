import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'

import { IComparisonTableReduxState } from '../../types'
import { IComparisonTableHeader as IHeader } from '../../../models/data'

interface ISetHeaderPayload {
  builderId: string
  header: IHeader
}

const setHeader: CaseReducer<IComparisonTableReduxState, PayloadAction<ISetHeaderPayload>> = (state, { payload }) => {
  _.set(state.headersByBuilderId, `[${payload.builderId}]`, payload.header)
}

const ComparisonTableHeaderActions = { setHeader }

export default ComparisonTableHeaderActions
