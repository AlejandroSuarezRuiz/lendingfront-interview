import { Props } from './interface';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 300;
  color: white;
  letter-spacing: 1px;

  margin: 0;
  padding: 0;
`;

const Title = ({value}: Props) => {

  return(
    <StyledTitle>
      {value}
    </StyledTitle>
  )
}

export default Title;