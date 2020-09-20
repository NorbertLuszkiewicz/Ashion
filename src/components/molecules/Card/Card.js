import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${({ photo }) => photo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;

  ${({ big }) =>
    big &&
    css`
      height: 500px;
    `}
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin: 0;
  max-width: 80%;

  ${({ big }) =>
    big &&
    css`
      font-size: 7rem};
      font-family: 'Cookie';
      font-weight: 400;
    `}
`;

const Link = styled.a`
  position: relative;
  color: white;
  text-decoration: none;
  font-weight: bold;
  width: 100px;
  padding: 7px 0;
  text-shadow: 1px 1px 5px #666;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.mainRed};
  }
`;

const StyledParagraph = styled.p`
  max-width: 70%;
  margin-top: 5px;
`;

const Card = ({ title, quantity, link, photo, big }) => (
  <Wrapper photo={photo} big={big}>
    <Title big={big}>{title}</Title>
    <StyledParagraph>{quantity}</StyledParagraph>
    <Link href={link}>SHOP NOW</Link>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  big: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

Card.defaultProps = {
  big: false,
};

export default Card;
