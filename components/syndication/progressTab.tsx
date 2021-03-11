import styled from 'styled-components';
import Progressbar from '../progressbar';
import { ProgressTabProps } from './interface';

const StyledProgressTab = styled.div`
  background-color: ${props => props.theme.Aqua};
  color: white;
  height: 70px;

  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    margin: 0;
    padding: 0;
  }
`;

const ProgressTab = ({totalValue, remainding}: ProgressTabProps) => {

  const progressValue = ((remainding || 0)/(totalValue || 0))*100;

  return(
    <StyledProgressTab>
      <Wrapper>
        <p>Remaining amount $ {(remainding || 0).toLocaleString()} of $ {(totalValue || 0).toLocaleString()}</p>
        <Progressbar value={progressValue} />
      </Wrapper>
    </StyledProgressTab>
  )
}

export default ProgressTab