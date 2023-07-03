import { FC, memo } from 'react'

import Styled from './ComparisonTableCell.styles'
import { TComparisonTableCellPreset as TCellPreset } from '../../../types/cells'

interface IProps {
  preset: TCellPreset
  value: string | number
}

const ComparisonTableCell: FC<IProps> = ({ preset, value }) => {
  return <Styled.Wrapper $preset={preset}>{value}</Styled.Wrapper>
}

ComparisonTableCell.displayName = 'ComparisonTableBuilderCell'

export default memo(ComparisonTableCell)
