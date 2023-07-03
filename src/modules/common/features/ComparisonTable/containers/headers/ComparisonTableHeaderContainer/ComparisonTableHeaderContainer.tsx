import { FC, memo } from 'react'

import { IComparisonTableHeader as IHeader } from '../../../models/data'
import { ComparisonTableHeaderAutoRenderContainer as AutoRenderContainer } from '../ComparisonTableHeaderAutoRenderContainer'
import { ComparisonTableHeaderCustomRenderContainer as CustomRenderContainer } from '../ComparisonTableHeaderCustomRenderContainer'

interface IProps {
  header: IHeader
}

const ComparisonTableHeaderContainer: FC<IProps> = ({ header }) => {
  switch (header.renderType) {
    case 'auto':
      return <AutoRenderContainer header={header} />

    case 'custom':
      return <CustomRenderContainer header={header} />

    default:
      return <></>
  }
}

ComparisonTableHeaderContainer.displayName = 'ComparisonTableHeaderContainer'

export default memo(ComparisonTableHeaderContainer)
