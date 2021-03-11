import styled from 'styled-components';
import Button from '../button';
import Loading from '../loading';
import ProductTab from './productTab';
import { SidebarProps } from './interface';

const Header = styled.div`
  background-color: ${p => p.theme.BackgroundGray};
  color: rgba(0,0,0, 0.8);
  font-weight: 300;
  font-size: 12px;
  padding: 8px 24px;
`;

const Footer = styled.div`
  background-color: ${p => p.theme.BackgroundGray};
  height: 70px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  gap: 24px;

  button {
    flex: 1;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .icon {
      width: 12px;
      height: 12px;
    }

    .icon-close {
      filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(244deg) brightness(103%) contrast(101%);
    }

    .icon-save {
      filter: invert(34%) sepia(90%) saturate(1101%) hue-rotate(152deg) brightness(99%) contrast(101%);
    }
  }

  z-index: 1;
`;

const StyledSidebar = styled.aside`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 360px;

  margin: 0;
  padding: 0;
`;

const ProductList = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow-y: auto;
  z-index: 2;
  
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.1);

  .loading-svg {
    svg {
      width: 80px;
      height: 80px;
    }
  }
`;

const Sidebar = ({products, selectedProduct, onProductSelect, loading}: SidebarProps) => {

  const handleClick = (itemId: string) => 
    onProductSelect ? onProductSelect(itemId) : null;

  return(
    <StyledSidebar>
      <Header>
        Select a product to syndicate
      </Header>

      <ProductList>
        {loading && <Loading />}
        {products && products.map(product => (
          <ProductTab 
            item={product} 
            key={product._id}
            onClick={handleClick}
            isSelected={product._id === selectedProduct}
          />
        ))}
      </ProductList>

      <Footer>
        <Button secondary>
          <>
            <span className="icon icon-close" />
            <span> Close </span>
          </>
        </Button>
        <Button>
          <>
            <span className="icon icon-save" />
            <span> Sell </span>
          </>
        </Button>
      </Footer>
    </StyledSidebar>
  )
}

export default Sidebar;