import styled from 'styled-components';
import Gauge from '../gauge';
import { PurchaseItemProps, PurchaseActionProps } from './interface';

const StyledPurchaseItem = styled.div`
  border-bottom: solid 1px ${p => p.theme.LightGray};
  padding: 8px 24px;
  font-size: 14px;

  display: flex;

  * {
    margin: 0;
    padding: 0;
    flex: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ActionContainer = styled.div`
  width: 126px;
  max-width: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const ActionButton = styled.button<PurchaseActionProps>`
  border: solid 2px ${p => p.theme.Aqua};
  background-color: ${p => p.secondary ? p.theme.Aqua : "white"};
  color: ${p => p.secondary ? "white" : p.theme.Aqua};
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  border-radius: 9999px;
  cursor: pointer;
  outline: none;

  .icon {
    width: 14px;
    height: 14px;
  }

  .icon-edit {
    filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(244deg) brightness(103%) contrast(101%);
  }

  .icon-close {
    filter: invert(34%) sepia(90%) saturate(1101%) hue-rotate(152deg) brightness(99%) contrast(101%);
  }
`;

const PurchaseItem = ({ item }: PurchaseItemProps) => {

  const Actions = [
    <ActionButton secondary key="edit">
      <span className="icon icon-edit" />
    </ActionButton>,
    <ActionButton key="close">
      <span className="icon icon-close" />
    </ActionButton>
  ]

  return(
    <StyledPurchaseItem>
      <Wrapper>
        <p>{item.inverstor}</p>
        <p>$ {item.sold.toLocaleString()}</p>
        <Gauge value={item.purchased}/>
      </Wrapper>
      <ActionContainer>
        {item.editable ? Actions : null}
      </ActionContainer>
    </StyledPurchaseItem>
  )
}

export default PurchaseItem;