import styled, { css } from 'styled-components'

import { TComparisonTableCellPreset as TCellPreset } from '../../../types/cells'
import { EColor } from '../../../../../assets/styles/Color'
import { EPadding } from '../../../../../assets/styles/Padding'

const getFontPreset = (preset: TCellPreset) => {
  switch (preset) {
    case 'bold':
      return css`
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;

        color: ${EColor.TitlePrimary};
      `

    case 'secondary':
      return css`
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;

        color: ${EColor.TitleSecondary};
      `

    default:
      return css`
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;

        color: ${EColor.TitlePrimary};
      `
  }
}

const Wrapper = styled.div<{ $preset: TCellPreset }>`
  width: 100%;

  ${({ $preset }) => getFontPreset($preset)}

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: ${EPadding.S4} 0;
`

const StyledComparisonTableCell = {
  Wrapper,
}

export default StyledComparisonTableCell
