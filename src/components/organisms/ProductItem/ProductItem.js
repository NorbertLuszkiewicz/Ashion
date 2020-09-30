import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Label from 'components/atoms/Label/Label';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 10px auto;
  text-align: center;
  font-weight: 300;
`;

const Price = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: 5px;
  text-align: center;

  ${({ color }) =>
    color === 'red' &&
    css`
      color: ${({ theme }) => theme.mainRed};
    `}
`;

const StyledImg = styled.img`
  object-fit: cover;
  object-position: top;
`;
const Raiting = styled.div`
  color: #e3c01c;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-align: center;
  margin-bottom: 10px;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  :hover * {
    transform: translateY(0);
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  background-color: #66bb66;
  transition: transform 0.2s linear;
  color: white;
  font-weight: bold;
`;

const ProductItem = ({ title, price, photo, color, label, id }) => {
  return (
    <Wrapper>
      <ImgWrapper to={`/product/${id}`} as={Link}>
        <StyledImg src={photo} />
        <StyledButton>Add to cart</StyledButton>
      </ImgWrapper>
      <Label color={color}>{label}</Label>
      <Title>{title}</Title>
      <Raiting>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </Raiting>
      <Price color={color}>{price}</Price>
    </Wrapper>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string,
  photo: PropTypes.string.isRequired,
  label: PropTypes.string,
};

ProductItem.defaultProps = {
  color: null,
  label: null,
};

export default ProductItem;
