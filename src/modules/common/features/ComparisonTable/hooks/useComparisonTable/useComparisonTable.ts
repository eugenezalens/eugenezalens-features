import { useCallback } from 'react'

import { IComparisonTableConfig as IConfig } from '../../models/configs'
import {
  _useComparisonTableColumnsService as useColumnsService,
  _useComparisonTableHeadersService as useHeadersService,
  _useComparisonTableRowsService as useRowsService,
} from '../services'

const useComparisonTable = () => {
  const { addHeader } = useHeadersService()
  const { addColumnList } = useColumnsService()
  const { addRowsGroupList } = useRowsService()

  const initiateTable = useCallback(
    (config: IConfig) => {
      addHeader(config.id, config.headerConfig)
      addColumnList(config.id, config.columnConfigList)

      if (config.rowsGroupConfigList) {
        addRowsGroupList(config.id, config.rowsGroupConfigList)
      }
    },
    [addHeader, addColumnList, addRowsGroupList]
  )

  return { initiateTable }
}

export default useComparisonTable
