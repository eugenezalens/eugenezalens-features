import { useCallback } from 'react'

import { useAppDispatch } from '../../../../../../../app/hooks'
import { IComparisonTableHeaderConfig as IHeaderConfig } from '../../../models/configs'
import { IComparisonTableHeader as IHeader } from '../../../models/data'
import { ComparisonTableActions as Actions } from '../../../store/reducers'

const _useComparisonTableHeadersService = () => {
  const dispatch = useAppDispatch()

  const createHeader = useCallback((builderId: string, config: IHeaderConfig): IHeader => {
    const header: IHeader = {
      ...config,
      builderId,
      renderType: null,
    }

    if (config?.autoRenderConfig) {
      header.renderType = 'auto'
    }

    if (config?.customRenderConfig) {
      header.renderType = 'custom'
    }

    return header
  }, [])

  const addHeader = useCallback(
    (builderId: string, config: IHeaderConfig): void => {
      const header = createHeader(builderId, config)

      dispatch(Actions.setHeader({ builderId, header }))
    },
    [dispatch, createHeader]
  )

  return { addHeader }
}

export default _useComparisonTableHeadersService
