import styled from 'styled-components';
import { Props, StyleProps } from './interface';

const StyledButton = styled.button<StyleProps>`
  padding: 8px;
  border-radius: 9999px;
  border: none;

  background-color: ${p => p.secondary ? p.theme.Aqua : "white"};
  color: ${p => p.secondary ? "white" : p.theme.Aqua};

  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
  cursor: pointer;
  outline: none;
`;

const Button = ({children, secondary}: Props) => {

  return(
    <StyledButton secondary={secondary}>
      {children}
    </StyledButton>
  )
}

export default Button;