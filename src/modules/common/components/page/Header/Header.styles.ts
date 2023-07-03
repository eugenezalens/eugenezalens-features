import styled, { css } from 'styled-components'
import { EPadding } from '../../../assets/styles/Padding'
import { EColor } from '../../../assets/styles/Color'

const Subsection = styled.div<{ $isDisabled?: boolean }>`
  padding-left: ${EPadding.S6};
  border-left: 2px solid ${EColor.TitleSecondary};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
    `}
`

const SubsectionsWrapper = styled.div`
  display: flex;
  gap: ${EPadding.S6};
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

  align-items: center;
  background-color: ${EColor.PagePrimary};
`

const StyledHeader = {
  Subsection,
  SubsectionsWrapper,
  Title,
  Logo,
  DescriptionWrapper,
  Content,
  Wrapper,
}

export default StyledHeader
