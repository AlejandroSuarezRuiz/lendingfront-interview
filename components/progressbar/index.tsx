import styled from 'styled-components';
import { ProgressbarProps } from './interface';

const StyledProgressbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Shadow = styled.div`
  background-color: ${p => p.theme.ShadowAqua};
  height: 6px;
  border-radius: 9999px;
`;

const Fillbar = styled.div<ProgressbarProps>`
  height: 100%;
  width: ${p => `${p.value}%`};
  background-color: white;
  border-radius: 9999px;
`;

const Percentages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  p {
    margin: 0;
    padding: 0;
  }
`;

const Progressbar = ({value}: ProgressbarProps) => {

  return(
    <StyledProgressbar>
      <Shadow>
        <Fillbar value={value} />
      </Shadow>
      <Percentages>
        <p>0%</p>
        <p>100%</p>
      </Percentages>
    </StyledProgressbar>
  )
}

export default Progressbar;