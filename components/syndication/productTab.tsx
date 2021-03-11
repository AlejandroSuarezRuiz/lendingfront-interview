import styled from 'styled-components';
import { format, parseJSON } from 'date-fns'
import { ProductTabProps, ProductTabStyle } from './interface';

const StyledProductTab = styled.div<ProductTabStyle>`
  background-color: ${p => p.selected ? p.theme.Aqua : "white"};
  cursor: pointer;
  
  &&& * {
    ${({ selected }) => selected && `
      color: white;
    `}
  }

  &:hover {
    background-color: ${p => p.selected ? p.theme.Aqua : p.theme.ProductHover};
  }
`;

const Wrapper = styled.div`
  padding: 20px 0 12px 0;
  margin: 0 24px;
  border-bottom: solid 1px ${p => p.theme.LightGray};
  display: flex;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-weight: 400;
  color: ${p => p.theme.DarkGray};

  span {
    color: ${p => p.theme.MediumGray};
    font-size: 13px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  gap: 4px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-size: 13px;
  color: ${p => p.theme.DarkGray};
`

const HighlightText = styled.span`
  color: ${props => props.theme.Aqua};
`;

const BigNumber = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const ProductTab = ({item, isSelected, onClick}: ProductTabProps) => {

  const formattedDate = format(parseJSON(item.createdAt), 'MM/dd/yyyy');
  const handleClick = () => onClick ? onClick(item._id) : null;

  return(
    <StyledProductTab selected={isSelected} onClick={handleClick}>
      <Wrapper>
        <LeftSection>
          <span>Product ID</span>
          {item._id}
        </LeftSection>

        <RightSection>
          <HighlightText>Advance</HighlightText>
          {formattedDate}
          <BigNumber>
            $ {item.totalValue.toLocaleString()}
          </BigNumber>
        </RightSection>
      </Wrapper>
    </StyledProductTab>
  )
}

export default ProductTab;