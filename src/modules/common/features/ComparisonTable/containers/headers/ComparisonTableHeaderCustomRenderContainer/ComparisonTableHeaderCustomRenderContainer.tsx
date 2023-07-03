import { FC, memo } from 'react'
import { useComparisonTableContext as useContext } from '../../../context'
import { IComparisonTableHeader as IHeader } from '../../../models/data'

interface IProps {
  header: IHeader
}

const ComparisonTableHeaderCustomRenderContainer: FC<IProps> = ({ header }) => {
  const context = useContext()

  return <>{header.customRenderConfig?.render?.(header, <div></div>)}</>
}

ComparisonTableHeaderCustomRenderContainer.displayName = 'ComparisonTableHeaderCustomRenderContainer'

export default memo(ComparisonTableHeaderCustomRenderContainer)
