import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 90px 1fr 40px;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 10px auto;
  text-align: center;
  font-weight: bold;
`;

const Price = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 10px;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 80px;
  object-fit: cover;
  object-position: top;
`;

const StyledButton = styled(Button)`
  transform: translateY(100%);
  background-color: red;
  color: white;
  font-weight: bold;
  width: 30px;
  height: 35px;
`;

const StyledLabel = styled.label`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledParagraph = styled(Paragraph)`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    margin: 5px 0;
    text-align: center;
  }
`;

const CartItem = ({ title, price, photo, remote }) => (
  <Wrapper>
    <StyledImg src={photo} />
    <MobileWrapper>
      <Title>{title}</Title>
      <StyledLabel>
        <StyledParagraph>QTY</StyledParagraph>
        <StyledInput type="number" value="1" />
      </StyledLabel>
      <Price>{price}</Price>
    </MobileWrapper>
    <StyledButton onClick={remote}>X</StyledButton>
  </Wrapper>
);

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  remote: PropTypes.func.isRequired,
};

export default CartItem;
