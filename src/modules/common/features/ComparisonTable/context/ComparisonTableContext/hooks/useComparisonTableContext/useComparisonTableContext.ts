import { useContext } from 'react'

import ComparisonTableContext from '../../ComparisonTable.context'

const useComparisonTableContext = () => {
  const context = useContext(ComparisonTableContext)

  return context
}

export default useComparisonTableContext
