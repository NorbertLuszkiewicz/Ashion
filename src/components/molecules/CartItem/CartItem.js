import React, { useState } from 'react';
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
  background-color: none;
  border: 1px solid #666;
  font-weight: bold;
  width: 30px;
  height: 35px;
`;

const StyledLabel = styled.label`
  width: 100px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  border-bottom: 1px solid black;
`;

const StyledParagraph = styled(Paragraph)`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    margin: 5px 0;
    text-align: center;
  }
`;

const QtyButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
`;

const CartItem = ({ title, price, photo, remote }) => {
  const [qty, setQty] = useState(1);

  console.log();

  return (
    <Wrapper>
      <StyledImg src={photo} />
      <MobileWrapper>
        <Title>{title}</Title>
        <StyledLabel>
          <StyledParagraph>QTY</StyledParagraph>
          <QtyButton onClick={() => setQty(qty > 1 ? qty - 1 : 1)}> {'<'} </QtyButton>
          <StyledInput
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value !== 0 ? e.target.value : 1)}
          />
          <QtyButton onClick={() => setQty(Number(qty) + 1)}> {'>'} </QtyButton>
        </StyledLabel>
        <Price>${price * qty}</Price>
      </MobileWrapper>
      <StyledButton onClick={remote}>X</StyledButton>
    </Wrapper>
  );
};

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  remote: PropTypes.func.isRequired,
};

export default CartItem;
