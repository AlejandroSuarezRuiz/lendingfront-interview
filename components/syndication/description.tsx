import styled from 'styled-components';
import ProgressTab from './progressTab';
import PurchaseItem from './purchaseItem';
import Loading from '../loading';
import { DescriptionProps } from './interface';
import { useInverstors } from '../../api';

const StyledDescription = styled.div`
  z-index: 3;
  box-shadow: -2px 0px 8px 0px rgba(0,0,0,0.3);
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  .loading-svg {
    svg {
      width: 80px;
      height: 80px;
    }
  }
`;

const Header = styled.div`
  background-color: ${p => p.theme.SoftBlue};
  height: 93px;
  color: white;
  position: relative;

  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  display: inline-block;
  border-bottom: solid 1px ${p => p.theme.ShadowAqua2};
  margin: 0;
  padding-top: 12px;
  padding-bottom: 4px;
  padding-left: 24px;
  font-size: 16px;
`;

const FloatingButton = styled.button`
  position: absolute;
  border: none;
  outline: none;
  color: white;
  background-color: ${p => p.theme.Orange};
  height: 60px;
  width: 60px;
  border-radius: 9999px;
  font-size: 28px;
  font-weight: 300;
  margin: 0;
  padding: 0;  
  display: flex;
  justify-content: center;
  align-items: center;

  top: -30px;
  right: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`;

const TableColumns = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 150px 0 24px;

  p {
    margin: 0;
    padding: 0;
    flex: 1;
  }
`;

const PurchaseList = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow-y: auto;
`;

const Content = ({productId, fullProduct, items, loading}: DescriptionProps) => {
  const consolidate = items?.reduce((acc, value) => acc + value.sold, 0) || 0;
  const remainding = (fullProduct?.totalValue || 0) - consolidate;

  return(
    <>
      <Header>
        <div>
          <Title>
            Product ID {productId || "-"}
          </Title>
        </div>

        <FloatingButton>
          +
        </FloatingButton>

        <TableColumns>
          <p>Inverstor name</p>
          <p>Sold</p>
          <p>% Purchased</p>
        </TableColumns>
      </Header>

      <PurchaseList>
        {loading && <Loading />}
        {items ? 
        items.map((item, idx) => <PurchaseItem item={item} key={idx} />): 
        null}
      </PurchaseList>

      <ProgressTab 
        remainding={remainding}
        totalValue={fullProduct?.totalValue}
      />
    </>
  )
}

const EmptyState = () => {
  const StyledEmptyState = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  `;

  return(
    <StyledEmptyState>
      Please, select a product to visualize the inverstors.
    </StyledEmptyState>
  )
}

const Description = ({productId, fullProduct}: DescriptionProps) => {

  const { data, isFetching } = useInverstors(productId);

  return(
    <StyledDescription>
      {
        productId ?
        <Content 
          productId={productId}
          fullProduct={fullProduct}
          items={data} 
          loading={isFetching}
        /> :
        <EmptyState />
      }
    </StyledDescription>
  )
}

export default Description;