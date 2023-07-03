import styled from 'styled-components'
import { EPadding } from '../../../assets/styles/Padding'
import { EColor } from '../../../assets/styles/Color'

const Title = styled.span`
  color: ${EColor.TitleSecondary};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const Wrapper = styled.div`
  padding: ${EPadding.S5};
`

const StyledTab = {
  Title,
  Wrapper,
}

export default StyledTab
