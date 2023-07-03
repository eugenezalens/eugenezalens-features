import styled from 'styled-components'
import { EColor } from '../../../assets/styles/Color'
import { EPadding } from '../../../assets/styles/Padding'

const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
`

const Body = styled.div``

const Header = styled.div`
  border-bottom: 1px solid ${EColor.BorderPrimary};
  padding-bottom: 10px;
`

const Wrapper = styled.section`
  border-radius: 16px;
  padding: ${EPadding.S1};

  background-color: ${EColor.PagePrimary};
`

const StyledContainer = {
  Title,
  Body,
  Header,
  Wrapper,
}

export default StyledContainer
