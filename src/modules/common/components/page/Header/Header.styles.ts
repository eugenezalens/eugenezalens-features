import styled from 'styled-components'
import { EPadding } from '../../../assets/styles/Padding'
import { EColor } from '../../../assets/styles/Color'

const PageName = styled.h2`
  font-size: 12px;
  font-weight: bold;

  color: gray;
`

const PageNameWrapper = styled.div`
  padding-left: ${EPadding.S6};

  border-left: 2px solid ${EColor.TitleSecondary};
`

const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const Logo = styled.div``

const Content = styled.div``

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${EPadding.S4};
`

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;

  padding: ${EPadding.S3};
  border-bottom: 1px solid ${EColor.TitlePrimary};

  align-items: center;
  background-color: ${EColor.PagePrimary};
`

const StyledHeader = {
  PageName,
  PageNameWrapper,
  Title,
  Logo,
  DescriptionWrapper,
  Content,
  Wrapper,
}

export default StyledHeader
