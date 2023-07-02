import styled from 'styled-components'
import { EPadding } from '../../../assets/styles/Padding'

const HeaderWrapper = styled.div`
  width: 100%;

  flex: 0 0 auto;
`

const ContentWrapper = styled.div`
  flex: 1 1 auto;

  padding: ${EPadding.S2} ${EPadding.S1};

  overflow: hidden;
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledPageStructure = {
  HeaderWrapper,
  ContentWrapper,
  Wrapper,
}

export default StyledPageStructure
