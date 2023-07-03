import { FC, useEffect } from 'react'

import Styled from './ComparisonTable.styles'
import { useAppDispatch } from '../../../../app/hooks'
import { ComparisonTableActions as Actions } from './store/reducers'
import { useComparisonTableStore as useStore } from './hooks'
import { ComparisonTableContext as Context } from './context'
import { ComparisonTableHeaderContainer as HeaderContainer } from './containers/headers'
import { ComparisonTableBuilderContent as Content } from './containers/content/ComparisonTableContent'

interface IProps {
  builderId: string
  tableName: string
  options?: {
    isClearStoreOnUnmount?: boolean
  }
}

const ComparisonTable: FC<IProps> = ({ builderId, tableName, options }) => {
  const dispatch = useAppDispatch()

  const store = useStore()

  const header = store.headersByBuilderId[builderId]

  useEffect(() => {
    return () => {
      if (options?.isClearStoreOnUnmount) {
        dispatch(Actions.clearStoreByBuilderId(builderId))
      }
    }
  }, [])

  return (
    <Context.Provider value={{ builderId, tableName }}>
      <Styled.Wrapper>{header ? <HeaderContainer header={header} /> : null}</Styled.Wrapper>

      <Content />
    </Context.Provider>
  )
}

ComparisonTable.displayName = 'ComparisonTable'

export default ComparisonTable
