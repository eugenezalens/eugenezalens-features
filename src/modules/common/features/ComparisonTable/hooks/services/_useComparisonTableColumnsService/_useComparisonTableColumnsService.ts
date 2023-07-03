import { useCallback } from 'react'

import { useAppDispatch } from '../../../../../../../app/hooks'
import { IComparisonTableColumnConfig as IColumnConfig } from '../../../models/configs'
import { IComparisonTableColumn as IColumn } from '../../../models/data'
import { ComparisonTableActions as Actions } from '../../../store/reducers'

const _useComparisonTableColumnsService = () => {
  const dispatch = useAppDispatch()

  const createColumn = useCallback((builderId: string, config: IColumnConfig, order: number): IColumn => {
    const column: IColumn = {
      ...config,
      builderId,
      order,
      renderType: null,
    }

    if (config?.autoRenderConfig) {
      column.renderType = 'auto'
    }

    if (config?.customRenderConfig) {
      column.renderType = 'custom'
    }

    return column
  }, [])

  const createColumnList = useCallback(
    (builderId: string, configList: IColumnConfig[]): IColumn[] => {
      const columnList = configList.map((config, i) => createColumn(builderId, config, i + 1))

      return columnList
    },
    [createColumn]
  )

  const addColumnList = useCallback(
    (builderId: string, configList: IColumnConfig[]): void => {
      const columnList = createColumnList(builderId, configList)

      dispatch(Actions.setColumnList({ builderId, columnList }))
    },
    [dispatch, createColumnList]
  )

  return { addColumnList }
}

export default _useComparisonTableColumnsService
