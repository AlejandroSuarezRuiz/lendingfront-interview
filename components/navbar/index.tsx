import styled from 'styled-components';
import { IconProps } from './interface';


const StyledNavbar = styled.nav`
  height: 68px;
  background-color: ${props => props.theme.DarkGray};
  z-index: 2;
  position: relative;

  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.3);
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 80px;

  @media (max-width: 1400px) {
    padding-right: calc((1400px - 100%) * 0.5 + 100px);
  }

  @media (max-width: 1200px) {
    padding-right: 200px;
  }

  max-width: 1200px;
  margin: 0 auto;

  img {
    height: 80%;
    margin-right: 36px;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${p => p.theme.NavbarGray};
    text-transform: uppercase;
    font-size: 16px;
    padding: 12px;
    cursor: pointer;

    &:hover {
      color: ${p => p.theme.NavbarHoverGray};
    }
  }

  .link-group {
    display: flex;
  }

  .link-icon {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .stick-end {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    color: black;

    .link-icon {
      height: 100%;
      position: relative;
      padding-left: 20px;

      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 68px solid white;
        border-left: 68px solid transparent;
        top: 0;
        left: -68px;
      }
    }
  }
`;

const Icon = styled.span<IconProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  filter: invert(52%) sepia(0%) saturate(0%) hue-rotate(300deg) brightness(94%) contrast(91%);
`;

const BigName = styled.span`
  font-size: 42px;
  font-weight: bold;
  color: ${p => p.theme.NavbarGray};
`;

const Navbar = () => {

  return <StyledNavbar>
    <Wrapper>
      <img src="/logo.svg" />
      <NavigationContainer>
        <div className="link-group">
          <a>application</a>
          <a className="link-icon">
            <span>search</span>
            <Icon className="icon icon-search" size={14} />
            <Icon className="icon icon-caret-down" size={10} />
          </a>
        </div>

        <BigName>QA</BigName>

        <div className="link-group">
          <a>dashboard</a>
          <a className="link-icon">
            <Icon className="icon icon-profile" size={18} />
            <span>User Admin</span>
          </a>
        </div>

        <div className="stick-end">
          <a className="link-icon">
            <Icon className="icon icon-profile-circle" size={20} />
            <span>Admin</span>
            <Icon className="icon icon-caret-down" size={10} />
          </a>
        </div>
      </NavigationContainer>
    </Wrapper>
  </StyledNavbar>
}

export default Navbar;