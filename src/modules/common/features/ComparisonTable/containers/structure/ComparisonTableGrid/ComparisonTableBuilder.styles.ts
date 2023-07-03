import styled, { css } from 'styled-components'

const FixedWrapper = styled.div<{ $columnsWidth: string; $hasFullContainerWidth: boolean }>`
  display: grid;
  align-items: center;

  grid-template-columns: ${({ $columnsWidth }) => $columnsWidth};

  & > :not(:last-child) {
    padding-right: 16px;
  }
  
  ${({ $hasFullContainerWidth }) =>
    $hasFullContainerWidth &&
    css`
      width: 100%;
    `}}
`

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 16px;
`

const StyledComparisonTableGrid = {
  FixedWrapper,
  Wrapper,
}

export default StyledComparisonTableGrid
