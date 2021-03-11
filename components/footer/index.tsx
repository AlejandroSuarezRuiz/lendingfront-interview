import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: white;
  font-size: 12px;
  position: relative;
  z-index: 2;
`;

const Footer = () => {

  return <StyledFooter>
    © LendingFront 2016
  </StyledFooter>
}

export default Footer;