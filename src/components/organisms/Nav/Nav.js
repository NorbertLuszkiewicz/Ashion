import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import logo from 'assets/logo.png';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons';

const StyledWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background-color: white;
  z-index: 9;
`;

const ItemList = styled.ul`
  display: flex;
  flex-flow: column;
  list-style-type: none;
  justify-content: center;
  padding: 0;
  width: 100%;
  font-weight: bold;
`;

const Item = styled.li`
  position: relative;
  width: 100%;
  text-decoration: none;
  color: black;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 15px;
  transition: transform 0.3s;

  :hover::after {
    transform: scaleX(1);
    transition: transform 0.3s;
  }

  ::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.mainRed};
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s;
  }
`;

const Logo = styled.img`
  height: 35px;
`;

const MoblieWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  transform: translateX(-100%);
  background: rgba(256, 256, 256, 0.85);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

const ItemBasket = styled.a`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: black;
  text-align: center;
  width: 100%;
  transition: color 0.3s ease;
  padding: 10px;

  :hover {
    color: ${({ theme }) => theme.mainRed};
  }
`;

const MenuButton = styled.button`
  position: relative;
  z-index: 999;
  font-size: 3.5rem;
  padding: 5px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Nav = () => {
  const [isOpen, changeIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <Logo src={logo} alt="logo Ashion" />
      <MoblieWrapper isOpen={isOpen}>
        <ItemList>
          <Item to={routes.home} as={NavLink} activeclass="active">
            Home
          </Item>
          <Item to={routes.women} as={NavLink}>
            Women's
          </Item>
          <Item to={routes.men} as={NavLink}>
            Men's
          </Item>
          <Item to={routes.contact} as={NavLink}>
            Contact
          </Item>
        </ItemList>
        <ItemBasket to={routes.home} as={NavLink}>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </ItemBasket>
      </MoblieWrapper>
      <MenuButton onClick={() => changeIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
    </StyledWrapper>
  );
};

export default Nav;
