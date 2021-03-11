import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import Description from './description';
import { useProducts } from '../../api';
import { Product } from './interface';

const Container = styled.div`
  border-radius: 2px;
  background-color: white;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  flex-grow: 1;
  margin-bottom: 24px;

  display: flex;

  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.3);
`;

const Syndication = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const handleProductSelect = (productId: string) =>
    setSelectedProduct(productId)

  const { data, isFetching } = useProducts();

  let fullProduct = null;
  if(selectedProduct) fullProduct = data.find((item: Product) => item._id == selectedProduct)

  return(
    <Container>
      <Sidebar 
        products={data} 
        selectedProduct={selectedProduct}
        onProductSelect={handleProductSelect} 
        loading={isFetching}
      />
      <Description 
        productId={selectedProduct}
        fullProduct={fullProduct}
      />
    </Container>
  )
}

export default Syndication;