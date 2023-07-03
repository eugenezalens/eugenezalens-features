import { useAppSelector } from '../../../../../../app/hooks'

const useComparisonTableStore = () => {
  const store = useAppSelector((state) => state.comparisonTables)

  return store
}

export default useComparisonTableStore
