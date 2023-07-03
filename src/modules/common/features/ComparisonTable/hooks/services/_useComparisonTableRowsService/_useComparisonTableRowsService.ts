import { useCallback } from 'react'
import _ from 'lodash'

import { useAppDispatch } from '../../../../../../../app/hooks'
import {
  IComparisonTableRowConfig as IRowConfig,
  IComparisonTableRowsGroupConfig as IRowsGroupConfig,
} from '../../../models/configs'
import { IComparisonTableRow as IRow, IComparisonTableRowsGroup as IRowsGroup } from '../../../models/data'
import { ComparisonTableActions as Actions } from '../../../store/reducers'

const _useComparisonTableRowsService = () => {
  const dispatch = useAppDispatch()

  const createRow = (builderId: string, rowsGroupId: string, config: IRowConfig, order: number): IRow => {
    const omittedConfig = _.omit(config, ['rowsGroupConfigList'])

    const row: IRow = {
      ...omittedConfig,
      builderId,
      rowsGroupId,
      order,
      renderType: null,
    }

    if (config?.autoRenderConfig) {
      row.renderType = 'auto'
    }

    if (config?.customRenderConfig) {
      row.renderType = 'custom'
    }

    return row
  }

  const createRowList = (builderId: string, rowsGroupId: string, configList: IRowConfig[]): IRow[] => {
    const rowList = configList.map((config, i) => createRow(builderId, rowsGroupId, config, i + 1))

    return rowList
  }

  const addRowList = useCallback((builderId: string, rowsGroupId: string, configList: IRowConfig[]): void => {
    const rowList = createRowList(builderId, rowsGroupId, configList)

    dispatch(Actions.setRowList({ builderId, rowList }))
  }, [])

  const createRowsGroup = (builderId: string, config: IRowsGroupConfig, order: number): IRowsGroup => {
    const omittedConfig = _.omit(config, ['rowConfigList'])

    const rowsGroup: IRowsGroup = {
      ...omittedConfig,
      builderId,
      order,
      renderType: null,
    }

    addRowList(builderId, config.id, config.rowConfigList)

    if (config?.autoRenderConfig) {
      rowsGroup.renderType = 'auto'
    }

    if (config?.customRenderConfig) {
      rowsGroup.renderType = 'custom'
    }

    return rowsGroup
  }

  const createRowsGroupList = (builderId: string, configList: IRowsGroupConfig[]): IRowsGroup[] => {
    const rowsGroupList = configList.map((config, i) => createRowsGroup(builderId, config, i + 1))

    return rowsGroupList
  }

  const addRowsGroupList = useCallback((builderId: string, configList: IRowsGroupConfig[]): void => {
    const rowsGroupList = createRowsGroupList(builderId, configList)

    dispatch(Actions.setRowsGroupList({ builderId, rowsGroupList }))
  }, [])

  return { addRowsGroupList, addRowList }
}

export default _useComparisonTableRowsService
