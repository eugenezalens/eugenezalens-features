import { createContext } from 'react'

interface IContext {
  builderId: string
  tableName: string
}

const defaultValue: IContext = {
  builderId: '',
  tableName: '',
}

const ComparisonTableContext = createContext<IContext>(defaultValue)

export default ComparisonTableContext
